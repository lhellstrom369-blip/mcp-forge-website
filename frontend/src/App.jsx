import { useMemo } from 'react';
import { motion } from 'framer-motion';
import {
  FiShield,
  FiZap,
  FiLayers,
  FiCpu,
  FiArrowRight,
  FiCheck,
  FiCode,
  FiActivity
} from 'react-icons/fi';
import './styles/app.css';

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0 }
};

function GlassCard({ className = '', children }) {
  return <div className={`glass ${className}`}>{children}</div>;
}

function Pill({ children }) {
  return <span className="pill">{children}</span>;
}

function SectionTitle({ kicker, title, subtitle }) {
  return (
    <div className="sectionTitle">
      {kicker ? <div className="kicker">{kicker}</div> : null}
      <h2>{title}</h2>
      {subtitle ? <p className="muted">{subtitle}</p> : null}
    </div>
  );
}

function App() {
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <div className="page">
      <div className="bg" aria-hidden="true">
        <div className="orb orb1" />
        <div className="orb orb2" />
        <div className="orb orb3" />
        <div className="grid" />
      </div>

      <header className="header">
        <div className="container headerInner">
          <div className="brand">
            <div className="logo">MF</div>
            <div>
              <div className="brandName">MCP Forge</div>
              <div className="brandTag">Agents • MCP • Production</div>
            </div>
          </div>

          <nav className="nav">
            <a href="#capabilities">Capabilities</a>
            <a href="#process">Process</a>
            <a href="#proof">Proof</a>
            <a href="#pricing">Pricing</a>
            <a href="#contact" className="btn btnSmall">Book a Call</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container heroInner">
            <motion.div
              className="heroCopy"
              initial="hidden"
              animate="show"
              transition={{ staggerChildren: 0.08 }}
            >
              <motion.div variants={fadeUp}>
                <div className="heroPills">
                  <Pill>Production AI agents</Pill>
                  <Pill>MCP-native integrations</Pill>
                  <Pill>Security-first</Pill>
                </div>
              </motion.div>

              <motion.h1 variants={fadeUp}>
                Build AI agents that <span className="glow">ship</span>.
              </motion.h1>

              <motion.p className="heroSub" variants={fadeUp}>
                We design and deploy reliable AI agents and MCP integrations that plug into
                your tools, data, and workflows — without prototypes that die in staging.
              </motion.p>

              <motion.div className="heroCtas" variants={fadeUp}>
                <a className="btn btnPrimary" href="#contact">
                  Book a Call <FiArrowRight />
                </a>
                <a className="btn btnGhost" href="#capabilities">
                  See Capabilities
                </a>
              </motion.div>

              <motion.div className="heroMeta" variants={fadeUp}>
                <div className="metaItem">
                  <FiActivity />
                  <span>Observability + evals baked in</span>
                </div>
                <div className="metaItem">
                  <FiShield />
                  <span>Least-privilege tool access</span>
                </div>
                <div className="metaItem">
                  <FiCode />
                  <span>MCP tools + internal APIs</span>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              className="heroPanel"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <GlassCard className="panel">
                <div className="panelHeader">
                  <div className="panelTitle">Agent Blueprint</div>
                  <div className="panelBadge">MCP</div>
                </div>

                <div className="panelGrid">
                  <div className="panelBox">
                    <div className="panelLabel">Inputs</div>
                    <div className="panelValue">Slack • Email • Tickets • DB</div>
                  </div>
                  <div className="panelBox">
                    <div className="panelLabel">Tools</div>
                    <div className="panelValue">MCP Servers • REST • SQL • RAG</div>
                  </div>
                  <div className="panelBox">
                    <div className="panelLabel">Policies</div>
                    <div className="panelValue">PII rules • approvals • audit</div>
                  </div>
                  <div className="panelBox">
                    <div className="panelLabel">Outputs</div>
                    <div className="panelValue">Actions • drafts • dashboards</div>
                  </div>
                </div>

                <div className="panelFooter">
                  <div className="tiny muted">
                    Typical pilot: 48–72h to first working agent.
                  </div>
                  <a className="btn btnSmall btnPrimary" href="#contact">
                    Start a Pilot
                  </a>
                </div>
              </GlassCard>

              <div className="floatingNote glass">
                <FiZap />
                <div>
                  <div className="noteTitle">Fast iteration</div>
                  <div className="tiny muted">Ship weekly improvements with evals.</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="proof" className="strip">
          <div className="container stripInner">
            <div className="stripItem"><FiLayers /> MCP-native integrations</div>
            <div className="stripItem"><FiShield /> Security & audit trails</div>
            <div className="stripItem"><FiCpu /> Tool orchestration</div>
            <div className="stripItem"><FiActivity /> Monitoring + evals</div>
          </div>
        </section>

        <section id="capabilities" className="section">
          <div className="container">
            <SectionTitle
              kicker="Capabilities"
              title="Everything you need for production agents"
              subtitle="We build agents that connect to real systems, follow policies, and stay observable in production."
            />

            <div className="cards">
              <GlassCard className="card">
                <div className="icon"><FiLayers /></div>
                <h3>MCP Integrations</h3>
                <p className="muted">Connect agents to Slack, Gmail, Notion, CRMs, databases, and internal APIs.</p>
                <ul className="list">
                  <li><FiCheck /> MCP server setup & hardening</li>
                  <li><FiCheck /> Tool permissions & scopes</li>
                  <li><FiCheck /> Structured tool outputs</li>
                </ul>
              </GlassCard>

              <GlassCard className="card">
                <div className="icon"><FiCpu /></div>
                <h3>Custom AI Agents</h3>
                <p className="muted">Support, sales, ops, research — tuned to your workflow and risk tolerance.</p>
                <ul className="list">
                  <li><FiCheck /> Memory + context routing</li>
                  <li><FiCheck /> Approval gates for risky actions</li>
                  <li><FiCheck /> Human-in-the-loop design</li>
                </ul>
              </GlassCard>

              <GlassCard className="card">
                <div className="icon"><FiActivity /></div>
                <h3>Evals & Observability</h3>
                <p className="muted">Measure reliability and reduce costs with traceability and automated testing.</p>
                <ul className="list">
                  <li><FiCheck /> Success metrics + dashboards</li>
                  <li><FiCheck /> Regression eval suites</li>
                  <li><FiCheck /> Cost + latency budgets</li>
                </ul>
              </GlassCard>

              <GlassCard className="card">
                <div className="icon"><FiShield /></div>
                <h3>Security-First</h3>
                <p className="muted">Least privilege, audit logs, secrets management, and safe tool boundaries.</p>
                <ul className="list">
                  <li><FiCheck /> Secret isolation + rotation</li>
                  <li><FiCheck /> PII policies and redaction</li>
                  <li><FiCheck /> Access review playbooks</li>
                </ul>
              </GlassCard>
            </div>
          </div>
        </section>

        <section id="process" className="section">
          <div className="container">
            <SectionTitle
              kicker="Process"
              title="Move from idea → pilot → production"
              subtitle="We optimize for speed *and* reliability. You get working software quickly, then we harden it."
            />

            <div className="timeline">
              <GlassCard className="step">
                <div className="stepNum">01</div>
                <h3>Discovery</h3>
                <p className="muted">Define outcomes, constraints, and the systems we connect to.</p>
                <div className="tiny muted">1–2 hours</div>
              </GlassCard>
              <GlassCard className="step">
                <div className="stepNum">02</div>
                <h3>Pilot</h3>
                <p className="muted">Ship a working agent with 1–2 MCP tools and clear success metrics.</p>
                <div className="tiny muted">48–72 hours</div>
              </GlassCard>
              <GlassCard className="step">
                <div className="stepNum">03</div>
                <h3>Hardening</h3>
                <p className="muted">Add guardrails, evals, monitoring, and staged rollout.</p>
                <div className="tiny muted">1–2 weeks</div>
              </GlassCard>
              <GlassCard className="step">
                <div className="stepNum">04</div>
                <h3>Scale</h3>
                <p className="muted">Expand tool surface area, improve reliability, reduce cost.</p>
                <div className="tiny muted">Ongoing</div>
              </GlassCard>
            </div>
          </div>
        </section>

        <section id="pricing" className="section">
          <div className="container">
            <SectionTitle
              kicker="Pricing"
              title="Start small. Prove ROI. Then scale."
              subtitle="Transparent packages to get to production quickly. Custom enterprise available."
            />

            <div className="pricing">
              <GlassCard className="priceCard">
                <div className="priceTop">
                  <h3>Pilot</h3>
                  <div className="price">$3,500</div>
                  <div className="tiny muted">One-time</div>
                </div>
                <ul className="list">
                  <li><FiCheck /> 1 agent + 1 workflow</li>
                  <li><FiCheck /> 1–2 MCP tools</li>
                  <li><FiCheck /> Success metrics defined</li>
                  <li><FiCheck /> 7 days support</li>
                </ul>
                <a href="#contact" className="btn btnPrimary">Book Pilot</a>
              </GlassCard>

              <GlassCard className="priceCard featured">
                <div className="badge">Most chosen</div>
                <div className="priceTop">
                  <h3>Production</h3>
                  <div className="price">$7,500</div>
                  <div className="tiny muted">One-time + optional retainer</div>
                </div>
                <ul className="list">
                  <li><FiCheck /> 1–2 agents</li>
                  <li><FiCheck /> 3–5 MCP tools</li>
                  <li><FiCheck /> Guardrails + approvals</li>
                  <li><FiCheck /> Evals + monitoring</li>
                </ul>
                <a href="#contact" className="btn btnPrimary">Start Production</a>
              </GlassCard>

              <GlassCard className="priceCard">
                <div className="priceTop">
                  <h3>Retainer</h3>
                  <div className="price">$2,500</div>
                  <div className="tiny muted">per month</div>
                </div>
                <ul className="list">
                  <li><FiCheck /> Weekly improvements</li>
                  <li><FiCheck /> Ongoing evals</li>
                  <li><FiCheck /> New integrations</li>
                  <li><FiCheck /> Incident support</li>
                </ul>
                <a href="#contact" className="btn btnGhost">Talk Retainer</a>
              </GlassCard>
            </div>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="container">
            <SectionTitle
              kicker="Contact"
              title="Tell us what you want to automate"
              subtitle="We’ll reply with a recommended pilot scope and timeline."
            />

            <div className="contact">
              <GlassCard className="contactCard">
                <form
                  className="form"
                  onSubmit={async (e) => {
                    e.preventDefault();
                    const form = new FormData(e.currentTarget);
                    const payload = Object.fromEntries(form.entries());
                    try {
                      await fetch(`${import.meta.env.VITE_API_URL || ''}/api/lead`, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(payload)
                      });
                      e.currentTarget.reset();
                      alert('Sent. We’ll get back to you soon.');
                    } catch {
                      alert('Could not send. Please try again.');
                    }
                  }}
                >
                  <div className="row">
                    <label>
                      Name
                      <input name="name" required placeholder="Jane Founder" />
                    </label>
                    <label>
                      Email
                      <input name="email" type="email" required placeholder="jane@company.com" />
                    </label>
                  </div>
                  <div className="row">
                    <label>
                      Company
                      <input name="company" placeholder="Acme" />
                    </label>
                    <label>
                      Use case
                      <input name="useCase" placeholder="Support triage, sales enrichment, ops automation…" />
                    </label>
                  </div>
                  <label>
                    Details
                    <textarea name="message" rows="5" placeholder="What systems do we connect to? What actions should the agent take? Any restrictions?" />
                  </label>
                  <button className="btn btnPrimary" type="submit">
                    Send <FiArrowRight />
                  </button>
                  <div className="tiny muted">
                    Prefer email? hello@mcpforge.dev (placeholder)
                  </div>
                </form>
              </GlassCard>

              <div className="contactSide">
                <GlassCard className="mini">
                  <h3>Default stack</h3>
                  <p className="muted">React + Node/Express, MCP tool servers, secure secrets, evals.</p>
                </GlassCard>
                <GlassCard className="mini">
                  <h3>Typical timeline</h3>
                  <p className="muted">Pilot in 48–72h. Production hardening in 1–2 weeks.</p>
                </GlassCard>
                <GlassCard className="mini">
                  <h3>Security posture</h3>
                  <p className="muted">Least privilege, audit logs, staged rollouts, approvals for risky actions.</p>
                </GlassCard>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footerInner">
          <div className="brand">
            <div className="logo">MF</div>
            <div>
              <div className="brandName">MCP Forge</div>
              <div className="tiny muted">Production agents & MCP integrations.</div>
            </div>
          </div>
          <div className="footerLinks">
            <a href="#capabilities">Capabilities</a>
            <a href="#process">Process</a>
            <a href="#pricing">Pricing</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="tiny muted">© {year} MCP Forge. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
