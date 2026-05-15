import { CARD_GRADIENT } from "../theme";

const TOK = {
  cardBorder: "#E8ECF5",
  cardShadow: "0 15.1146px 37.7866px rgba(119, 115, 170, 0.1)",
  cardRadius: 12,
  primary: "#E860D6",
  pillText: "#AA29E8",
  pillBorder: "#E8B8FF",
  progressBg: "#E5E7EB",
  title: "#000000",
  duration: "#606060",
  includeBg: "#E8ECF5",
  includeBorder: "#94A5CF",
  includeText: "#647CB9",
  signUpsBg: "rgba(69, 99, 172, 0.73)",
  linkBlue: "#1E2B6F",
  includeRowBg: "#E8F5E9",
  includeRowBorder: "#D1E7DD",
  includeName: "#166534",
  includeFocus: "#6B7280",
};

const IMG_H = 170;
const BODY_H = 153;
const CARD_H = IMG_H + BODY_H;

const ArchiveIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
    <polyline points="3 6 5 6 21 6" />
    <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
    <path d="M10 11v6M14 11v6M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
  </svg>
);

const PersonIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke={TOK.includeText} strokeWidth="1.5">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const ListenIcon = () => (
  <svg width="18" height="21" viewBox="0 0 23 27" fill="none" aria-hidden style={{ flexShrink: 0 }}>
    <path d="M1.75 10.25h3.9L12.75 3.5v20L5.65 16.75H1.75v-6.5z" fill="#fff" />
    <path d="M15.25 11.25c1.65 1 1.65 3.5 0 4.5" stroke="#fff" strokeWidth="2.25" strokeLinecap="round" />
    <path d="M18.25 8.25c2.85 1.75 2.85 9.25 0 11" stroke="#fff" strokeWidth="2.25" strokeLinecap="round" />
  </svg>
);

function TypePill({ children }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        padding: "5px 18px",
        height: 26,
        background: "rgba(255, 255, 255, 0.7)",
        border: `0.738px solid ${TOK.pillBorder}`,
        boxShadow: "0 0.738px 1.477px rgba(0, 0, 0, 0.05)",
        borderRadius: 999,
        fontSize: 14,
        fontWeight: 500,
        lineHeight: "12px",
        color: TOK.pillText,
        whiteSpace: "nowrap",
      }}
    >
      {children}
    </span>
  );
}

function StackCardBehind({ gradient, insetX, offsetTop, zIndex }) {
  return (
    <div
      aria-hidden
      style={{
        position: "absolute",
        left: insetX,
        right: insetX,
        top: offsetTop,
        height: CARD_H,
        zIndex,
        border: `1px solid ${TOK.cardBorder}`,
        borderRadius: TOK.cardRadius,
        boxShadow: TOK.cardShadow,
        overflow: "hidden",
        background: "#fff",
        pointerEvents: "none",
      }}
    >
      <div style={{ height: IMG_H, background: gradient }} />
      <div style={{ height: BODY_H, background: "#fff" }} />
    </div>
  );
}

function ArchiveMenu({ onArchive, onSubscriptionLink, showSubscriptionNote }) {
  return (
    <div
      style={{
        position: "absolute",
        top: 52,
        right: 16,
        width: 268,
        background: "#fff",
        border: `1px solid ${TOK.cardBorder}`,
        borderRadius: TOK.cardRadius,
        boxShadow: "0 12px 40px rgba(0, 0, 0, 0.12)",
        zIndex: 300,
        overflow: "visible",
      }}
      onClick={(e) => e.stopPropagation()}
    >
      <button
        type="button"
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          width: "100%",
          padding: "14px 16px",
          fontWeight: 500,
          fontSize: 14,
          color: "#374151",
          background: "#fff",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
        }}
        onClick={onArchive}
      >
        <ArchiveIcon />
        Archive event
      </button>
      {showSubscriptionNote && (
        <>
          <div style={{ height: 1, background: TOK.cardBorder, margin: "0 16px" }} />
          <p style={{ padding: "12px 16px 14px", fontSize: 13, color: "#6B7280", lineHeight: 1.55, fontWeight: 400 }}>
            To cancel or update your subscription, go to{" "}
            <button
              type="button"
              style={{
                background: "none",
                border: "none",
                padding: 0,
                color: TOK.linkBlue,
                fontWeight: 500,
                fontSize: 13,
                cursor: "pointer",
                fontFamily: "inherit",
              }}
              onClick={(e) => {
                e.stopPropagation();
                onSubscriptionLink();
              }}
            >
              My Subscription
            </button>{" "}
            from your Personal account menu.
          </p>
        </>
      )}
    </div>
  );
}

