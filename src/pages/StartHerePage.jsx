import Footer from "../components/Footer";
import FadeIn from "../components/FadeIn";
import { C, CARD_GRADIENT } from "../theme";

const FAQ = [
  { q: "Why join?", a: "Oracle Girl events work on an unseen level. You don't need to understand anything — sign up and let the purification meet you where you are." },
  { q: "How do I get started?", a: "Begin with the Reboot Group in your Personal account. Add a specific focus, then join other events as you wish." },
  { q: "What about others & children?", a: "You can sign up others for purification with their own specific focus from your Personal account." },
  { q: "How do I decide my donation?", a: "Donations are voluntary. Give as you wish — there is no fixed amount." },
  { q: "Is it safe?", a: "Yes. Purification works silently in the background while you carry on with your day." },
  { q: "I'm not religious or spiritual, does it matter?", a: "No. Anyone can join, wherever you are in the world." },
  { q: "How do I leave the purification space?", a: "You can stop subscriptions anytime from your Personal account or Subscriptions page." },
];

export default function StartHerePage({ onNav, setSelectedEvent, events }) {
  const joinReboot = () => {
    const ev = events?.find((e) => e.title === "Reboot Group") || events?.[0];
    if (ev) setSelectedEvent(ev);
    onNav("event-detail");
  };

  return (
    <div>
      <FadeIn>
        <section style={{ padding: "56px 24px 40px", maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
          <h1 style={{ fontSize: 38, fontWeight: 500, color: C.navy, marginBottom: 18, letterSpacing: "-0.02em" }}>Start here</h1>
          <p style={{ fontSize: 17, lineHeight: 1.7, color: "#374151", fontWeight: 400 }}>
            Welcome to Oracle Girl. You&apos;ve found what you&apos;ve been searching for: living directly aligned with nature and purity through Jacqueline&apos;s unique, new groundbreaking work.
          </p>
        </section>
      </FadeIn>

      <section style={{ background: C.grayBg, padding: "64px 24px" }}>
        <FadeIn delay={80}>
          <div style={{ maxWidth: 720, margin: "0 auto" }}>
            <h2 style={{ fontSize: 26, fontWeight: 500, color: C.navy, marginBottom: 16, letterSpacing: "-0.01em" }}>Anyone can join</h2>
            {[
              "Start making positive change in the world right now. Simply join an event for yourself, someone else or a critical issue and give as you wish. Your donation enables us to keep on offering more events and supports Jacqueline's spiritual presence in the world.",
              "Anyone can join, wherever you are in the world. You don't need to do or understand anything. It doesn't matter who you are, what you've done or not done.",
              "Each event involves an all day purification, remotely, via your own source connection. Simply sign up and be aware of the event start-time and finish.",
              "You can carry on as normal, take a pause to rest or meditate, or treat the whole event as a retreat space. It doesn't matter if you're busy, awake or sleeping.",
              "Watch what comes up and use it to make new choices and actions. Notice what strengthens inside you and go with it, drop the rest and simply move on.",
            ].map((text, i) => (
              <p key={i} style={{ fontSize: 16, lineHeight: 1.75, color: "#374151", marginBottom: 14, fontWeight: 400 }}>
                {text}
              </p>
            ))}
          </div>
        </FadeIn>
      </section>

      <section style={{ padding: "64px 24px 80px", maxWidth: 960, margin: "0 auto" }}>
        <FadeIn delay={120}>
          <h2 style={{ fontSize: 26, fontWeight: 500, color: C.navy, textAlign: "center", marginBottom: 40 }}>How I work</h2>
        </FadeIn>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }}>
          {[
            { title: "Groups only", text: "The group generates a collective field which, combined with my own love and presence, intensifies direct individual alignment with nature and purity, for everyone who joins." },
            { title: "What I do", text: "My own personal settings hold and anchor the group while love, purity, and nature's principles transform you — amplified by the power of the group. I don't work on you, put anything into you or take anything out." },
            { title: "No personal advice", text: "The focus of this space is on personal autonomy, making new decisions, acting and initiating changes. I don't give emotional support or individual feedback." },
            { title: "Entirely by donation", text: "Oracle Girl events are open-access. You are invited to give as you wish. In these times we can choose to act in integrity in line with our own body signals." },
          ].map((item, i) => (
            <FadeIn key={item.title} delay={160 + i * 60}>
              <div style={{ background: "#fff", border: `1px solid ${C.grayBorder}`, borderRadius: 12, padding: 22 }}>
                <h3 style={{ fontSize: 16, fontWeight: 500, color: C.navy, marginBottom: 8 }}>{item.title}</h3>
                <p style={{ fontSize: 15, color: "#374151", lineHeight: 1.65, fontWeight: 400 }}>{item.text}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section style={{ background: C.grayBg, padding: "64px 24px" }}>
        <FadeIn delay={100}>
          <div style={{ maxWidth: 1000, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>
            <div>
              <p style={{ fontSize: 12, fontWeight: 500, color: C.magenta, marginBottom: 8 }}>Signature Event</p>
              <h2 style={{ fontSize: 28, fontWeight: 500, color: C.navy, marginBottom: 14, letterSpacing: "-0.01em" }}>Begin with the Reboot Group</h2>
              <p style={{ fontSize: 16, lineHeight: 1.7, color: "#374151", marginBottom: 24, fontWeight: 400 }}>
                The Reboot Group is the main event in the purification space — the perfect entry point into taking healthy control.
              </p>
              <button type="button" onClick={joinReboot} style={{ background: C.magenta, color: "#fff", borderRadius: 30, padding: "13px 28px", fontSize: 15, fontWeight: 500 }}>
                Join the next Reboot Group
              </button>
            </div>
            <div style={{ height: 260, borderRadius: 12, background: CARD_GRADIENT }} />
          </div>
        </FadeIn>
      </section>

      <section style={{ padding: "64px 24px 40px", maxWidth: 720, margin: "0 auto" }}>
        <FadeIn delay={80}>
          <h2 style={{ fontSize: 26, fontWeight: 500, color: C.navy, textAlign: "center", marginBottom: 28 }}>Frequently asked questions</h2>
        </FadeIn>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {FAQ.map((item, i) => (
            <FadeIn key={item.q} delay={100 + i * 50}>
              <details style={{ background: "#fff", border: `1px solid ${C.grayBorder}`, borderRadius: 12, padding: "16px 20px" }}>
                <summary style={{ fontWeight: 500, fontSize: 15, color: C.navy, cursor: "pointer", display: "flex", alignItems: "center", gap: 12 }}>
                  <span style={{ width: 26, height: 26, borderRadius: "50%", background: C.navy, color: "#fff", fontSize: 12, fontWeight: 500, display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{i + 1}</span>
                  {item.q}
                </summary>
                <p style={{ marginTop: 12, marginLeft: 38, fontSize: 15, color: "#374151", lineHeight: 1.65, fontWeight: 400 }}>{item.a}</p>
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
