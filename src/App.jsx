import { useState } from "react";
const CARD_IMG = "data:image/jpeg;base64,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";

/* ─────────────────────────────────────────────
   MOCKED DATA  ←  edit everything in this block
───────────────────────────────────────────────*/
const USER_NAME = "Test";

const EVENTS = [
  {
    id: 1,
    title: "Reboot Group",
    dateMonth: "Mar",
    dateDay: "18",
    description: "Embody more love on this planet. Plug more deeply into just your...",
    image: CARD_IMG,
    fullDate: "Wed, March 18, 2026  ·  12:00 am",
    dateShort: "Wed, November 13,  12:00 am",
    location: "All day purification",
    recurring: true,
    schedule: "Every Wednesday & Saturday",
    tags: ["Starts in 3 days", "All day purification"],
    included: ["All day purification", "Audio recording (20 min, MP3)", "Transcript (PDF)"],
    categories: ["Body & self healing", "Family issues", "Community"],
    eventDetails: "Two purification sessions take place each week on the unseen level. It's an all-day purification event. First, sign yourself up – this is essential for receiving your personal purification.\nAfter you're signed up, you can add your Specific Focus in your Personal account for deeper integration. You can then add someone else to the purification with their own Specific Focus, or gift this event to someone if you wish.",
    whatToExpect: [
      "The purification works on an unseen level, no matter what you're doing.",
      "Focused purification reaches the area of greatest need for you or those you've signed up for.",
      "You'll receive an email with any available event materials.",
    ],
    fullDescription: "Personal purifications. Embody your own purity. Plug directly into your own source connection and your own self healing ability — and nothing else. Live the positive future-now where nothing controls you and false identities, family patterns and personal issues slowly melt away.",
  },
  {
    id: 2,
    title: "Sundays@7",
    dateMonth: "Mar",
    dateDay: "22",
    description: "Join me in silence without technology. Be alone with yourse...",
    image: CARD_IMG,
    fullDate: "Sat, March 22, 2026  ·  7:00 pm",
    dateShort: "Sat, March 22, 2026  ·  7:00 pm",
    location: "Online",
    recurring: false,
    schedule: null,
    tags: ["All day purification"],
    included: ["Online session", "Audio recording"],
    categories: ["Community"],
    eventDetails: "Join me in silence without technology. Be alone with yourself at the same time as me.",
    whatToExpect: ["Be alone with yourself at the same time.", "Receive the recording after the event."],
    fullDescription: "Join me in silence without technology. Be alone with yourself at the same time as me.",
  },
  {
    id: 3,
    title: "Deep silence; global peace 23",
    dateMonth: "Mar",
    dateDay: "26",
    description: "Switch into universal light transmission. Be alone with yourse...",
    image: CARD_IMG,
    fullDate: "Wed, March 26, 2026  ·  8:00 pm",
    dateShort: "Wed, March 26, 2026  ·  8:00 pm",
    location: "Online",
    recurring: false,
    schedule: null,
    tags: ["Online"],
    included: ["Online session", "Audio recording"],
    categories: ["Community", "Global"],
    eventDetails: "Join me in silence online. Switch into universal light transmission. Drop into the deep silence that already exists within you.",
    whatToExpect: ["Switch into universal light transmission.", "Drop into deep silence."],
    fullDescription: "Join me in silence online. Switch into universal light transmission. Drop into the deep silence that already exists within you.",
  },
  {
    id: 4,
    title: "Apr 2026 Silent immersion retreat",
    dateMonth: "Apr",
    dateDay: "2",
    description: "Advanced level. Receive an in-depth personal purification...",
    image: CARD_IMG,
    fullDate: "Thu, April 2, 2026",
    dateShort: "Thu, April 2, 2026",
    location: "In person · Tenerife",
    recurring: false,
    schedule: null,
    tags: ["In person", "Advanced"],
    included: ["In-person retreat", "All meals", "Accommodation"],
    categories: ["Retreat", "Advanced"],
    eventDetails: "Advanced level. Receive an in-depth personal purification at this exclusive silent retreat. Strictly limited places.",
    whatToExpect: ["Deep personal purification.", "Silent environment.", "Strictly limited places."],
    fullDescription: "Advanced level. Receive an in-depth personal purification at this exclusive silent retreat. Strictly limited places.",
  },
];

const MORE_EVENTS = [
  { title: "Pushing the positive",  image: CARD_IMG,  desc: "Take action in your life. Open up your future pathway more clearly." },
  { title: "Rooting out the ivy",   image: CARD_IMG,  desc: "Join me in silence without technology. Be alone with yourself at the same time as me." },
  { title: "Life in the heart",     image: CARD_IMG, desc: "Live your personal instructions. Kick out a key frequency distortion holding you back." },
];

const GRADIENT_CARDS = [
  { id: 1, title: "Life in the heart",                     pct: 15, duration: "20 min", gradient: "linear-gradient(135deg, #FF9A3C 0%, #FFD0A0 18%, #C084FC 38%, #E040FB 55%, #9333EA 68%, #00D4FF 82%, #06B6D4 100%)" },
  { id: 2, title: "Reboot Discovery 3: Images of honesty", pct: 85, duration: "20 min", gradient: "linear-gradient(135deg, #FF9A3C 0%, #FFD0A0 18%, #C084FC 38%, #E040FB 55%, #9333EA 68%, #00D4FF 82%, #06B6D4 100%)" },
  { id: 3, title: "Apr 2024 SIR8: Initiation of natur",    pct: 75, duration: "95 min", gradient: "linear-gradient(135deg, #FF9A3C 0%, #FFD0A0 18%, #C084FC 38%, #E040FB 55%, #9333EA 68%, #00D4FF 82%, #06B6D4 100%)" },
  { id: 4, title: "Apr 2024 SIR8: Initiation of natur",    pct: 75, duration: "95 min", gradient: "linear-gradient(135deg, #FF9A3C 0%, #FFD0A0 18%, #C084FC 38%, #E040FB 55%, #9333EA 68%, #00D4FF 82%, #06B6D4 100%)" },
];

const MY_EVENTS_DATA = [
  {
    id: 1,
    title: "Life in the heart",
    type: "Reboot Group",
    recurring: true,
    pct: 15,
    duration: "20 min",
    gradient: "linear-gradient(135deg, #FF9A3C 0%, #FFD0A0 18%, #C084FC 38%, #E040FB 55%, #9333EA 68%, #00D4FF 82%, #06B6D4 100%)",
    date: "Mar 10, 2026",
    archived: false,
    purificationEntries: [
      { id: 101, name: "My mother", focus: "healing" },
      { id: 102, name: "Work stress", focus: "clarity and peace" },
    ],
  },
];

const SUBSCRIPTIONS_DATA = [
  { id: 1, name: "Reboot Group", status: "active", for: "Myself", schedule: "Every Wednesday & Saturday", started: "Sep 12, 2025", events: 24,  donation: "$60/month", next: "Mar 5, 2026" },
  { id: 2, name: "Reboot Group", status: "active", for: "My cat",  schedule: "Every Wednesday & Saturday", started: "Sep 12, 2025", events: 24,  donation: "$60/month", next: "Mar 5, 2026" },
  { id: 3, name: "Reboot Group", status: "paused", for: "My cat",  schedule: "Every Wednesday & Saturday", started: "June 11, 2025", events: 224, donation: "$10/event", next: "Paused" },
];
/* ─────────────────────────────────────────────
   END MOCKED DATA
───────────────────────────────────────────────*/

// The branded card gradient — matches the uploaded screenshot exactly
const CARD_GRADIENT = "linear-gradient(135deg, #FF9A3C 0%, #FFD0A0 18%, #C084FC 38%, #E040FB 55%, #9333EA 68%, #00D4FF 82%, #06B6D4 100%)";

const GLOBAL_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Figtree:wght@300;400;500;600;700;800&display=swap');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html, body { font-family: 'Figtree', sans-serif; background: #fff; color: #111827; }
  button { font-family: 'Figtree', sans-serif; cursor: pointer; border: none; background: none; outline: none; }
  input, select { font-family: 'Figtree', sans-serif; outline: none; }
