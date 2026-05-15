import { CARD_GRADIENT } from "../theme";

/** Figma — My purification space event card */
const TOK = {
  cardBorder: "#E8ECF5",
  cardShadow: "0 15.1146px 37.7866px rgba(119, 115, 170, 0.1)",
  cardRadius: 10.8213,
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
};

const IMG_H = 170;
const BODY_H = 153;
const CARD_H = IMG_H + BODY_H;

const PersonIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke={TOK.includeText} strokeWidth="1.5">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const VolumeIcon = () => (
  <svg width="23" height="27" viewBox="0 0 24 24" fill="#fff">
    <path d="M11 5L6 9H3v6h3l5 4V5zm4.73 3.41a1 1 0 1 0-1.46 1.36 4.5 4.5 0 0 1 0 6.46 1 1 0 0 0 1.46 1.36 6.5 6.5 0 0 0 0-9.18zm2.54 2.13a1 1 0 1 0-1.42 1.42 2.5 2.5 0 0 1 0 3.54 1 1 0 0 0 1.42 1.42 4.5 4.5 0 0 0 0-6.38z" />
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

/** Duplicate card behind front card — Figma offsets top +33px / +47px, inset 12px / 27px */
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

function CardFace({
  ev,
  gradient,
  openArchiveId,
  openIncludeId,
  setOpenArchiveId,
  setOpenIncludeId,
  setArchiveConfirmId,
  excludePurificationEntry,
  onNav,
  setWatchEvent,
  eventMeta,
  purificationEntries,
  purificationCount,
}) {
  return (
    <>
      <div style={{ position: "relative", height: IMG_H, background: gradient, overflow: "hidden" }}>
        <div
          style={{
            position: "absolute",
            top: 21,
            left: 28,
            right: 90,
            display: "flex",
            gap: 11,
            flexWrap: "wrap",
          }}
        >
          <TypePill>{ev.type}</TypePill>
          {ev.recurring && <TypePill>Recurring</TypePill>}
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
          }}
          onClick={(e) => {
            e.stopPropagation();
            setOpenIncludeId(null);
            setOpenArchiveId(openArchiveId === ev.id ? null : ev.id);
          }}
        >
          {[0, 1, 2].map((i) => (
            <span key={i} style={{ width: 5, height: 5, borderRadius: "50%", background: "#000" }} />
          ))}
        </button>

        {openArchiveId === ev.id && (
          <div
            style={{
              position: "absolute",
              top: 52,
              right: 16,
              width: 268,
              background: "#fff",
              border: `1px solid ${TOK.cardBorder}`,
              borderRadius: 12,
              boxShadow: "0 12px 40px rgba(0, 0, 0, 0.12)",
              zIndex: 200,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ padding: "14px 16px" }}>
              <button
                type="button"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  fontWeight: 500,
                  fontSize: 14,
                  color: "#374151",
                  width: "100%",
                  justifyContent: "flex-start",
                  marginBottom: 10,
                  cursor: "pointer",
                }}
                onClick={() => {
                  setArchiveConfirmId(ev.id);
                  setOpenArchiveId(null);
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                  <polyline points="3 6 5 6 21 6" />
                  <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
                  <path d="M10 11v6M14 11v6M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
                </svg>
                Archive event
              </button>
              <p style={{ fontSize: 13, color: "#6B7280", lineHeight: 1.55, fontWeight: 400 }}>
                To cancel or update your subscription, go to{" "}
                <span
                  style={{ color: "#1E2B6F", fontWeight: 500, cursor: "pointer" }}
                  onClick={() => {
                    setOpenArchiveId(null);
                    onNav("subscriptions");
                  }}
                >
                  My Subscription
                </span>{" "}
                from your Personal account menu.
              </p>
            </div>
          </div>
        )}

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

      <div style={{ height: 11, background: TOK.progressBg, position: "relative", zIndex: 2 }}>
        <div style={{ width: `${ev.pct}%`, height: "100%", background: TOK.primary, minWidth: ev.pct > 0 ? 4 : 0 }} />
      </div>

      <div style={{ padding: "20px 28px 24px", background: "#fff" }}>
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
        <p
          style={{
            fontSize: 14,
            lineHeight: "18px",
            letterSpacing: "0.005em",
            color: TOK.duration,
            fontWeight: 400,
            margin: "0 0 20px",
          }}
        >
          {ev.duration}
        </p>

        <div style={{ display: "flex", gap: 12, alignItems: "stretch" }}>
          <button
            type="button"
            style={{
              flex: 1,
              minHeight: 47,
              background: TOK.primary,
              color: "#fff",
              borderRadius: 14,
              fontSize: 18,
              fontWeight: 600,
              letterSpacing: "-0.01em",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 10,
              padding: "0 16px",
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
            <VolumeIcon />
            Listen now
          </button>

          {purificationCount > 0 && (
            <button
              type="button"
              style={{
                width: 91,
                minHeight: 47,
                flexShrink: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                background: TOK.includeBg,
                border: `1px dashed ${TOK.includeBorder}`,
                borderRadius: 14,
                color: TOK.includeText,
                fontSize: 20,
                fontWeight: 500,
                letterSpacing: "-0.01em",
                padding: "0 12px",
                cursor: "pointer",
              }}
              onClick={(e) => {
                e.stopPropagation();
                setOpenArchiveId(null);
                setOpenIncludeId(openIncludeId === ev.id ? null : ev.id);
              }}
            >
              <PersonIcon />
              +{purificationCount}
            </button>
          )}
        </div>
      </div>

      {openIncludeId === ev.id && (
        <div
          style={{
            position: "absolute",
            right: 16,
            top: IMG_H + 48,
            width: 280,
            background: "#fff",
            border: `1px solid ${TOK.cardBorder}`,
            borderRadius: 12,
            boxShadow: "0 16px 48px rgba(0, 0, 0, 0.12)",
            zIndex: 220,
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <div style={{ padding: "14px 16px" }}>
            <div style={{ fontSize: 14, color: "#374151", fontWeight: 500, marginBottom: 10 }}>
              Included in purification ({purificationCount})
            </div>
            <div style={{ fontSize: 13, fontWeight: 500, color: "#374151", marginBottom: 10 }}>Myself</div>
            {purificationEntries.length === 0 ? (
              <p style={{ fontSize: 13, color: "#6B7280", fontWeight: 400 }}>Nothing included yet.</p>
            ) : (
              purificationEntries.map((entry) => (
                <div
                  key={entry.id}
                  style={{
                    background: "#F9FAFB",
                    border: `1px solid ${TOK.cardBorder}`,
                    borderRadius: 8,
                    padding: "10px 12px",
                    display: "flex",
                    justifyContent: "space-between",
                    gap: 10,
                    marginBottom: 8,
                  }}
                >
                  <div>
                    <div style={{ fontWeight: 500, fontSize: 13, color: "#111827", marginBottom: 2 }}>{entry.name}</div>
                    <div style={{ fontSize: 12, color: "#6B7280" }}>Focus: {entry.focus}</div>
                  </div>
                  <button
                    type="button"
                    aria-label={`Exclude ${entry.name}`}
                    style={{
                      width: 24,
                      height: 24,
                      borderRadius: "50%",
                      border: `1px solid ${TOK.cardBorder}`,
                      color: "#6B7280",
                      fontSize: 14,
                      flexShrink: 0,
                      cursor: "pointer",
                    }}
                    onClick={(e) => {
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
    </>
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
  const purificationCount = ev.includeCount ?? purificationEntries.length;
  const gradient = ev.gradient || CARD_GRADIENT;
  const signUps = ev.signUps || 0;
  const stackLayers = signUps > 0 ? Math.min(signUps, 2) : 0;

  const faceProps = {
    ev,
    gradient,
    openArchiveId,
    openIncludeId,
    setOpenArchiveId,
    setOpenIncludeId,
    setArchiveConfirmId,
    excludePurificationEntry,
    onNav,
    setWatchEvent,
    eventMeta,
    purificationEntries,
    purificationCount,
  };

  /* Figma: duplicate cards peek ~29px below front; badge at bottom */
  const wrapperMinH = signUps > 0 ? CARD_H + 29 + 26 : CARD_H;

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        minHeight: wrapperMinH,
      }}
    >
      {/* Back cards — offset downward, narrower (Figma Frame 48097409 / 48097410) */}
      {stackLayers >= 2 && <StackCardBehind gradient={gradient} insetX={27} offsetTop={47} zIndex={0} />}
      {stackLayers >= 1 && <StackCardBehind gradient={gradient} insetX={12} offsetTop={33} zIndex={1} />}

      {/* Front card */}
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
      >
        <CardFace {...faceProps} />
      </article>

      {/* + N sign ups — bottom center (Figma Frame 48097421) */}
      {signUps > 0 && (
        <div
          style={{
            position: "absolute",
            left: "50%",
            bottom: 0,
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
            pointerEvents: "none",
          }}
        >
          + {signUps} sign ups
        </div>
      )}
    </div>
  );
}
