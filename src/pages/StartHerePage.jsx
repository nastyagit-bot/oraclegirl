import Footer from "../components/Footer";
import FadeIn from "../components/FadeIn";
import { C, BRAND_GRADIENT, BTN_GRADIENT } from "../theme";

const PURIFICATION_CARDS = [
  { icon: "◎", bg: "#DBEAFE", color: "#3B82F6", text: "Remote purification via your own source connection — join from anywhere in the world." },
  { icon: "◷", bg: "#FCE7F3", color: "#EC4899", text: "All-day events that work silently while you carry on with your day, rest, or sleep." },
  { icon: "◉", bg: "#DCFCE7", color: "#16A34A", text: "Group field amplifies alignment with nature and purity for everyone who joins." },
  { icon: "♡", bg: "#EDE9FE", color: "#7C3AED", text: "Open-access and entirely by donation — give as you wish in line with your own signals." },
];

const REBOOT_CARDS = [
  { icon: "📅", bg: "#DBEAFE", title: "Recurring schedule", text: "An all-day purification, every Wednesday and Saturday" },
  { icon: "◎", bg: "#FCE7F3", title: "Add your specific focus", text: "Calibrate your purification, in the area of greatest need" },
  { icon: "◉", bg: "#DCFCE7", title: "Collective field", text: "Experience the power of group purification" },
  { icon: "✦", bg: "#EDE9FE", title: "Deep impact", text: "Make new choices and notice the shift in your being" },
];

const FAQ = [
  { q: "Why join?", a: "Oracle Girl events work on an unseen level. You don't need to understand anything — sign up and let the purification meet you where you are." },
  { q: "How do I get started?", a: "Begin with the Reboot Group in your Personal account. Add a specific focus, then join other events as you wish." },
  { q: "What about others & children?", a: "You can sign up others for purification with their own specific focus from your Personal account." },
  { q: "How do I decide my donation?", a: "Donations are voluntary. Give as you wish — there is no fixed amount." },
  { q: "Is it safe?", a: "Yes. Purification works silently in the background while you carry on with your day." },
  { q: "I'm not religious or spiritual, does it matter?", a: "No. Anyone can join, wherever you are in the world." },
  { q: "How do I leave the purification space?", a: "You can stop subscriptions anytime from your Personal account or Subscriptions page." },
];

const sectionTitle = {
  fontSize: "clamp(22px, 3vw, 28px)",
  fontWeight: 500,
  color: C.brandBlue,
  textAlign: "center",
  marginBottom: 16,
  letterSpacing: "-0.01em",
};

function IconCard({ icon, iconBg, iconColor, title, text }) {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 12,
        padding: title ? "22px 20px" : "24px 18px",
        boxShadow: "0 2px 14px rgba(91, 107, 191, 0.08)",
        textAlign: title ? "left" : "center",
        height: "100%",
      }}
    >
      <div
        style={{
          width: 44,
          height: 44,
          borderRadius: "50%",
          background: iconBg,
          color: iconColor || C.brandBlue,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 20,
          margin: title ? "0 0 12px" : "0 auto 14px",
        }}
      >
        {icon}
      </div>
      {title && <h3 style={{ fontSize: 15, fontWeight: 500, color: C.brandBlue, marginBottom: 6 }}>{title}</h3>}
      <p style={{ fontSize: 14, lineHeight: 1.65, color: "#4B5563", fontWeight: 400 }}>{text}</p>
    </div>
  );
}