`;

const C = {
  navy:       "#1E2B6F",
  orange:     "#FF6B35",
  teal:       "#00ACC1",
  magenta:    "#D946EF",
  pink:       "#EC4899",
  purple:     "#7C3AED",
  purpleTag:  "#EDE9FE",
  greenTag:   "#DCFCE7",
  greenText:  "#16A34A",
  redText:    "#DC2626",
  grayBg:     "#F9FAFB",
  grayBorder: "#E5E7EB",
  grayText:   "#6B7280",
  infoBlue:   "#3B82F6",
  infoBg:     "#EFF6FF",
  infoBorder: "#BFDBFE",
  pinkBg:     "#FDF2F8",
  pinkBorder: "#FBCFE8",
};

/* ── NAV ── */
function Nav({ onNav, menuOpen, setMenuOpen }) {
  return (
    <nav style={{ background:"#fff", borderBottom:`1px solid ${C.grayBorder}`, position:"sticky", top:0, zIndex:200 }}>
      <div style={{ maxWidth:1120, margin:"0 auto", padding:"0 24px", height:60, display:"flex", alignItems:"center", justifyContent:"space-between" }}>
        <div style={{ display:"flex", alignItems:"center", gap:8, cursor:"pointer" }} onClick={()=>onNav("home")}>
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
            <circle cx="15" cy="15" r="14" stroke="#111827" strokeWidth="1.8"/>
            <circle cx="15" cy="15" r="6.5" fill="#111827"/>
            <circle cx="15" cy="15" r="2.8" fill="#fff"/>
          </svg>
          <span style={{ fontWeight:700, fontSize:17, color:"#111827", letterSpacing:"-0.3px" }}>oracle girl</span>
        </div>
        <div style={{ display:"flex", alignItems:"center", gap:36 }}>
          <span style={{ fontSize:15, fontWeight:500, color:"#374151", cursor:"pointer" }} onClick={()=>onNav("home")}>Events</span>
          <span style={{ fontSize:15, fontWeight:500, color:"#374151", cursor:"pointer" }}>Immmediate Assistance</span>
          <span style={{ fontSize:15, fontWeight:500, color:"#374151", cursor:"pointer" }}>Top-Up</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="1.8"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
        </div>
        <div style={{ position:"relative" }}>
          <div style={{ display:"flex", alignItems:"center", gap:8, cursor:"pointer", padding:"6px 10px", borderRadius:8 }} onClick={e=>{ e.stopPropagation(); setMenuOpen(!menuOpen); }}>
            <div style={{ width:30, height:30, borderRadius:"50%", background:C.pinkBg, border:`1.5px solid ${C.pinkBorder}`, display:"flex", alignItems:"center", justifyContent:"center" }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={C.pink} strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            </div>
            <div style={{ lineHeight:1.2 }}>
              <div style={{ fontSize:13, fontWeight:600, color:"#111827" }}>Hi {USER_NAME}</div>
              <div style={{ fontSize:11, color:C.grayText }}>Personal account</div>
            </div>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg>
          </div>
          {menuOpen && (
            <div style={{ position:"absolute", right:0, top:46, background:"#fff", border:`1px solid ${C.grayBorder}`, borderRadius:10, boxShadow:"0 10px 40px rgba(0,0,0,.12)", width:200, zIndex:300 }} onClick={e=>e.stopPropagation()}>
              {[["My events","account"],["My subscriptions","subscriptions"],["Favourite list",null],["Receipts",null],["Settings",null],["Help centre",null]].map(([label,target])=>(
                <div key={label} style={{ padding:"12px 18px", fontSize:14, fontWeight:500, color:"#374151", borderBottom:`1px solid ${C.grayBorder}`, cursor:target?"pointer":"default" }} onClick={()=>{ if(target){ onNav(target); setMenuOpen(false); } }}>
                  {label}
                </div>
              ))}
              <div style={{ padding:"12px 18px", fontSize:14, fontWeight:500, color:C.redText, cursor:"pointer" }}>Log out</div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

/* ── HOME ── */
function HomeScreen({ onNav, setSelectedEvent }) {
  return (
    <div style={{ background:"#fff" }}>
      <div style={{ position:"relative", height:420, background:"#0a0a0a", overflow:"hidden" }}>
        <div style={{ position:"absolute", inset:0, background:CARD_GRADIENT, opacity:0.7 }}/>
        <div style={{ position:"absolute", inset:0, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", color:"#fff", textAlign:"center", padding:"0 32px" }}>
          <h1 style={{ fontSize:42, fontWeight:800, lineHeight:1.15, marginBottom:16 }}>Embodying more<br/>love on this planet</h1>
          <p style={{ fontSize:18, opacity:0.92, marginBottom:30, maxWidth:500 }}>The future is positive. Dream. Rebuild your societies. Purify yourself and all beings.</p>
          <button style={{ background:C.magenta, color:"#fff", borderRadius:30, padding:"13px 32px", fontSize:16, fontWeight:600 }}>Start here</button>
        </div>
      </div>
      <div style={{ maxWidth:1120, margin:"0 auto", padding:"52px 24px 64px" }}>
        <h2 style={{ fontSize:26, fontWeight:700, color:C.navy, textAlign:"center", marginBottom:36 }}>Upcoming events</h2>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:24 }}>
          {EVENTS.map(ev=>(
            <div key={ev.id} style={{ background:"#fff", border:`1px solid ${C.grayBorder}`, borderRadius:12, overflow:"hidden", cursor:"pointer", boxShadow:"0 1px 4px rgba(0,0,0,.06)" }} onClick={()=>{ setSelectedEvent(ev); onNav("event-detail"); }}>
              <div style={{ height:180, background:CARD_GRADIENT, display:"block" }}/>
              <div style={{ display:"flex", gap:12, padding:"14px" }}>
                <div style={{ flexShrink:0, textAlign:"center", minWidth:36 }}>
                  <div style={{ fontSize:11, fontWeight:700, color:C.navy, textTransform:"uppercase", lineHeight:1 }}>{ev.dateMonth}</div>
                  <div style={{ fontSize:24, fontWeight:800, color:C.navy, lineHeight:1.1 }}>{ev.dateDay}</div>
                </div>
                <div>
                  <div style={{ fontWeight:700, fontSize:15, color:"#111827", marginBottom:4, lineHeight:1.3 }}>{ev.title}</div>
                  <div style={{ fontSize:13, color:C.grayText, lineHeight:1.5 }}>{ev.description}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── EVENT DETAIL — exactly matching screenshot ── */
function EventDetailScreen({ event, onNav, setSignupEvent }) {
  if (!event) return null;

  return (
    <div style={{ background:C.grayBg, minHeight:"100vh" }}>
      <div style={{ maxWidth:1000, margin:"0 auto", padding:"32px 24px 64px" }}>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 280px", gap:28, alignItems:"start" }}>

          {/* ── Left column ── */}
          <div>
            {/* Hero image */}
            <div style={{ width:"100%", height:300, background:CARD_GRADIENT, borderRadius:12, marginBottom:16 }}/>

            {/* Tags row + share/heart */}
            <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:14 }}>
              <div style={{ display:"flex", gap:8, flexWrap:"wrap" }}>
                {event.tags.map(t=>(
                  <span key={t} style={{ border:`1px solid ${C.grayBorder}`, borderRadius:20, padding:"4px 12px", fontSize:13, color:"#374151", background:"#fff" }}>{t}</span>
                ))}
              </div>
              <div style={{ display:"flex", gap:8 }}>
                <button style={{ width:36, height:36, borderRadius:"50%", border:`1px solid ${C.grayBorder}`, background:"#fff", display:"flex", alignItems:"center", justifyContent:"center" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
                </button>
                <button style={{ width:36, height:36, borderRadius:"50%", border:`1px solid ${C.grayBorder}`, background:"#fff", display:"flex", alignItems:"center", justifyContent:"center" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                </button>
              </div>
            </div>

            {/* Title */}
            <div style={{ display:"flex", alignItems:"flex-start", gap:10, marginBottom:12 }}>
              <div style={{ width:4, height:32, background:C.orange, borderRadius:2, flexShrink:0, marginTop:4 }}/>
              <h1 style={{ fontSize:28, fontWeight:800, color:"#111827" }}>{event.title}</h1>
            </div>

            {/* Short description */}
            <p style={{ fontSize:15, lineHeight:1.7, color:"#374151", marginBottom:20 }}>{event.fullDescription}</p>

            {/* Event details box */}
            <div style={{ background:"#fff", border:`1px solid ${C.grayBorder}`, borderRadius:10, padding:"20px 22px", marginBottom:20 }}>
              <h3 style={{ fontWeight:700, fontSize:15, color:"#111827", marginBottom:10 }}>Event details</h3>
              <p style={{ fontSize:14, color:"#374151", lineHeight:1.7, marginBottom:14, whiteSpace:"pre-line" }}>{event.eventDetails}</p>
              <h3 style={{ fontWeight:700, fontSize:15, color:"#111827", marginBottom:8 }}>What to expect</h3>
              <ul style={{ paddingLeft:0, listStyle:"none" }}>
                {event.whatToExpect.map((item,i)=>(
                  <li key={i} style={{ fontSize:14, color:"#374151", marginBottom:6, display:"flex", gap:8, alignItems:"flex-start" }}>
                    <span style={{ color:C.grayText, fontSize:14, lineHeight:1.6 }}>·</span>
                    <span style={{ lineHeight:1.6 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Category tags */}
            <div style={{ display:"flex", gap:8, flexWrap:"wrap" }}>
              {event.categories.map(c=>(
                <span key={c} style={{ background:C.purpleTag, color:C.purple, borderRadius:20, padding:"5px 14px", fontSize:13, fontWeight:500 }}>{c}</span>
              ))}
            </div>

            {/* More events */}
            <div style={{ marginTop:36 }}>
              <h3 style={{ fontWeight:700, fontSize:17, marginBottom:16 }}>More events</h3>
              <div style={{ position:"relative" }}>
                <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:18 }}>
                  {MORE_EVENTS.map(me=>(
                    <div key={me.title} style={{ background:"#fff", border:`1px solid ${C.grayBorder}`, borderRadius:10, overflow:"hidden", cursor:"pointer" }} onClick={()=>onNav("home")}>
                      <div style={{ height:120, background:CARD_GRADIENT }}/>
                      <div style={{ padding:"12px" }}>
                        <div style={{ fontWeight:700, fontSize:14, marginBottom:4 }}>{me.title}</div>
                        <div style={{ fontSize:13, color:C.grayText, lineHeight:1.4 }}>{me.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <button style={{ position:"absolute", top:"50%", left:-16, transform:"translateY(-50%)", width:32, height:32, borderRadius:"50%", background:"#fff", border:`1px solid ${C.grayBorder}`, display:"flex", alignItems:"center", justifyContent:"center", boxShadow:"0 2px 8px rgba(0,0,0,.1)" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2"><polyline points="15 18 9 12 15 6"/></svg>
                </button>
                <button style={{ position:"absolute", top:8, right:0 }}>
                  <span style={{ fontSize:13, color:C.purple, fontWeight:500, border:`1px solid ${C.purple}`, borderRadius:20, padding:"5px 16px" }}>View all events</span>
                </button>
              </div>
            </div>
          </div>

          {/* ── Right column ── */}
          <div style={{ position:"sticky", top:72 }}>
            {/* Date card */}
            <div style={{ background:"#fff", border:`1px solid ${C.grayBorder}`, borderRadius:12, padding:"16px 18px", marginBottom:14 }}>
              <div style={{ display:"flex", alignItems:"center", gap:14, marginBottom:14 }}>
                {/* Calendar badge */}
                <div style={{ background:C.grayBg, border:`1px solid ${C.grayBorder}`, borderRadius:8, padding:"8px 12px", textAlign:"center", minWidth:52, flexShrink:0 }}>
                  <div style={{ fontSize:11, fontWeight:700, color:C.navy, textTransform:"uppercase" }}>Wed</div>
                  <div style={{ fontSize:22, fontWeight:800, color:"#111827" }}>{event.dateDay}</div>
                </div>
                <div>
                  <div style={{ fontWeight:600, fontSize:14, color:"#111827" }}>Wednesday, {event.dateMonth === "Mar" ? "Mar" : event.dateMonth} {event.dateDay},</div>
                  <div style={{ fontSize:14, color:C.grayText }}>12:00 am</div>
                </div>
              </div>

              {event.recurring && (
                <div style={{ display:"flex", alignItems:"flex-start", gap:10, paddingTop:12, borderTop:`1px solid ${C.grayBorder}`, marginBottom:12 }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={C.grayText} strokeWidth="2" style={{ flexShrink:0, marginTop:1 }}><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                  <div>
                    <div style={{ fontSize:14, color:"#111827" }}>Repeats {event.schedule}</div>
                    <div style={{ fontSize:13, color:C.infoBlue, cursor:"pointer", marginTop:2 }}>Show all events</div>
                  </div>
                </div>
              )}

              <div style={{ display:"flex", alignItems:"flex-start", gap:10, paddingTop:12, borderTop:`1px solid ${C.grayBorder}` }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={C.grayText} strokeWidth="2" style={{ flexShrink:0, marginTop:1 }}><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg>
                <div>
                  <div style={{ fontSize:14, color:C.grayText, marginBottom:4 }}>Included:</div>
                  {event.included.map(item=>(
                    <div key={item} style={{ fontSize:14, color:"#111827", lineHeight:1.6 }}>{item}</div>
                  ))}
                </div>
              </div>
            </div>

            {/* Join now CTA — no price */}
            <button
              style={{ width:"100%", background:C.magenta, color:"#fff", borderRadius:30, padding:"14px", fontSize:16, fontWeight:700, marginBottom:0 }}
              onClick={()=>{ setSignupEvent(event); onNav("signup"); }}
            >
              Join now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── SIGN-UP — exactly matching screenshots ── */
function SignupScreen({ event, onNav }) {
  const [purification, setPurification] = useState([]);
  const [addType, setAddType]   = useState("Person");
  const [newName, setNewName]   = useState("");
  const [newFocus, setNewFocus] = useState("");
  const [donation, setDonation] = useState("");
  const [coverFee, setCoverFee] = useState(true);
  const [applyAll, setApplyAll] = useState(true);
  const [joinOpen, setJoinOpen] = useState(false);
  const [purOpen, setPurOpen]   = useState(true);
  const [joinChoice, setJoinChoice] = useState("recurring");

  if (!event) return null;

  const addEntry = () => { if(!newName.trim()) return; setPurification([...purification,{ id:Date.now(), name:newName, focus:newFocus, type:addType }]); setNewName(""); setNewFocus(""); };
  const removeEntry = id => setPurification(purification.filter(p=>p.id!==id));

  // Calculations
  const donationNum   = parseFloat(donation) || 0;
  const entryCount    = 1 + purification.length; // "you" + added entries
  const multiplied    = applyAll ? donationNum * entryCount : donationNum;
  const processingFee = coverFee && donationNum > 0 ? parseFloat((multiplied * 0.023 + 0.30).toFixed(2)) : 0;
  const total         = donationNum > 0 ? (multiplied + processingFee).toFixed(2) : null;

  return (
    <div style={{ background:C.grayBg, minHeight:"100vh" }}>
      <div style={{ maxWidth:1120, margin:"0 auto", padding:"24px 24px 60px" }}>

        {/* Back */}
        <button style={{ fontSize:14, color:"#374151", fontWeight:500, display:"flex", alignItems:"center", gap:6, marginBottom:20 }} onClick={()=>onNav("event-detail")}>← Back to Event page</button>

        <div style={{ display:"grid", gridTemplateColumns:"1fr 340px", gap:24, alignItems:"start" }}>

          {/* ── Left ── */}
          <div>
            {/* Header */}
            <div style={{ background:"#fff", border:`1px solid ${C.grayBorder}`, borderRadius:12, padding:"18px 24px", marginBottom:14 }}>
              <h1 style={{ fontSize:19, fontWeight:700, color:C.navy }}>Complete your registration</h1>
            </div>

            {/* Section 1: Event */}
            <div style={{ background:"#fff", border:`1px solid ${C.grayBorder}`, borderRadius:12, overflow:"hidden", marginBottom:10 }}>
              <div style={{ display:"flex" }}>
                <div style={{ width:4, background:C.orange, flexShrink:0 }}/>
                <div style={{ padding:"18px 22px", flex:1 }}>
                  <h2 style={{ fontSize:16, fontWeight:700, color:"#111827", marginBottom:16 }}>Event</h2>
                  <div style={{ background:"#fff", border:`1px solid ${C.grayBorder}`, borderRadius:10, padding:"14px 16px", display:"flex", gap:14, alignItems:"flex-start" }}>
                    <div style={{ width:80, height:80, borderRadius:8, background:CARD_GRADIENT, flexShrink:0 }}/>
                    <div>
                      <div style={{ fontWeight:700, fontSize:16, marginBottom:6 }}>{event.title}</div>
                      <div style={{ display:"flex", flexWrap:"wrap", gap:"6px 18px", fontSize:13, color:"#374151", marginBottom:6 }}>
                        <span style={{ display:"flex", alignItems:"center", gap:5 }}>
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                          {event.dateShort}
                        </span>
                        {!event.recurring && (
                          <span style={{ display:"flex", alignItems:"center", gap:5 }}>
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                            {event.location}
                          </span>
                        )}
                      </div>
                      <div style={{ fontSize:13, color:C.grayText, lineHeight:1.6 }}>{event.fullDescription}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2: Choose how to join */}
            <div style={{ background:"#fff", border:`1px solid ${C.grayBorder}`, borderRadius:12, overflow:"hidden", marginBottom:10 }}>
              <div style={{ display:"flex" }}>
                <div style={{ width:4, background:C.orange, flexShrink:0 }}/>
                <div style={{ padding:"18px 22px", flex:1 }}>
                  <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", cursor:"pointer" }} onClick={()=>setJoinOpen(!joinOpen)}>
                    <h2 style={{ fontSize:16, fontWeight:700, color:"#111827" }}>Choose how to join</h2>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="2"><polyline points={joinOpen?"18 15 12 9 6 15":"6 9 12 15 18 9"}/></svg>
                  </div>

                  {joinOpen && event.recurring && (
                    <div style={{ marginTop:16 }}>
                      {/* Option 1: All upcoming (checked by default) */}
                      <div
                        style={{ border:`1px solid ${joinChoice==="recurring"?C.magenta:C.grayBorder}`, borderRadius:10, padding:"14px 16px", marginBottom:8, display:"flex", alignItems:"center", gap:12, cursor:"pointer", background:joinChoice==="recurring"?"#FDF4FF":"#fff" }}
                        onClick={()=>setJoinChoice("recurring")}
                      >
                        <div style={{ width:20, height:20, borderRadius:4, border:`2px solid ${joinChoice==="recurring"?C.magenta:C.grayBorder}`, background:joinChoice==="recurring"?C.magenta:"#fff", flexShrink:0, display:"flex", alignItems:"center", justifyContent:"center" }}>
                          {joinChoice==="recurring" && <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>}
                        </div>
                        <span style={{ fontSize:15, fontWeight:500, color:"#111827" }}>All upcoming Reboot Group events (Recurring subscription)</span>
                      </div>
                      {/* Option 2: Choose your dates */}
                      <div
                        style={{ border:`1px solid ${joinChoice==="dates"?C.magenta:C.grayBorder}`, borderRadius:10, padding:"14px 16px", marginBottom:12, display:"flex", alignItems:"center", gap:12, cursor:"pointer", background:joinChoice==="dates"?"#FDF4FF":"#fff" }}
                        onClick={()=>setJoinChoice("dates")}
                      >
                        <div style={{ width:20, height:20, borderRadius:4, border:`2px solid ${joinChoice==="dates"?C.magenta:C.grayBorder}`, background:joinChoice==="dates"?C.magenta:"#fff", flexShrink:0, display:"flex", alignItems:"center", justifyContent:"center" }}>
                          {joinChoice==="dates" && <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>}
                        </div>
                        <span style={{ fontSize:15, fontWeight:500, color:"#111827" }}>Choose your dates</span>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={C.grayText} strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                      </div>
                      <div style={{ display:"flex", alignItems:"flex-start", gap:8, fontSize:13, color:C.grayText }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginTop:1, flexShrink:0 }}><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                        <span>You can cancel anytime on the <span style={{ color:C.infoBlue, cursor:"pointer" }} onClick={()=>onNav("subscriptions")}>Subscriptions</span> page.</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Section 3: Include in purification */}
            <div style={{ background:"#fff", border:`1px solid ${C.grayBorder}`, borderRadius:12, overflow:"hidden", marginBottom:10 }}>
              <div style={{ display:"flex" }}>
                <div style={{ width:4, background:C.orange, flexShrink:0 }}/>
                <div style={{ padding:"18px 22px", flex:1 }}>
                  <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", cursor:"pointer" }} onClick={()=>setPurOpen(!purOpen)}>
                    <h2 style={{ fontSize:16, fontWeight:700, color:"#111827", display:"flex", alignItems:"center", gap:6 }}>
                      Include in purification
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                    </h2>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="2"><polyline points={purOpen?"18 15 12 9 6 15":"6 9 12 15 18 9"}/></svg>
                  </div>

                  {purOpen && (
                    <div style={{ marginTop:14 }}>
                      {/* Info banner */}
                      <div style={{ background:C.infoBg, border:`1px solid ${C.infoBorder}`, borderRadius:8, padding:"12px 14px", marginBottom:16, display:"flex", gap:10, alignItems:"flex-start" }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={C.infoBlue} strokeWidth="2" style={{ flexShrink:0, marginTop:1 }}><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                        <p style={{ fontSize:13, color:"#1E40AF", lineHeight:1.6 }}>
                          These entries are <strong>included in the purification only</strong> – they won't appear as separate events in your account. You'll see them grouped under this event.
                        </p>
                      </div>

                      {/* Added entries */}
                      {purification.map(p=>(
                        <div key={p.id} style={{ background:p.type==="Animal"?"#F0FDF4":"#F5F3FF", border:`1px solid ${p.type==="Animal"?"#BBF7D0":"#DDD6FE"}`, borderRadius:8, padding:"10px 14px", marginBottom:8, display:"flex", justifyContent:"space-between", alignItems:"center" }}>
                          <div style={{ display:"flex", alignItems:"center", gap:10 }}>
                            <div style={{ color:p.type==="Animal"?C.greenText:C.purple }}>
                              {p.type==="Animal"
                                ? <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="9" cy="7" r="2"/><circle cx="15" cy="7" r="2"/><path d="M12 20c-4 0-7-2-7-6 0-2 1-4 3-5h8c2 1 3 3 3 5 0 4-3 6-7 6z"/></svg>
                                : <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                              }
                            </div>
                            <div>
                              <div style={{ fontWeight:600, fontSize:14, color:p.type==="Animal"?C.greenText:C.purple }}>"{p.name}"</div>
                              {p.focus && <div style={{ fontSize:13, color:C.grayText }}>Focus: {p.focus}</div>}
                            </div>
                          </div>
                          <button style={{ color:C.grayText, fontSize:18, lineHeight:1 }} onClick={()=>removeEntry(p.id)}>×</button>
                        </div>
                      ))}

                      {/* Type tabs */}
                      <div style={{ display:"flex", gap:8, marginBottom:12 }}>
                        {[["Person","👤"],["Animal","🐾"],["Issue","⚠️"],["Other","✦"]].map(([t,icon])=>(
                          <button
                            key={t}
                            style={{ padding:"7px 16px", borderRadius:20, border:`1.5px solid ${addType===t?C.purple:C.grayBorder}`, background:addType===t?C.purpleTag:"#fff", color:addType===t?C.purple:"#374151", fontWeight:600, fontSize:13, display:"flex", alignItems:"center", gap:5 }}
                            onClick={()=>setAddType(t)}
                          >
                            <span>{icon}</span>{t}
                          </button>
                        ))}
                      </div>

                      <input value={newName} onChange={e=>setNewName(e.target.value)} placeholder="Name (e.g. Mom, Neighbour, teacher etc)" style={{ width:"100%", padding:"11px 14px", border:`1px solid ${C.grayBorder}`, borderRadius:8, fontSize:14, marginBottom:8, color:"#374151" }}/>
                      <input value={newFocus} onChange={e=>setNewFocus(e.target.value)} placeholder="Specific focus for the entry (optional)" style={{ width:"100%", padding:"11px 14px", border:`1px solid ${C.grayBorder}`, borderRadius:8, fontSize:14, marginBottom:12, color:"#374151" }}/>
                      <button style={{ border:`1px solid ${C.grayBorder}`, borderRadius:8, padding:"9px 18px", fontSize:14, fontWeight:500, color:"#374151", background:"#F9FAFB", display:"flex", alignItems:"center", gap:6 }} onClick={addEntry}>
                        + Add to purification
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Section 4: Gift this event */}
            <div style={{ background:"#fff", border:`1px solid ${C.grayBorder}`, borderRadius:12, overflow:"hidden" }}>
              <div style={{ display:"flex" }}>
                <div style={{ width:4, background:C.orange, flexShrink:0 }}/>
                <div style={{ padding:"18px 22px", flex:1, display:"flex", justifyContent:"space-between", alignItems:"center", cursor:"pointer" }}>
                  <h2 style={{ fontSize:16, fontWeight:700, color:"#111827" }}>Gift this event</h2>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg>
                </div>
              </div>
            </div>
          </div>

          {/* ── Right: Summary + Donation ── */}
          <div style={{ position:"sticky", top:72 }}>
            {/* Summary */}
            <div style={{ background:"#fff", border:`1px solid ${C.grayBorder}`, borderRadius:12, padding:"20px 22px", marginBottom:14 }}>
              <h3 style={{ fontWeight:700, fontSize:16, color:"#111827", marginBottom:10 }}>Summary</h3>
              <div style={{ color:C.navy, fontWeight:700, fontSize:15, marginBottom:6 }}>{event.title}</div>
              <div style={{ display:"flex", gap:10, fontSize:13, color:C.grayText, marginBottom:14 }}>
                <span style={{ flexShrink:0 }}>Date</span>
                <span style={{ color:"#374151" }}>{event.recurring ? event.schedule : event.dateShort}</span>
              </div>
              {event.recurring && (
                <div style={{ fontSize:13, color:C.grayText, marginBottom:14, marginTop:-10 }}>Recurring subscription</div>
              )}

              {/* Included in purification — always shown, Myself always first */}
              <div style={{ borderTop:`1px solid ${C.grayBorder}`, paddingTop:12, marginBottom:0 }}>
                <div style={{ fontWeight:600, fontSize:14, color:"#111827", marginBottom:8 }}>Included in purification:</div>
                {/* Myself — always present, no × */}
                <div style={{ fontSize:14, color:"#374151", marginBottom:6, paddingLeft:2 }}>Myself</div>
                {/* Added entries with × */}
                {purification.map(p=>(
                  <div key={p.id} style={{ display:"flex", justifyContent:"space-between", alignItems:"center", fontSize:14, color:"#374151", marginBottom:6 }}>
                    <span>"{p.name}"</span>
                    <button style={{ color:C.grayText, fontSize:18, lineHeight:1, paddingLeft:8, flexShrink:0 }} onClick={()=>removeEntry(p.id)}>×</button>
                  </div>
                ))}
              </div>

              {/* Total row — always visible */}
              <div style={{ borderTop:`1px solid ${C.grayBorder}`, paddingTop:10, marginTop:10 }}>
                <div style={{ display:"flex", justifyContent:"space-between", fontSize:14, fontWeight:700, color:"#111827" }}>
                  <span>Total</span>
                  {total && <span>{total} USD</span>}
                </div>
                {total && processingFee > 0 && (
                  <div style={{ fontSize:12, color:C.grayText, marginTop:3 }}>(includes ${processingFee.toFixed(2)} processing fee)</div>
                )}
              </div>
            </div>

            {/* Donation */}
            <div style={{ background:"#fff", border:`1px solid ${C.grayBorder}`, borderRadius:12, padding:"20px 22px", marginBottom:14 }}>
              <h3 style={{ fontWeight:700, fontSize:16, color:"#111827", marginBottom:14 }}>Donation</h3>
              <div style={{ display:"flex", gap:0, marginBottom:10, border:`1.5px solid ${C.magenta}`, borderRadius:8, overflow:"hidden" }}>
                <select style={{ padding:"11px 10px", border:"none", borderRight:`1px solid ${C.grayBorder}`, fontSize:14, background:"#fff", color:"#374151", flexShrink:0 }}>
                  <option>USD ↓</option><option>EUR ↓</option><option>GBP ↓</option>
                </select>
                <input
                  value={donation}
                  onChange={e=>setDonation(e.target.value)}
                  type="number"
                  min="0"
                  placeholder="Give as you wish"
                  style={{ flex:1, padding:"11px 12px", border:"none", fontSize:14, color:"#374151" }}
                />
              </div>
              <p style={{ fontSize:13, color:C.grayText, lineHeight:1.5, marginBottom:12 }}>My gifts are given freely and any donation is entirely voluntary.{" "}
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={C.grayText} strokeWidth="2" style={{ verticalAlign:"middle" }}><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
              </p>

              {/* Cover processing fee */}
              <label style={{ display:"flex", alignItems:"center", gap:8, fontSize:13, color:"#374151", marginBottom:10, cursor:"pointer" }}>
                <input type="checkbox" checked={coverFee} onChange={e=>setCoverFee(e.target.checked)} style={{ width:16, height:16, accentColor:C.magenta }}/>
                Cover processing fee (optional)
              </label>

              {/* Apply to each included entry toggle + multiplier line */}
              <div style={{ border:`1px solid ${C.grayBorder}`, borderRadius:8, padding:"10px 14px", marginBottom:14 }}>
                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom: applyAll && purification.length > 0 && donationNum > 0 ? 8 : 0 }}>
                  <span style={{ fontSize:13, color:"#374151" }}>Apply to each included entry</span>
                  {/* Toggle */}
                  <div
                    style={{ width:40, height:22, borderRadius:11, background:applyAll?C.navy:"#D1D5DB", cursor:"pointer", position:"relative", transition:"background .15s", flexShrink:0 }}
                    onClick={()=>setApplyAll(a=>!a)}
                  >
                    <div style={{ position:"absolute", top:3, left:applyAll?20:3, width:16, height:16, borderRadius:"50%", background:"#fff", transition:"left .15s" }}/>
                  </div>
                </div>
                {/* Multiplier calculation line — shown when toggle on AND entries exist AND amount entered */}
                {applyAll && donationNum > 0 && (
                  <div style={{ fontSize:12, color:C.grayText }}>
                    {donation} USD × {entryCount} (you{purification.length > 0 ? ` + ${purification.length} included` : ""}) = {multiplied.toFixed(2)} USD
                  </div>
                )}
              </div>

              <p style={{ fontSize:13, color:C.grayText, lineHeight:1.6 }}>
                All donations are final and non-refundable.<br/>
                For questions please contact <span style={{ color:C.navy, cursor:"pointer" }}>jacqueline@oraclegirl.org</span>
              </p>
            </div>

            {/* Continue CTA */}
            <button
              style={{ width:"100%", background:C.magenta, color:"#fff", borderRadius:30, padding:"15px", fontSize:17, fontWeight:700, marginBottom:10 }}
              onClick={()=>onNav("confirmation")}
            >
              Continue
            </button>

            {event.recurring && (
              <p style={{ fontSize:13, color:C.grayText, textAlign:"center", lineHeight:1.5 }}>
                By continuing, you agree to [X] donation every week on Wednesday &amp; Saturday.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── CONFIRMATION ── */
function ConfirmationScreen({ event, onNav }) {
  return (
    <div style={{ background:"#fff", minHeight:"100vh" }}>
      <div style={{ maxWidth:760, margin:"0 auto", padding:"48px 24px 64px" }}>
        <div style={{ display:"flex", alignItems:"center", gap:18, marginBottom:14 }}>
          <h1 style={{ fontSize:26, fontWeight:800, color:C.navy }}>Thank you for joining!</h1>
          <button style={{ border:`1px solid ${C.grayBorder}`, borderRadius:8, padding:"7px 14px", fontSize:13, color:"#374151", display:"flex", alignItems:"center", gap:6 }}>📅 Add to Calendar</button>
        </div>
        <p style={{ fontSize:15, color:"#374151", marginBottom:3 }}>You will receive an event confirmation shortly.</p>
        <p style={{ fontSize:15, color:"#374151", marginBottom:18 }}>You will be sent an event email with a link to any event materials available.</p>
        <p style={{ fontSize:15, fontWeight:500, marginBottom:18 }}>
          You can view and manage this event in{" "}
          <span style={{ color:C.magenta, cursor:"pointer", fontWeight:600 }} onClick={()=>onNav("account")}>Personal account</span>
        </p>
        {event && (
          <div style={{ border:`1px solid ${C.grayBorder}`, borderRadius:12, padding:"16px 20px", marginBottom:36, display:"flex", gap:16, alignItems:"flex-start" }}>
            <div style={{ width:70, height:70, borderRadius:8, background:CARD_GRADIENT, flexShrink:0 }}/>
            <div>
              <div style={{ fontWeight:700, fontSize:16, marginBottom:5 }}>{event.title}</div>
              <div style={{ fontSize:13, color:C.grayText, display:"flex", alignItems:"center", gap:5, marginBottom:5 }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                {event.dateShort}
              </div>
              <div style={{ fontSize:14, color:"#374151", lineHeight:1.6 }}>{event.fullDescription}</div>
            </div>
          </div>
        )}
        <div style={{ marginBottom:44 }}>
          <h3 style={{ fontWeight:700, fontSize:15, marginBottom:8 }}>Helpful links</h3>
          <span style={{ color:C.navy, fontSize:14, fontWeight:500, cursor:"pointer" }}>Purification Guide</span>
        </div>
        <h3 style={{ fontWeight:700, fontSize:18, marginBottom:20 }}>More events</h3>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:18 }}>
          {EVENTS.map(ev=>(
            <div key={ev.id} style={{ background:"#fff", border:`1px solid ${C.grayBorder}`, borderRadius:10, overflow:"hidden", cursor:"pointer" }} onClick={()=>onNav("home")}>
              <div style={{ height:110, background:CARD_GRADIENT }}/>
              <div style={{ padding:"12px" }}>
                <div style={{ display:"flex", gap:10, alignItems:"flex-start" }}>
                  <div style={{ flexShrink:0 }}>
                    <div style={{ fontSize:10, fontWeight:700, color:C.navy, textTransform:"uppercase" }}>{ev.dateMonth}</div>
                    <div style={{ fontSize:20, fontWeight:800, color:C.navy }}>{ev.dateDay}</div>
                  </div>
                  <div>
                    <div style={{ fontWeight:700, fontSize:13, color:"#111827", marginBottom:3 }}>{ev.title}</div>
                    <div style={{ fontSize:12, color:C.grayText, lineHeight:1.4 }}>{ev.description}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── PERSONAL ACCOUNT ── */
function AccountScreen({ onNav, myEvents, setMyEvents, setWatchEvent }) {
  const [tab, setTab] = useState("All my events");
  const tabs = ["All my events","Upcoming","Reboot group","Retreats","Gifts"];
  const active = myEvents.filter(e=>!e.archived);
  const archiveEvent = id => setMyEvents(myEvents.map(e=>e.id===id?{...e,archived:true}:e));

  const [openArchiveId, setOpenArchiveId] = useState(null);
  const [openIncludeId, setOpenIncludeId] = useState(null);
  const [archiveConfirmId, setArchiveConfirmId] = useState(null);

  const excludePurificationEntry = (eventId, entryId) => {
    setMyEvents(myEvents.map(e => {
      if (e.id !== eventId) return e;
      const purificationEntries = (e.purificationEntries || []).filter(p => p.id !== entryId);
      return { ...e, purificationEntries };
    }));
  };

  return (
    <div
      style={{ background:C.grayBg, minHeight:"100vh" }}
      onClick={() => { setOpenArchiveId(null); setOpenIncludeId(null); }}
    >
      <div style={{ maxWidth:800, margin:"0 auto", padding:"40px 24px 64px" }}>
        <p style={{ fontSize:14, color:C.pink, fontWeight:500, marginBottom:2 }}>Hi {USER_NAME}</p>
        <h1 style={{ fontSize:28, fontWeight:800, marginBottom:8 }}>
          <span style={{ color:C.navy }}>My </span><span style={{ color:C.orange }}>purif</span><span style={{ color:C.teal }}>ication</span><span style={{ color:C.navy }}> space</span>
        </h1>
        <p style={{ fontSize:14, color:C.grayText, marginBottom:28, lineHeight:1.6 }}>A dedicated place for your specific focus and all your sign-ups, where you stay connected to your purifications and deepen your journey.</p>

        <div style={{ background:C.pinkBg, border:`1px solid ${C.pinkBorder}`, borderRadius:12, padding:"18px 20px", marginBottom:36, display:"flex", justifyContent:"space-between", alignItems:"flex-start" }}>
          <div>
            <div style={{ display:"flex", alignItems:"center", gap:6, fontWeight:600, fontSize:14, color:"#374151", marginBottom:4 }}>
              My Specific Focus
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
            </div>
            <p style={{ fontSize:13, color:C.grayText, marginBottom:10 }}>Name what needs to shift – clearly and simply.</p>
            <div style={{ background:"#F3E8FF", borderRadius:6, padding:"5px 12px", fontSize:13, color:"#374151", display:"inline-block" }}>area of greatest need</div>
          </div>
          <button style={{ color:C.grayText }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
          </button>
        </div>

        <div style={{ marginBottom:36 }}>
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:16 }}>
            <h2 style={{ fontWeight:700, fontSize:17, color:C.navy }}>Continue where you left off</h2>
            <span style={{ fontSize:14, color:C.grayText, cursor:"pointer" }}>View all</span>
          </div>
          <div style={{ display:"flex", gap:16, overflowX:"auto", paddingBottom:4 }}>
            {GRADIENT_CARDS.map((card,i)=>(
              <div key={i} style={{ minWidth:220, background:"#fff", border:`1px solid ${C.grayBorder}`, borderRadius:10, overflow:"hidden", cursor:"pointer", flexShrink:0 }} onClick={()=>{ setWatchEvent({...card, image:EVENTS[0].image, date:"Mar 10, 2026", description:EVENTS[0].fullDescription}); onNav("watch"); }}>
                <div style={{ height:110, background:card.gradient }}/>
                <div style={{ padding:"10px 12px 12px" }}>
                  <div style={{ fontWeight:600, fontSize:13, color:"#111827", marginBottom:6, lineHeight:1.3 }}>{card.title}</div>
                  <div style={{ display:"flex", justifyContent:"space-between", fontSize:12, marginBottom:4 }}>
                    <span style={{ color:C.teal, fontWeight:600 }}>{card.pct}% complete</span>
                    <span style={{ color:C.grayText }}>{card.duration}</span>
                  </div>
                  <div style={{ height:3, background:"#E5E7EB", borderRadius:2 }}>
                    <div style={{ width:`${card.pct}%`, height:"100%", background:C.teal, borderRadius:2 }}/>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display:"flex", borderBottom:`1px solid ${C.grayBorder}`, marginBottom:20 }}>
          {tabs.map(t=>(
            <button key={t} style={{ padding:"10px 18px", fontSize:14, fontWeight:tab===t?700:400, color:tab===t?C.navy:C.grayText, borderBottom:tab===t?`2.5px solid ${C.orange}`:"2.5px solid transparent", marginBottom:-1, background:"none", border:"none", borderBottomStyle:"solid", borderBottomWidth:"2.5px", borderBottomColor:tab===t?C.orange:"transparent" }} onClick={()=>setTab(t)}>{t}</button>
          ))}
        </div>

        <div style={{ display:"flex", gap:10, alignItems:"center", marginBottom:20, flexWrap:"wrap" }}>
          <div style={{ border:`1px solid ${C.grayBorder}`, borderRadius:8, padding:"8px 12px", display:"flex", alignItems:"center", gap:6 }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            <span style={{ fontSize:13, color:"#9CA3AF" }}>Search events...</span>
          </div>
          <select style={{ padding:"8px 10px", border:`1px solid ${C.grayBorder}`, borderRadius:8, fontSize:13, background:"#fff", color:"#374151" }}><option>⇄ Type</option></select>
          <select style={{ padding:"8px 10px", border:`1px solid ${C.grayBorder}`, borderRadius:8, fontSize:13, background:"#fff", color:"#374151" }}><option>Newest first</option></select>
          <select style={{ padding:"8px 10px", border:`1px solid ${C.grayBorder}`, borderRadius:8, fontSize:13, background:"#fff", color:"#374151" }}><option>Recently joined</option></select>
          <span style={{ fontSize:13, color:C.grayText }}>50 events</span>
          <div style={{ marginLeft:"auto", display:"flex", gap:6 }}>
            <button style={{ padding:"6px 8px", border:`1px solid ${C.grayBorder}`, borderRadius:6, background:"#fff" }}>⊞</button>
            <button style={{ padding:"6px 8px", border:`1px solid ${C.grayBorder}`, borderRadius:6, background:"#fff" }}>☰</button>
          </div>
        </div>

        {active.map(ev => {
          const purificationEntries = ev.purificationEntries || [];
          const purificationCount = purificationEntries.length;

          return (
            <div key={ev.id} style={{ background:"#fff", border:`1px solid ${C.grayBorder}`, borderRadius:12, overflow:"visible", marginBottom:16, position:"relative" }}>
              <div style={{ position:"relative", height:130, background:ev.gradient||GRADIENT_CARDS[0].gradient, borderTopLeftRadius:12, borderTopRightRadius:12, overflow:"hidden" }}>
                <div style={{ position:"absolute", top:12, left:12, display:"flex", gap:8 }}>
                  <span style={{ background:C.orange, color:"#fff", fontSize:12, fontWeight:600, padding:"3px 10px", borderRadius:20 }}>Reboot Group</span>
                  {ev.recurring && <span style={{ background:"rgba(0,0,0,.28)", color:"#fff", fontSize:12, fontWeight:600, padding:"3px 10px", borderRadius:20 }}>Recurring</span>}
                </div>

                <button
                  style={{
                    position:"absolute",
                    top:12,
                    right:12,
                    width:28,
                    height:28,
                    borderRadius:"50%",
                    background:"rgba(255,255,255,.18)",
                    border:`1px solid rgba(255,255,255,.28)`,
                    color:"#fff",
                    display:"flex",
                    alignItems:"center",
                    justifyContent:"center",
                    fontSize:14,
                  }}
                  onClick={e => {
                    e.stopPropagation();
                    setOpenIncludeId(null);
                    setOpenArchiveId(openArchiveId === ev.id ? null : ev.id);
                  }}
                >
                  ···
                </button>

                {openArchiveId === ev.id && (
                  <div
                    style={{
                      position:"absolute",
                      top:48,
                      right:12,
                      width:280,
                      background:"#fff",
                      border:`1px solid ${C.grayBorder}`,
                      borderRadius:12,
                      boxShadow:"0 20px 60px rgba(0,0,0,.16)",
                      zIndex:200,
                    }}
                    onClick={e => e.stopPropagation()}
                  >
                    <div style={{ padding:"14px 16px" }}>
                      <button
                        style={{ display:"flex", alignItems:"center", gap:8, fontWeight:700, fontSize:14, color:"#374151", cursor:"pointer", width:"100%", justifyContent:"flex-start", marginBottom:10 }}
                        onClick={() => { setArchiveConfirmId(ev.id); setOpenArchiveId(null); }}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polyline points="3 6 5 6 21 6"></polyline>
                          <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"></path>
                          <path d="M10 11v6"></path>
                          <path d="M14 11v6"></path>
                          <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"></path>
                        </svg>
                        Archive event
                      </button>
                      <p style={{ fontSize:13, color:C.grayText, lineHeight:1.6, marginBottom:0 }}>
                        To cancel or update your subscription, go to{" "}
                        <span
                          style={{ color:C.navy, fontWeight:500, cursor:"pointer" }}
                          onClick={() => { setOpenArchiveId(null); onNav("subscriptions"); }}
                        >
                          My Subscription
                        </span>{" "}
                        from your Personal account menu.
                      </p>
                    </div>
                  </div>
                )}

                <div style={{ position:"absolute", bottom:0, left:0, right:0 }}>
                  <div style={{ flex:1, height:3, background:"rgba(255,255,255,.25)" }}>
                    <div style={{ width:`${ev.pct}%`, height:"100%", background:"#fff" }} />
                  </div>
                </div>
                <div style={{ position:"absolute", bottom:6, left:12, fontSize:12, color:"#fff", fontWeight:600 }}>
                  {ev.pct}% completed
                </div>
              </div>

              <div style={{ padding:"14px 16px" }}>
                <div style={{ fontWeight:700, fontSize:16, color:"#111827", marginBottom:2 }}>{ev.title}</div>
                <div style={{ fontSize:13, color:C.grayText, marginBottom:14 }}>{ev.duration}</div>

                <div style={{ display:"flex", gap:14, alignItems:"center" }}>
                  <button
                    style={{ background:C.magenta, color:"#fff", borderRadius:30, padding:"10px 22px", fontSize:14, fontWeight:600, flex:1, display:"flex", alignItems:"center", justifyContent:"center", gap:6 }}
                    onClick={()=>{ setWatchEvent({...ev, image:EVENTS[0].image, date:ev.date, description:EVENTS[0].fullDescription}); onNav("watch"); }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M11 5l-6 6h6v8l14-14V5z" opacity="0.0" />
                      <path d="M10 8H4l6 6v2l14-14-14 14v-8z" opacity="0.0" />
                      <path d="M7 17V7l10-2v14L7 17z" />
                    </svg>
                    Listen now
                  </button>

                  <button
                    style={{
                      width:46,
                      height:46,
                      borderRadius:"50%",
                      border:`1.5px dashed ${C.grayBorder}`,
                      background:"#fff",
                      color:C.navy,
                      display:"flex",
                      alignItems:"center",
                      justifyContent:"center",
                      fontSize:13,
                      fontWeight:700,
                      flexShrink:0,
                    }}
                    onClick={e => {
                      e.stopPropagation();
                      setOpenArchiveId(null);
                      setOpenIncludeId(openIncludeId === ev.id ? null : ev.id);
                    }}
                  >
                    + {purificationCount}
                  </button>
                </div>
              </div>

              {openIncludeId === ev.id && (
                <div
                  style={{
                    position:"absolute",
                    right:16,
                    top:156,
                    width:300,
                    background:"#fff",
                    border:`1px solid ${C.grayBorder}`,
                    borderRadius:12,
                    boxShadow:"0 20px 60px rgba(0,0,0,.16)",
                    zIndex:220,
                  }}
                  onClick={e => e.stopPropagation()}
                >
                  <div style={{ padding:"14px 16px" }}>
                    <div style={{ fontSize:14, color:"#374151", fontWeight:700, marginBottom:10 }}>
                      Included in purification ({purificationCount})
                    </div>
                    <div style={{ fontSize:13, fontWeight:700, color:"#374151", marginBottom:10 }}>Myself</div>

                    {purificationEntries.length === 0 ? (
                      <div style={{ fontSize:13, color:C.grayText }}>Nothing included yet.</div>
                    ) : (
                      purificationEntries.map(entry => (
                        <div
                          key={entry.id}
                          style={{
                            background:"#F9FAFB",
                            border:`1px solid ${C.grayBorder}`,
                            borderRadius:10,
                            padding:"10px 12px",
                            display:"flex",
                            alignItems:"flex-start",
                            justifyContent:"space-between",
                            gap:10,
                            marginBottom:10,
                          }}
                        >
                          <div>
                            <div style={{ fontWeight:600, fontSize:13, color:"#111827", marginBottom:2 }}>{entry.name}</div>
                            <div style={{ fontSize:12, color:C.grayText, lineHeight:1.3 }}>Focus: {entry.focus}</div>
                          </div>
                          <button
                            style={{
                              width:26,
                              height:26,
                              borderRadius:"50%",
                              border:`1px solid ${C.grayBorder}`,
                              color:C.grayText,
                              background:"#fff",
                              fontSize:14,
                              display:"flex",
                              alignItems:"center",
                              justifyContent:"center",
                              cursor:"pointer",
                              flexShrink:0,
                            }}
                            aria-label={`Exclude ${entry.name}`}
                            onClick={e => {
                              e.stopPropagation();
                              excludePurificationEntry(ev.id, entry.id);
                              setOpenIncludeId(null);
                            }}
                          >
                            ×
                          </button>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              )}
            </div>
          );
        })}

        {active.length===0 && (
          <div style={{ textAlign:"center", padding:"48px 0", color:C.grayText }}>
            <p style={{ fontSize:16, fontWeight:500 }}>No events here yet.</p>
            <button style={{ marginTop:16, background:C.magenta, color:"#fff", borderRadius:30, padding:"11px 24px", fontSize:15, fontWeight:600 }} onClick={()=>onNav("home")}>Browse events</button>
          </div>
        )}

        {archiveConfirmId !== null && (
          <div
            style={{
              position:"fixed",
              inset:0,
              background:"rgba(0,0,0,.35)",
              display:"flex",
              alignItems:"center",
              justifyContent:"center",
              zIndex:999,
            }}
            onClick={() => setArchiveConfirmId(null)}
          >
            <div
              style={{
                width:"100%",
                maxWidth:480,
                background:"#fff",
                borderRadius:16,
                border:`1px solid ${C.grayBorder}`,
                padding:"22px 22px 18px",
                boxShadow:"0 30px 80px rgba(0,0,0,.22)",
              }}
              onClick={e => e.stopPropagation()}
            >
              <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:10 }}>
                <div style={{ width:44, height:44, borderRadius:12, background:C.pinkBg, border:`1px solid ${C.pinkBorder}`, display:"flex", alignItems:"center", justifyContent:"center", color:C.magenta, fontWeight:800 }}>
                  ⚠️
                </div>
                <div>
                  <div style={{ fontWeight:800, fontSize:18, color:C.navy, marginBottom:2 }}>Archive event?</div>
                  <div style={{ fontSize:13, color:C.grayText }}>This will remove the event from your purification space.</div>
                </div>
              </div>

              <div style={{ display:"flex", gap:12, justifyContent:"flex-end", marginTop:18 }}>
                <button style={{ border:`1px solid ${C.grayBorder}`, borderRadius:30, padding:"11px 18px", fontSize:14, fontWeight:600, color:"#374151" }} onClick={() => setArchiveConfirmId(null)}>
                  Cancel
                </button>
                <button
                  style={{ border:`1.5px solid ${C.redText}`, borderRadius:30, padding:"11px 18px", fontSize:14, fontWeight:700, color:"#fff", background:C.redText }}
                  onClick={() => {
                    archiveEvent(archiveConfirmId);
                    setArchiveConfirmId(null);
                  }}
                >
                  Archive
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/* ── WATCH / LISTEN ── */
function WatchScreen({ event, onNav }) {
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(event?.pct||15);
  if (!event) return null;
  return (
    <div style={{ maxWidth:860, margin:"0 auto", padding:"36px 24px" }}>
      <button style={{ fontSize:14, color:C.navy, fontWeight:500, display:"flex", alignItems:"center", gap:6, marginBottom:24 }} onClick={()=>onNav("account")}>← Back to My events</button>
      <h1 style={{ fontSize:24, fontWeight:800, color:"#111827", marginBottom:4 }}>{event.title}</h1>
      <p style={{ color:C.grayText, fontSize:14, marginBottom:24 }}>{event.date} · {event.duration}</p>
      <div style={{ background:"#000", borderRadius:14, overflow:"hidden", marginBottom:24 }}>
        <div style={{ height:360, background:event.gradient||GRADIENT_CARDS[0].gradient, display:"flex", alignItems:"center", justifyContent:"center" }}>
          {!playing ? <button style={{ width:68, height:68, borderRadius:"50%", background:"rgba(255,255,255,.88)", fontSize:26 }} onClick={()=>setPlaying(true)}>▶</button>
            : <div style={{ color:"#fff", fontSize:22, fontWeight:600 }}>Now playing…</div>}
        </div>
        <div style={{ background:"rgba(0,0,0,.75)", padding:"10px 18px", display:"flex", alignItems:"center", gap:12 }}>
          <button style={{ color:"#fff", fontSize:18 }} onClick={()=>setPlaying(!playing)}>{playing?"⏸":"▶"}</button>
          <div style={{ flex:1, height:4, background:"rgba(255,255,255,.3)", borderRadius:4, cursor:"pointer" }} onClick={e=>{ const r=e.currentTarget.getBoundingClientRect(); setProgress(Math.round(((e.clientX-r.left)/r.width)*100)); }}>
            <div style={{ width:`${progress}%`, height:"100%", background:C.magenta, borderRadius:4 }}/>
          </div>
          <span style={{ color:"#fff", fontSize:12 }}>{progress}%</span>
        </div>
      </div>
      <div style={{ background:"#fff", borderRadius:12, padding:"20px 22px", border:`1px solid ${C.grayBorder}` }}>
        <p style={{ fontWeight:700, fontSize:15, marginBottom:8 }}>About this event</p>
        <p style={{ color:"#374151", fontSize:15, lineHeight:1.7 }}>{event.description}</p>
      </div>
    </div>
  );
}

/* ── ARCHIVED ── */
function ArchivedScreen({ myEvents, setMyEvents, onNav }) {
  const archived = myEvents.filter(e=>e.archived);
  return (
    <div style={{ maxWidth:760, margin:"0 auto", padding:"40px 24px" }}>
      <button style={{ fontSize:14, color:C.navy, fontWeight:500, display:"flex", alignItems:"center", gap:6, marginBottom:24 }} onClick={()=>onNav("account")}>← Back</button>
      <h1 style={{ fontSize:26, fontWeight:800, color:C.navy, marginBottom:6 }}>Archived events</h1>
      <p style={{ color:C.grayText, marginBottom:28 }}>Events you've archived. You can restore them at any time.</p>
      {archived.length===0 && (
        <div style={{ textAlign:"center", padding:"60px 0", color:C.grayText }}>
          <div style={{ fontSize:44, marginBottom:12 }}>🗃</div>
          <p style={{ fontSize:16, fontWeight:500 }}>No archived events yet.</p>
        </div>
      )}
      {archived.map(ev=>(
        <div key={ev.id} style={{ background:"#fff", border:`1px solid ${C.grayBorder}`, borderRadius:12, padding:"16px 20px", marginBottom:12, display:"flex", justifyContent:"space-between", alignItems:"center" }}>
          <div>
            <div style={{ fontWeight:700, fontSize:15, color:C.grayText, marginBottom:2 }}>{ev.title}</div>
            <div style={{ fontSize:13, color:C.grayText }}>{ev.date}</div>
          </div>
          <button style={{ border:`1px solid ${C.grayBorder}`, borderRadius:8, padding:"8px 16px", fontSize:13, color:"#374151" }} onClick={()=>setMyEvents(myEvents.map(e=>e.id===ev.id?{...e,archived:false}:e))}>Restore</button>
        </div>
      ))}
    </div>
  );
}

/* ── SUBSCRIPTIONS ── */
function SubscriptionsScreen() {
  const [subs, setSubs] = useState(SUBSCRIPTIONS_DATA);
  const [cancelId, setCancelId] = useState(null);
  const togglePause = id => setSubs(subs.map(s=>s.id===id?{...s,status:s.status==="active"?"paused":"active"}:s));

  if (cancelId!==null) {
    const sub = subs.find(s=>s.id===cancelId);
    return <CancelSubScreen sub={sub} onBack={()=>setCancelId(null)} onConfirm={()=>{ setSubs(subs.filter(s=>s.id!==cancelId)); setCancelId(null); }}/>;
  }

  const activeSubs = subs.filter(s=>s.status==="active");

  return (
    <div style={{ maxWidth:820, margin:"0 auto", padding:"40px 24px 64px" }}>
      <h1 style={{ fontSize:28, fontWeight:800, color:C.navy, marginBottom:4 }}>My subscriptions</h1>
      <p style={{ color:C.grayText, marginBottom:28 }}>Manage your recurring subscriptions</p>
      <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:16, marginBottom:32 }}>
        {[["🔄",`${activeSubs.length}`,"Active subscriptions"],["💳",`${activeSubs.length > 0 ? activeSubs.length : "—"} active`,"Monthly total"],["📅","Mar 1","Next donation date"]].map(([icon,val,label])=>(
          <div key={label} style={{ background:"#fff", border:`1px solid ${C.grayBorder}`, borderRadius:12, padding:"16px 20px", display:"flex", alignItems:"center", gap:14 }}>
            <span style={{ fontSize:22 }}>{icon}</span>
            <div><div style={{ fontWeight:700, fontSize:20 }}>{val}</div><div style={{ fontSize:13, color:C.grayText }}>{label}</div></div>
          </div>
        ))}
      </div>
      <div style={{ background:"#fff", border:`1px solid ${C.grayBorder}`, borderRadius:14, overflow:"hidden", marginBottom:28 }}>
        <div style={{ padding:"16px 22px", borderBottom:`1px solid ${C.grayBorder}` }}>
          <h2 style={{ fontWeight:700, fontSize:16 }}>My subscriptions</h2>
        </div>
        {subs.map((sub,i)=>(
          <div key={sub.id} style={{ padding:"20px 22px", borderBottom:i<subs.length-1?`1px solid ${C.grayBorder}`:"none", display:"flex", justifyContent:"space-between", alignItems:"flex-start", flexWrap:"wrap", gap:16 }}>
            <div>
              <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:4 }}>
                <span style={{ fontWeight:700, fontSize:15 }}>🔄 {sub.name}</span>
                <span style={{ background:sub.status==="active"?C.greenTag:"#FEF9C3", color:sub.status==="active"?C.greenText:"#92400E", fontSize:12, fontWeight:600, padding:"2px 10px", borderRadius:20 }}>
                  {sub.status==="active"?"✓ Active":"⏸ Paused"}
                </span>
              </div>
              <p style={{ fontSize:13, color:C.navy, marginBottom:2 }}>Who is it for: <strong>{sub.for}</strong></p>
              <p style={{ fontSize:13, color:C.grayText }}>{sub.schedule}</p>
              <p style={{ fontSize:13, color:C.grayText }}>Started {sub.started} · {sub.events} events included</p>
            </div>
            <div style={{ textAlign:"right" }}>
              <div style={{ fontSize:13, color:C.grayText, marginBottom:10 }}>Next: {sub.status==="paused"?"Paused":sub.next}</div>
              <div style={{ display:"flex", gap:8 }}>
                <button style={{ border:`1px solid ${C.grayBorder}`, borderRadius:6, padding:"7px 14px", fontSize:13, color:"#374151" }} onClick={()=>togglePause(sub.id)}>{sub.status==="active"?"Pause":"Resume"}</button>
                <button style={{ border:`1px solid ${C.grayBorder}`, borderRadius:6, padding:"7px 14px", fontSize:13, color:"#374151" }}>Update</button>
                <button style={{ border:`1px solid ${C.grayBorder}`, borderRadius:6, padding:"7px 14px", fontSize:13, color:C.redText }} onClick={()=>setCancelId(sub.id)}>Cancel</button>
              </div>
            </div>
          </div>
        ))}
        {subs.length===0 && <div style={{ padding:"36px", textAlign:"center", color:C.grayText }}><p style={{ fontWeight:500 }}>All subscriptions cancelled.</p></div>}
      </div>
      <div style={{ background:"#fff", border:`1px solid ${C.grayBorder}`, borderRadius:14, padding:"22px" }}>
        <h2 style={{ fontWeight:700, fontSize:16, marginBottom:16 }}>Donation method</h2>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", background:C.grayBg, borderRadius:10, padding:"14px 18px" }}>
          <div style={{ display:"flex", alignItems:"center", gap:12 }}>
            <span style={{ fontSize:22 }}>💳</span>
            <div><div style={{ fontWeight:600, fontSize:15 }}>Card ending in 4242</div><div style={{ fontSize:13, color:C.grayText }}>Expires 12/2028</div></div>
          </div>
          <button style={{ border:`1px solid ${C.grayBorder}`, borderRadius:8, padding:"8px 14px", fontSize:13, color:"#374151" }}>↗ Change</button>
        </div>
      </div>
    </div>
  );
}

/* ── CANCEL SUB ── */
function CancelSubScreen({ sub, onBack, onConfirm }) {
  const [done, setDone] = useState(false);
  if (done) return (
    <div style={{ maxWidth:500, margin:"80px auto", padding:"0 24px", textAlign:"center" }}>
      <div style={{ fontSize:52, marginBottom:16 }}>✅</div>
      <h1 style={{ fontSize:26, fontWeight:800, color:C.navy, marginBottom:10 }}>Subscription cancelled</h1>
      <p style={{ color:C.grayText, fontSize:15, marginBottom:8 }}>Your <strong>{sub?.name}</strong> subscription for <strong>{sub?.for}</strong> has been cancelled.</p>
      <p style={{ color:C.grayText, fontSize:14, marginBottom:32 }}>You won't be charged again.</p>
      <button style={{ background:C.navy, color:"#fff", borderRadius:30, padding:"12px 28px", fontSize:15, fontWeight:600 }} onClick={onConfirm}>Back to subscriptions</button>
    </div>
  );
  return (
    <div style={{ maxWidth:500, margin:"80px auto", padding:"0 24px" }}>
      <button style={{ fontSize:14, color:C.navy, fontWeight:500, display:"flex", alignItems:"center", gap:6, marginBottom:28 }} onClick={onBack}>← Back</button>
      <div style={{ background:"#fff", border:`1px solid ${C.grayBorder}`, borderRadius:16, padding:"36px 32px", textAlign:"center", boxShadow:"0 4px 24px rgba(0,0,0,.08)" }}>
        <div style={{ fontSize:44, marginBottom:14 }}>⚠️</div>
        <h1 style={{ fontSize:22, fontWeight:800, color:"#111827", marginBottom:10 }}>Cancel subscription?</h1>
        <div style={{ background:C.grayBg, borderRadius:10, padding:"14px 18px", textAlign:"left", marginBottom:20 }}>
          <p style={{ fontWeight:700, fontSize:14 }}>{sub?.name}</p>
          <p style={{ fontSize:13, color:C.grayText }}>For: {sub?.for}</p>
        </div>
        <p style={{ color:C.grayText, fontSize:14, lineHeight:1.6, marginBottom:28 }}>Are you sure? You can resubscribe at any time.</p>
        <div style={{ display:"flex", gap:12, justifyContent:"center" }}>
          <button style={{ border:`1px solid ${C.grayBorder}`, borderRadius:30, padding:"11px 24px", fontSize:14, fontWeight:600, color:"#374151" }} onClick={onBack}>Keep subscription</button>
          <button style={{ border:`1.5px solid ${C.redText}`, borderRadius:30, padding:"11px 24px", fontSize:14, fontWeight:600, color:C.redText, background:"#fff" }} onClick={()=>setDone(true)}>Yes, cancel</button>
        </div>
      </div>
    </div>
  );
}

/* ── ROOT ── */
export default function App() {
  const [page, setPage]                   = useState("home");
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [signupEvent, setSignupEvent]     = useState(null);
  const [watchEvent, setWatchEvent]       = useState(null);
  const [menuOpen, setMenuOpen]           = useState(false);
  const [myEvents, setMyEvents]           = useState(MY_EVENTS_DATA);

  const onNav = p => { setPage(p); setMenuOpen(false); window.scrollTo(0,0); };

  return (
    <>
      <style>{GLOBAL_CSS}</style>
      <div style={{ minHeight:"100vh", background:"#fff" }} onClick={()=>menuOpen&&setMenuOpen(false)}>
        <Nav onNav={onNav} menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        {page==="home"          && <HomeScreen onNav={onNav} setSelectedEvent={setSelectedEvent}/>}
        {page==="event-detail"  && <EventDetailScreen event={selectedEvent} onNav={onNav} setSignupEvent={setSignupEvent}/>}
        {page==="signup"        && <SignupScreen event={signupEvent||selectedEvent} onNav={onNav}/>}
        {page==="confirmation"  && <ConfirmationScreen event={signupEvent||selectedEvent} onNav={onNav}/>}
        {page==="account"       && <AccountScreen onNav={onNav} myEvents={myEvents} setMyEvents={setMyEvents} setWatchEvent={setWatchEvent}/>}
        {page==="watch"         && <WatchScreen event={watchEvent} onNav={onNav}/>}
        {page==="archived"      && <ArchivedScreen myEvents={myEvents} setMyEvents={setMyEvents} onNav={onNav}/>}
        {page==="subscriptions" && <SubscriptionsScreen onNav={onNav}/>}
      </div>
    </>
  );
}