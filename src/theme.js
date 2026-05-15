export const CARD_GRADIENT =
  "linear-gradient(135deg, #FF9A3C 0%, #FFD0A0 18%, #C084FC 38%, #E040FB 55%, #9333EA 68%, #00D4FF 82%, #06B6D4 100%)";

export const BRAND_GRADIENT =
  "linear-gradient(90deg, #EC4899 0%, #D946EF 45%, #7C3AED 75%, #5B6BBF 100%)";

export const BTN_GRADIENT =
  "linear-gradient(90deg, #F472B6 0%, #D946EF 50%, #A855F7 100%)";

export const GLOBAL_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Figtree:wght@300;400;500;600;700&display=swap');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html, body {
    font-family: 'Figtree', sans-serif;
    background: #fff;
    color: #111827;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
  }
  button { font-family: 'Figtree', sans-serif; cursor: pointer; border: none; background: none; outline: none; }
  input, select, textarea { font-family: 'Figtree', sans-serif; outline: none; font-weight: 400; }
  details > summary { list-style: none; }
  details > summary::-webkit-details-marker { display: none; }

  .fade-in {
    opacity: 0;
    transform: translateY(14px);
  }
  .fade-in--visible {
    animation: fadeInUp 0.55s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  }
  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(14px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @media (prefers-reduced-motion: reduce) {
    .fade-in, .fade-in--visible { opacity: 1; transform: none; animation: none; }
  }
`;

export const C = {
  brandBlue: "#5B6BBF",
  navy: "#1E2B6F",
  orange: "#FF6B35",
  teal: "#00ACC1",
  magenta: "#D946EF",
  pink: "#EC4899",
  purple: "#7C3AED",
  purpleTag: "#EDE9FE",
  greenTag: "#DCFCE7",
  greenText: "#16A34A",
  orangeTag: "#FFF7ED",
  orangeText: "#EA580C",
  redText: "#DC2626",
  grayBg: "#F9FAFB",
  grayBorder: "#E5E7EB",
  grayText: "#6B7280",
  infoBlue: "#3B82F6",
  infoBg: "#EFF6FF",
  infoBorder: "#BFDBFE",
  pinkBg: "#FDF2F8",
  pinkBorder: "#FBCFE8",
  pageBg: "#FAFAF8",
  lightBlueBg: "#E8F4FC",
  lightBlueBorder: "#BAE6FD",
};
