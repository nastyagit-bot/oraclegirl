import { C } from "../theme";

export default function ChatFab() {
  return (
    <button
      type="button"
      aria-label="Chat"
      style={{
        position: "fixed",
        bottom: 28,
        right: 28,
        width: 56,
        height: 56,
        borderRadius: "50%",
        background: C.infoBlue,
        color: "#fff",
        boxShadow: "0 8px 24px rgba(59, 130, 246, 0.4)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 150,
      }}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    </button>
  );
}
