import { C, CARD_GRADIENT } from "../theme";

const PersonIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

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

  return (
    <article
      style={{
        background: "#fff",
        border: `1px solid ${C.grayBorder}`,
        borderRadius: 14,
        overflow: "visible",
        position: "relative",
        boxShadow: "0 1px 2px rgba(0,0,0,0.04)",
        paddingBottom: ev.signUps > 0 ? 10 : 0,
      }}
    >
      <div
        style={{
          position: "relative",
          height: 156,
          background: gradient,
          borderRadius: "14px 14px 0 0",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", top: 10, left: 10, display: "flex", gap: 6, flexWrap: "wrap" }}>
          <span
            style={{
              background: ev.typeColor || C.orange,
              color: "#fff",
              fontSize: 11,
              fontWeight: 500,
              padding: "4px 10px",
              borderRadius: 20,
              lineHeight: 1.2,
            }}
          >
            {ev.type}
          </span>
          {ev.recurring && (
            <span
              style={{
                background: "rgba(30, 43, 111, 0.55)",
                color: "#fff",
                fontSize: 11,
                fontWeight: 500,
                padding: "4px 10px",
                borderRadius: 20,
              }}
            >
              Recurring
            </span>
          )}
        </div>

        <button
          type="button"
          aria-label="Event options"
          style={{
            position: "absolute",
            top: 10,
            right: 10,
            width: 30,
            height: 30,
            borderRadius: "50%",
            background: "#fff",
            border: `1px solid ${C.grayBorder}`,
            color: "#4B5563",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 14,
            fontWeight: 500,
            letterSpacing: 1,
          }}
          onClick={(e) => {
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
              position: "absolute",
              top: 46,
              right: 10,
              width: 268,
              background: "#fff",
              border: `1px solid ${C.grayBorder}`,
              borderRadius: 12,
              boxShadow: "0 12px 40px rgba(0,0,0,0.12)",
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
              <p style={{ fontSize: 13, color: C.grayText, lineHeight: 1.55, fontWeight: 400 }}>
                To cancel or update your subscription, go to{" "}
                <span
                  style={{ color: C.navy, fontWeight: 500, cursor: "pointer" }}
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

        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0 }}>
          <div style={{ height: 2, background: "rgba(255,255,255,0.35)" }}>
            <div style={{ width: `${ev.pct}%`, height: "100%", background: "rgba(255,255,255,0.95)" }} />
          </div>
          <div
            style={{
              position: "absolute",
              bottom: 8,
              left: 12,
              fontSize: 11,
              color: "#fff",
              fontWeight: 500,
              textShadow: "0 1px 2px rgba(0,0,0,0.2)",
            }}
          >
            {ev.pct}% completed
          </div>
        </div>
      </div>

      <div style={{ padding: "14px 14px 16px" }}>
        <h3 style={{ fontWeight: 500, fontSize: 15, color: "#111827", marginBottom: 4, lineHeight: 1.35 }}>
          {ev.title}
        </h3>
        <p style={{ fontSize: 13, color: C.grayText, marginBottom: 12, fontWeight: 400 }}>{ev.duration}</p>

        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <button
            type="button"
            style={{
              background: C.magenta,
              color: "#fff",
              borderRadius: 999,
              padding: "10px 18px",
              fontSize: 14,
              fontWeight: 500,
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
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
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
            Listen now
          </button>

          {purificationCount > 0 && (
            <button
              type="button"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                padding: "8px 12px",
                borderRadius: 999,
                background: C.lightBlueBg || "#E8F4FC",
                border: `1px solid ${C.lightBlueBorder || "#BAE6FD"}`,
                color: C.navy,
                fontSize: 13,
                fontWeight: 500,
                flexShrink: 0,
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

      {ev.signUps > 0 && (
        <div
          style={{
            position: "absolute",
            bottom: -12,
            left: "50%",
            transform: "translateX(-50%)",
            background: C.navy,
            color: "#fff",
            fontSize: 11,
            fontWeight: 500,
            padding: "5px 14px",
            borderRadius: 20,
            whiteSpace: "nowrap",
            zIndex: 5,
          }}
        >
          + {ev.signUps} sign ups
        </div>
      )}

      {openIncludeId === ev.id && (
        <div
          style={{
            position: "absolute",
            right: 12,
            top: 148,
            width: 280,
            background: "#fff",
            border: `1px solid ${C.grayBorder}`,
            borderRadius: 12,
            boxShadow: "0 16px 48px rgba(0,0,0,0.12)",
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
              <p style={{ fontSize: 13, color: C.grayText, fontWeight: 400 }}>Nothing included yet.</p>
            ) : (
              purificationEntries.map((entry) => (
                <div
                  key={entry.id}
                  style={{
                    background: "#F9FAFB",
                    border: `1px solid ${C.grayBorder}`,
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
                    <div style={{ fontSize: 12, color: C.grayText }}>Focus: {entry.focus}</div>
                  </div>
                  <button
                    type="button"
                    aria-label={`Exclude ${entry.name}`}
                    style={{
                      width: 24,
                      height: 24,
                      borderRadius: "50%",
                      border: `1px solid ${C.grayBorder}`,
                      color: C.grayText,
                      fontSize: 14,
                      flexShrink: 0,
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
    </article>
  );
}