function IncludeMenu({ totalCount, entries, onExclude }) {
  return (
    <div
      style={{
        position: "absolute",
        left: 0,
        right: 0,
        top: CARD_H + 4,
        marginLeft: "auto",
        width: "100%",
        maxWidth: 300,
        background: "#fff",
        border: `1px solid ${TOK.cardBorder}`,
        borderRadius: TOK.cardRadius,
        boxShadow: "0 16px 48px rgba(0, 0, 0, 0.12)",
        zIndex: 300,
        padding: "14px 16px",
        maxHeight: 340,
        overflowY: "auto",
      }}
      onClick={(e) => e.stopPropagation()}
    >
      <div style={{ fontSize: 14, fontWeight: 600, color: "#111827", marginBottom: 12 }}>
        Included in purification ({totalCount})
      </div>
      <div
        style={{
          background: TOK.includeRowBg,
          border: `1px solid ${TOK.includeRowBorder}`,
          borderRadius: 8,
          padding: "10px 12px",
          marginBottom: 8,
        }}
      >
        <div style={{ fontWeight: 600, fontSize: 13, color: TOK.includeName }}>Myself</div>
      </div>
      {entries.length === 0 ? (
        <p style={{ fontSize: 13, color: TOK.includeFocus, fontWeight: 400, margin: 0 }}>Nothing included yet.</p>
      ) : (
        entries.map((entry) => (
          <div
            key={entry.id}
            style={{
              background: TOK.includeRowBg,
              border: `1px solid ${TOK.includeRowBorder}`,
              borderRadius: 8,
              padding: "10px 12px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              gap: 10,
              marginBottom: 8,
            }}
          >
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontWeight: 600, fontSize: 13, color: TOK.includeName, marginBottom: 2 }}>{entry.name}</div>
              <div style={{ fontSize: 12, color: TOK.includeFocus }}>Focus: {entry.focus}</div>
            </div>
            <button
              type="button"
              aria-label={`Remove ${entry.name}`}
              style={{
                width: 24,
                height: 24,
                borderRadius: "50%",
                border: `1px solid ${TOK.includeBorder}`,
                background: "#fff",
                color: TOK.includeFocus,
                fontSize: 16,
                lineHeight: 1,
                flexShrink: 0,
                cursor: "pointer",
                marginTop: 2,
              }}
              onClick={(e) => {
                e.stopPropagation();
                onExclude(entry.id);
              }}
            >
              ×
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default function AccountEventCard({
  ev,
  openArchiveId,
  openIncludeId,
  setOpenArchiveId,
  setOpenIncludeId,
  setArchiveConfirmId,
  excludePurificationEntry,
  onNav,
  setWatchEvent,
  eventMeta,
}) {
  const purificationEntries = ev.purificationEntries || [];
  const signUps = Math.max(0, ev.signUps || 0);
  const othersCount = Math.max(purificationEntries.length, signUps);
  const includedTotal = othersCount + 1;
  const showIncludeBtn = othersCount > 0;
  const gradient = ev.gradient || CARD_GRADIENT;
  const isReboot = ev.type === "Reboot Group";
  const showRecurring = ev.recurring && ev.type !== "Reawaken";

  const stackLayers = signUps >= 2 ? 2 : signUps >= 1 ? 1 : 0;
  const menuOpen = openArchiveId === ev.id || openIncludeId === ev.id;

  const closeMenus = () => {
    setOpenArchiveId(null);
    setOpenIncludeId(null);
  };

  const toggleIncludeMenu = (e) => {
    e.stopPropagation();
    setOpenArchiveId(null);
    setOpenIncludeId(openIncludeId === ev.id ? null : ev.id);
  };

  const handleExclude = (entryId) => {
    setOpenIncludeId(null);
    excludePurificationEntry(ev.id, entryId);
  };

  const stackExtra = signUps > 0 ? 29 + 26 : 0;
  const menuExtra = openIncludeId === ev.id ? 280 : 0;
  const wrapperMinH = CARD_H + stackExtra + menuExtra;

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        minHeight: wrapperMinH,
        overflow: "visible",
        zIndex: menuOpen ? 20 : 1,
      }}
      onClick={closeMenus}
    >
      {stackLayers >= 2 && <StackCardBehind gradient={gradient} insetX={27} offsetTop={47} zIndex={0} />}
      {stackLayers >= 1 && <StackCardBehind gradient={gradient} insetX={12} offsetTop={33} zIndex={1} />}

      <article
        style={{
          position: "relative",
          zIndex: 2,
          border: `1px solid ${TOK.cardBorder}`,
          borderRadius: TOK.cardRadius,
          boxShadow: TOK.cardShadow,
          overflow: "visible",
          background: "#fff",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          style={{
            position: "relative",
            height: IMG_H,
            background: gradient,
            overflow: "hidden",
            borderRadius: `${TOK.cardRadius}px ${TOK.cardRadius}px 0 0`,
          }}
        >
          <div style={{ position: "absolute", top: 21, left: 28, right: 90, display: "flex", gap: 11, flexWrap: "wrap" }}>
            <TypePill>{ev.type}</TypePill>
            {showRecurring && <TypePill>Recurring</TypePill>}
          </div>

          <button
            type="button"
            aria-label="Event options"
            style={{
              position: "absolute",
              top: 19,
              right: 16,
              width: 48,
              height: 43,
              borderRadius: "50%",
              background: "#fff",
              border: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 5,
              padding: "5px 7px",
              cursor: "pointer",
              zIndex: 2,
            }}
            onClick={(e) => {
              e.stopPropagation();
              setOpenIncludeId(null);
              setOpenArchiveId(openArchiveId === ev.id ? null : ev.id);
            }}
            aria-expanded={openArchiveId === ev.id}
          >
            {[0, 1, 2].map((i) => (
              <span key={i} style={{ width: 5, height: 5, borderRadius: "50%", background: "#000" }} />
            ))}
          </button>

          <div
            style={{
              position: "absolute",
              left: 28,
              bottom: 25,
              fontSize: 14,
              fontWeight: 600,
              lineHeight: "20px",
              color: "#fff",
              textShadow: "0 1px 4px rgba(0, 0, 0, 0.35)",
            }}
          >
            {ev.pct}% completed
          </div>
        </div>

        {openArchiveId === ev.id && (
          <ArchiveMenu
            onArchive={() => {
              setArchiveConfirmId(ev.id);
              setOpenArchiveId(null);
            }}
            onSubscriptionLink={() => {
              setOpenArchiveId(null);
              onNav("subscriptions");
            }}
            showSubscriptionNote={isReboot}
          />
        )}

        <div style={{ height: 11, background: TOK.progressBg, position: "relative", zIndex: 2 }}>
          <div style={{ width: `${ev.pct}%`, height: "100%", background: TOK.primary, minWidth: ev.pct > 0 ? 4 : 0 }} />
        </div>

        <div style={{ padding: "20px 28px 24px", background: "#fff", borderRadius: `0 0 ${TOK.cardRadius}px ${TOK.cardRadius}px` }}>
          <h3
            style={{
              fontWeight: 700,
              fontSize: 20,
              lineHeight: "22px",
              letterSpacing: "0.005em",
              color: TOK.title,
              margin: "0 0 8px",
            }}
          >
            {ev.title}
          </h3>
          <p style={{ fontSize: 14, lineHeight: "18px", color: TOK.duration, margin: "0 0 20px", fontWeight: 400 }}>
            {ev.duration}
          </p>

          <div style={{ display: "flex", gap: 12, alignItems: "stretch" }}>
            <button
              type="button"
              style={{
                flex: 1,
                minHeight: 40,
                padding: "0 14px",
                background: TOK.primary,
                color: "#fff",
                borderRadius: 12,
                fontSize: 16,
                fontWeight: 600,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                cursor: "pointer",
              }}
              onClick={() => {
                setWatchEvent({
                  ...ev,
                  image: eventMeta?.image,
                  date: ev.date,
                  description: eventMeta?.description,
                });
                onNav("watch");
              }}
            >
              <ListenIcon />
              Listen now
            </button>

            {showIncludeBtn && (
              <button
                type="button"
                aria-label={`Included in purification, ${includedTotal} total`}
                style={{
                  width: 84,
                  minHeight: 40,
                  flexShrink: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 6,
                  background: TOK.includeBg,
                  border: `1px dashed ${TOK.includeBorder}`,
                  borderRadius: 12,
                  color: TOK.includeText,
                  fontSize: 18,
                  fontWeight: 500,
                  cursor: "pointer",
                }}
                onClick={toggleIncludeMenu}
              >
                <PersonIcon />
                +{includedTotal}
              </button>
            )}
          </div>
        </div>
      </article>

      {openIncludeId === ev.id && (
        <IncludeMenu totalCount={includedTotal} entries={purificationEntries} onExclude={handleExclude} />
      )}

      {signUps > 0 && (
        <button
          type="button"
          style={{
            position: "absolute",
            left: "50%",
            bottom: openIncludeId === ev.id ? menuExtra : 0,
            transform: "translateX(-50%)",
            zIndex: 4,
            minWidth: 98,
            height: 20,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: TOK.signUpsBg,
            borderRadius: "0 0 8px 8px",
            padding: "0 17px",
            fontSize: 12,
            fontWeight: 600,
            lineHeight: "14px",
            color: "#fff",
            whiteSpace: "nowrap",
            border: "none",
            cursor: "pointer",
            fontFamily: "inherit",
          }}
          onClick={toggleIncludeMenu}
        >
          + {signUps} sign up{signUps === 1 ? "" : "s"}
        </button>
      )}
    </div>
  );
}
