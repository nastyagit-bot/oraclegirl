import Footer from "../components/Footer";
import { C, CARD_GRADIENT } from "../theme";

const UPCOMING = [
  { month: "May", day: "16", title: "Reboot Group", desc: "Embody more love on this planet. Plug more deeply into just your own source connection - and nothing else. Automatically delete false identities, family patterns and unwanted influences." },
  { month: "May", day: "17", title: "Sundays@7", desc: "Join me in silence without technology. Be alone with yourself at the same time as me, wherever we both are in the world." },
  { month: "May", day: "19", title: "Global Meditation: Peace not war", desc: "Transform this planet. Radiate peace and light on Earth. Delete the root of war and killing in this world." },
  { month: "May", day: "26", title: "Reawaken 37", desc: "Absorb pure love. Transform your biology. Build your body capacity to receive the universal current in the waters of your being." },
];

export default function HomePage({ onNav, setSelectedEvent, events }) {
  const openEvent = (ev) => {
    const full = events?.find((e) => e.title === ev.title) || events?.[0];
    if (full) setSelectedEvent(full);
    onNav("event-detail");
  };

  return (
    <div>
      <section style={{ position: "relative", minHeight: 520, display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: CARD_GRADIENT }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.5) 100%)" }} />
        <div style={{ position: "relative", zIndex: 1, textAlign: "center", color: "#fff", padding: "48px 24px", maxWidth: 720 }}>
          <h1 style={{ fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 500, lineHeight: 1.12, marginBottom: 20, letterSpacing: "-0.02em" }}>
            Embodying more<br />love on this planet
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.6, opacity: 0.95, marginBottom: 32 }}>
            The future is positive. Dream. Rebuild your societies. Purify yourself and all beings.
          </p>
          <button type="button" onClick={() => onNav("start-here")} style={{ background: C.magenta, color: "#fff", borderRadius: 30, padding: "14px 36px", fontSize: 16, fontWeight: 500 }}>
            Start here
          </button>
        </div>
      </section>
      <section style={{ padding: "72px 24px", maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
        <p style={{ fontSize: 12, fontWeight: 500, letterSpacing: "0.12em", color: C.grayText, marginBottom: 12 }}>ABOUT ORACLE GIRL</p>
        <h2 style={{ fontSize: 28, fontWeight: 500, color: C.navy, marginBottom: 16, letterSpacing: "-0.01em" }}>Amplifying positive change, together</h2>
        <p style={{ fontSize: 16, lineHeight: 1.7, color: "#374151", marginBottom: 16 }}>
          Oracle Girl is a business with the charitable purpose of offering Jacqueline&apos;s spiritual presence and gifts in the world. It aims to amplify positive change via open-access community-based events and group activities based on her new, groundbreaking work, entirely by donation.
        </p>
        <p style={{ fontSize: 15, color: "#374151", marginBottom: 20 }}>Want to get started straight away? We&apos;d love you to join the Reboot Group!</p>
        <button type="button" onClick={() => onNav("start-here")} style={{ color: C.navy, fontWeight: 500, fontSize: 15 }}>Find out more about Oracle Girl →</button>
      </section>
      <section style={{ background: C.grayBg, padding: "64px 24px 80px" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto" }}>
          <h2 style={{ fontSize: 28, fontWeight: 500, color: C.navy, textAlign: "center", marginBottom: 36, letterSpacing: "-0.01em" }}>Upcoming events</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 24 }}>
            {UPCOMING.map((ev) => (
              <article key={ev.title} onClick={() => openEvent(ev)} style={{ background: "#fff", borderRadius: 12, overflow: "hidden", cursor: "pointer", border: `1px solid ${C.grayBorder}`, boxShadow: "0 1px 4px rgba(0,0,0,.06)" }}>
                <div style={{ height: 140, background: CARD_GRADIENT }} />
                <div style={{ padding: 16, display: "flex", gap: 12 }}>
                  <div style={{ textAlign: "center", flexShrink: 0 }}>
                    <div style={{ fontSize: 11, fontWeight: 500, color: C.navy, textTransform: "uppercase" }}>{ev.month}</div>
                    <div style={{ fontSize: 22, fontWeight: 500, color: C.navy }}>{ev.day}</div>
                  </div>
                  <div>
                    <h3 style={{ fontWeight: 500, fontSize: 15, marginBottom: 6 }}>{ev.title}</h3>
                    <p style={{ fontSize: 13, color: C.grayText, lineHeight: 1.5 }}>{ev.desc}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section style={{ padding: "72px 24px 80px", maxWidth: 1000, margin: "0 auto" }}>
        <h2 style={{ fontSize: 28, fontWeight: 500, color: C.navy, textAlign: "center", marginBottom: 8, letterSpacing: "-0.01em" }}>How it works</h2>
        <p style={{ textAlign: "center", color: C.grayText, marginBottom: 48 }}>Purification in 3 simple steps</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32 }}>
          {[
            { n: "1", title: "Sign up", text: "Join the Reboot Group first, then any other event which feels right to you" },
            { n: "2", title: "On the day", text: "Carry on what you are doing, sit quietly or click the link" },
            { n: "3", title: "Take action", text: "Watch what comes up, make new choices and notice the shift in your being" },
          ].map((s) => (
            <div key={s.n} style={{ textAlign: "center" }}>
              <div style={{ width: 48, height: 48, borderRadius: "50%", background: C.navy, color: "#fff", fontSize: 20, fontWeight: 500, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>{s.n}</div>
              <h3 style={{ fontSize: 18, fontWeight: 500, color: C.navy, marginBottom: 8 }}>{s.title}</h3>
              <p style={{ fontSize: 14, color: C.grayText, lineHeight: 1.6 }}>{s.text}</p>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: 40 }}>
          <button type="button" onClick={() => openEvent({ title: "Reboot Group" })} style={{ background: C.magenta, color: "#fff", borderRadius: 30, padding: "13px 32px", fontSize: 16, fontWeight: 500 }}>Join the Reboot Group</button>
        </div>
      </section>
      <section style={{ background: C.grayBg, padding: "72px 24px 80px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>
          <div>
            <p style={{ fontSize: 12, fontWeight: 500, color: C.magenta, marginBottom: 8 }}>Signature Event</p>
            <h2 style={{ fontSize: 32, fontWeight: 500, color: C.navy, marginBottom: 16, letterSpacing: "-0.01em" }}>Begin with the Reboot Group</h2>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: "#374151", marginBottom: 24 }}>The Reboot Group is the main event in the purification space — the perfect entry point into taking healthy control.</p>
            <ul style={{ listStyle: "none", marginBottom: 28 }}>
              {[
                ["Recurring schedule", "An all-day purification, every Wednesday and Saturday"],
                ["Add your specific focus", "Calibrate your purification, in the area of greatest need"],
                ["Collective field", "Experience the power of group purification"],
                ["Deep impact", "Make new choices and notice the shift in your being"],
              ].map(([t, d]) => (
                <li key={t} style={{ marginBottom: 14 }}>
                  <div>{t}</div>
                  <div style={{ fontSize: 13, color: C.grayText, lineHeight: 1.5 }}>{d}</div>
                </li>
              ))}
            </ul>
            <button type="button" onClick={() => openEvent({ title: "Reboot Group" })} style={{ background: C.magenta, color: "#fff", borderRadius: 30, padding: "13px 28px", fontWeight: 500 }}>Join the next Reboot Group</button>
          </div>
          <div style={{ height: 320, borderRadius: 12, background: CARD_GRADIENT }} />
        </div>
      </section>
      <section style={{ padding: "48px 24px", maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
        <h3 style={{ fontSize: 22, fontWeight: 500, color: C.navy, marginBottom: 8 }}>Immediate assistance</h3>
        <p style={{ color: C.grayText, lineHeight: 1.6 }}>A short laser-like purification for sudden emergencies or on a certain date.</p>
      </section>
      <Footer />
    </div>
  );
}
