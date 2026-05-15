import { C } from "../theme";

export default function Footer() {
  return (
    <footer style={{ background: "#fff", borderTop: `1px solid ${C.grayBorder}`, padding: "56px 24px 40px" }}>
      <div style={{ maxWidth: 520, margin: "0 auto", textAlign: "center" }}>
        <h3 style={{ fontSize: 22, fontWeight: 500, color: C.navy, marginBottom: 8, lineHeight: 1.35 }}>
          Subscribe to my newsletter to get latest updates &amp; news
        </h3>
        <div style={{ display: "flex", gap: 10, marginTop: 24, marginBottom: 12 }}>
          <input placeholder="First name" style={{ flex: 1, padding: "12px 14px", border: `1px solid ${C.grayBorder}`, borderRadius: 8, fontSize: 14 }} />
          <input placeholder="Email" type="email" style={{ flex: 1.2, padding: "12px 14px", border: `1px solid ${C.grayBorder}`, borderRadius: 8, fontSize: 14 }} />
        </div>
        <button type="button" style={{ width: "100%", background: C.magenta, color: "#fff", borderRadius: 30, padding: "13px", fontSize: 15, fontWeight: 600, marginBottom: 14 }}>
          Subscribe
        </button>
        <p style={{ fontSize: 12, color: C.grayText, lineHeight: 1.5 }}>
          By signing up, you agree to our{" "}
          <span style={{ color: C.navy, textDecoration: "underline", cursor: "pointer" }}>Privacy Policy</span>
        </p>
      </div>
      <div style={{ maxWidth: 1120, margin: "40px auto 0", paddingTop: 24, borderTop: `1px solid ${C.grayBorder}`, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
        <span style={{ fontWeight: 500, fontSize: 15, color: "#111827" }}>oracle girl</span>
        <span style={{ fontSize: 13, color: C.grayText }}>© {new Date().getFullYear()} Oracle Girl</span>
      </div>
    </footer>
  );
}