export default function StartHerePage({ onNav, setSelectedEvent, events }) {
  const joinReboot = () => {
    const ev = events?.find((e) => e.title === "Reboot Group") || events?.[0];
    if (ev) setSelectedEvent(ev);
    onNav("event-detail");
  };

  return (
    <div>
      {/* Hero */}
      <section style={{ position: "relative", minHeight: "min(52vh, 480px)", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
        <img
          src="/images/start-here-hero.png"
          alt=""
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 40%" }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.35) 50%, rgba(255,255,255,0.92) 100%)",
          }}
        />
        <div style={{ position: "relative", zIndex: 1, textAlign: "center", color: "#fff", padding: "80px 24px 100px", maxWidth: 640 }}>
          <h1 style={{ fontSize: "clamp(36px, 5vw, 48px)", fontWeight: 500, marginBottom: 16, letterSpacing: "-0.02em", textShadow: "0 2px 20px rgba(0,0,0,0.25)" }}>
            Start here
          </h1>
          <p style={{ fontSize: 17, lineHeight: 1.65, fontWeight: 400, textShadow: "0 1px 12px rgba(0,0,0,0.2)" }}>
            Welcome to Oracle Girl. You&apos;ve found what you&apos;ve been searching for — a path to purification and transformation through Jacqueline&apos;s unique work.
          </p>
        </div>
      </section>

      {/* What is Purification */}
      <section id="what-is-purification" style={{ padding: "72px 24px 64px", maxWidth: 960, margin: "0 auto" }}>
        <FadeIn>
          <h2 style={sectionTitle}>What is Purification?</h2>
          <p style={{ textAlign: "center", fontSize: 16, lineHeight: 1.7, color: "#4B5563", maxWidth: 640, margin: "0 auto 40px", fontWeight: 400 }}>
            Purification is remote, all-day work via your own source connection — aligning you with nature and purity through Jacqueline&apos;s group events.
          </p>
        </FadeIn>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 18 }}>
          {PURIFICATION_CARDS.map((card, i) => (
            <FadeIn key={i} delay={60 + i * 50}>
              <IconCard icon={card.icon} iconBg={card.bg} iconColor={card.color} text={card.text} />
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Why do you need it */}
      <section style={{ background: C.grayBg, padding: "64px 24px" }}>
        <FadeIn delay={80}>
          <div style={{ maxWidth: 640, margin: "0 auto" }}>
            <h2 style={{ ...sectionTitle, textAlign: "center" }}>Why do you need it</h2>
            <p style={{ fontSize: 16, lineHeight: 1.75, color: "#4B5563", marginBottom: 16, fontWeight: 400, textAlign: "center" }}>
              Your physical, emotional and spiritual bodies need to be aligned with nature and purity — not distorted by false identities, patterns or outside influences.
            </p>
            <ul style={{ listStyle: "disc", paddingLeft: 22, color: "#4B5563", fontSize: 15, lineHeight: 1.8 }}>
              <li>Delete what no longer serves you at the root level</li>
              <li>Strengthen your direct connection to your own source</li>
              <li>Make new choices from a place of clarity and lightness</li>
            </ul>
          </div>
        </FadeIn>
      </section>

      {/* How Purification works */}
      <section style={{ padding: "64px 24px" }}>
        <FadeIn delay={80}>
          <div style={{ maxWidth: 640, margin: "0 auto" }}>
            <h2 style={{ ...sectionTitle, textAlign: "center" }}>How Purification works</h2>
            <p style={{ fontSize: 16, lineHeight: 1.75, color: "#4B5563", marginBottom: 16, fontWeight: 400, textAlign: "center" }}>
              Each event is an all-day purification, remotely, via your own source connection. Simply sign up and be aware of the start and finish time.
            </p>
            <ul style={{ listStyle: "disc", paddingLeft: 22, color: "#4B5563", fontSize: 15, lineHeight: 1.8 }}>
              <li>Sign up for yourself, someone else, or a critical issue</li>
              <li>Carry on as normal, rest, meditate, or treat it as a retreat</li>
              <li>Watch what comes up and act on what strengthens inside you</li>
            </ul>
          </div>
        </FadeIn>
      </section>

      {/* Jacqueline's Work Style */}
      <section style={{ background: C.grayBg, padding: "64px 24px 80px" }}>
        <FadeIn delay={100}>
          <h2 style={{ ...sectionTitle, marginBottom: 40 }}>Jacqueline&apos;s Work Style</h2>
          <div style={{ maxWidth: 960, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 40, alignItems: "start" }}>
            <img
              src="/images/jacqueline.png"
              alt="Jacqueline"
              style={{ width: "100%", borderRadius: 12, display: "block", objectFit: "cover", aspectRatio: "4/5", background: "#E5E7EB" }}
            />
            <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                  <span style={{ fontSize: 18, color: C.brandBlue }}>👥</span>
                  <h3 style={{ fontSize: 17, fontWeight: 500, color: C.brandBlue }}>Groups work only</h3>
                </div>
                <p style={{ fontSize: 15, lineHeight: 1.7, color: "#4B5563", fontWeight: 400 }}>
                  The group generates a collective field which, combined with my own love and presence, intensifies direct individual alignment with nature and purity, for everyone who joins.
                </p>
              </div>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                  <span style={{ fontSize: 18 }}>⚠️</span>
                  <h3 style={{ fontSize: 17, fontWeight: 500, color: C.brandBlue }}>No individual sessions</h3>
                </div>
                <p style={{ fontSize: 15, lineHeight: 1.7, color: "#4B5563", fontWeight: 400 }}>
                  I don&apos;t give emotional support, individual feedback, private sessions, or online one-to-ones. The focus is on personal autonomy and making new decisions.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Begin with Reboot Group */}
      <section style={{ padding: "72px 24px 80px", maxWidth: 960, margin: "0 auto" }}>
        <FadeIn delay={80}>
          <p style={{ textAlign: "center", fontSize: 13, fontWeight: 500, color: C.magenta, marginBottom: 10, display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>
            <span style={{ color: C.magenta }}>→</span> Signature Event
          </p>
          <h2 style={{ textAlign: "center", fontSize: "clamp(26px, 4vw, 34px)", fontWeight: 500, color: C.brandBlue, marginBottom: 14, letterSpacing: "-0.02em" }}>
            Begin with{" "}
            <span style={{ background: BRAND_GRADIENT, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Reboot Group
            </span>
          </h2>
          <p style={{ textAlign: "center", fontSize: 16, lineHeight: 1.7, color: "#4B5563", maxWidth: 560, margin: "0 auto 36px", fontWeight: 400 }}>
            The Reboot Group is the main event in the purification space — the perfect entry point into taking healthy control.
          </p>
        </FadeIn>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 18, marginBottom: 40 }}>
          {REBOOT_CARDS.map((card, i) => (
            <FadeIn key={card.title} delay={100 + i * 50}>
              <IconCard icon={card.icon} iconBg={card.bg} title={card.title} text={card.text} />
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={120}>
          <h3 style={{ fontSize: 17, fontWeight: 500, color: C.brandBlue, marginBottom: 14 }}>What to expect</h3>
          <ul style={{ listStyle: "disc", paddingLeft: 22, color: "#4B5563", fontSize: 15, lineHeight: 1.85, marginBottom: 32 }}>
            <li>Sign up for yourself, first.</li>
            <li>You&apos;ll receive an all day purification via your own source connection.</li>
            <li>It works silently in the background, meeting you exactly where you are.</li>
            <li>You don&apos;t need to do anything. Carry on with your day even if you are sleeping.</li>
            <li>Add a specific focus in your Personal account to calibrate your purification.</li>
          </ul>
          <button
            type="button"
            onClick={joinReboot}
            style={{
              width: "100%",
              maxWidth: 480,
              display: "block",
              margin: "0 auto 24px",
              background: BTN_GRADIENT,
              color: "#fff",
              borderRadius: 999,
              padding: "16px 32px",
              fontSize: 16,
              fontWeight: 500,
              boxShadow: "0 4px 20px rgba(217, 70, 239, 0.35)",
            }}
          >
            Join next Reboot Group
          </button>
          <p style={{ textAlign: "center", fontSize: 14, lineHeight: 1.65, color: C.grayText, fontStyle: "italic", maxWidth: 520, margin: "0 auto" }}>
            &ldquo;The Reboot is where it all begins. Live more powerfully in direct alignment with purity and nature, held by the collective field of the group and my profound offering.&rdquo;
          </p>
        </FadeIn>
      </section>

      {/* FAQ */}
      <section style={{ background: C.grayBg, padding: "64px 24px 40px", maxWidth: 720, margin: "0 auto" }}>
        <FadeIn delay={80}>
          <h2 style={{ ...sectionTitle, marginBottom: 28 }}>Frequently asked questions</h2>
        </FadeIn>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {FAQ.map((item, i) => (
            <FadeIn key={item.q} delay={100 + i * 50}>
              <details style={{ background: "#fff", border: `1px solid ${C.grayBorder}`, borderRadius: 12, padding: "16px 20px" }}>
                <summary style={{ fontWeight: 500, fontSize: 15, color: C.brandBlue, cursor: "pointer", display: "flex", alignItems: "center", gap: 12 }}>
                  <span style={{ width: 26, height: 26, borderRadius: "50%", background: C.brandBlue, color: "#fff", fontSize: 12, fontWeight: 500, display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{i + 1}</span>
                  {item.q}
                </summary>
                <p style={{ marginTop: 12, marginLeft: 38, fontSize: 15, color: "#4B5563", lineHeight: 1.65, fontWeight: 400 }}>{item.a}</p>
              </details>
            </FadeIn>
          ))}
        </div>
      </section>

      <FadeIn delay={60}>
        <Footer />
      </FadeIn>
    </div>
  );
}
