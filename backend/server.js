import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { z } from 'zod';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

app.use(helmet());
app.use(cors({
  origin: process.env.CORS_ORIGIN || '*'
}));
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ status: 'healthy', ts: new Date().toISOString() });
});

const leadSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  company: z.string().optional().default(''),
  useCase: z.string().optional().default(''),
  message: z.string().optional().default('')
});

app.post('/api/lead', (req, res) => {
  const parsed = leadSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ ok: false, error: parsed.error.flatten() });
  }

  const lead = { ...parsed.data, receivedAt: new Date().toISOString() };

  // Simple durable storage: write to local JSONL.
  // In production, swap to DB / Slack / email.
  const outDir = path.join(__dirname, 'data');
  const outFile = path.join(outDir, 'leads.jsonl');
  fs.mkdirSync(outDir, { recursive: true });
  fs.appendFileSync(outFile, JSON.stringify(lead) + '\n');

  res.json({ ok: true });
});

// Serve the built frontend if present (optional single-service deploy)
const frontendDist = path.resolve(__dirname, '../frontend/dist');
if (fs.existsSync(frontendDist)) {
  app.use(express.static(frontendDist));
  app.get('*', (req, res) => {
    res.sendFile(path.join(frontendDist, 'index.html'));
  });
}

app.listen(PORT, '0.0.0.0', () => {
  console.log(`MCP Forge backend listening on ${PORT}`);
});
