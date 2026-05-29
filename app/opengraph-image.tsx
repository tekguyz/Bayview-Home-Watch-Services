import { ImageResponse } from "next/og";

// Route segment config to run lightning-fast on the edge runtime framework
export const runtime = "edge";

// Image proportions
export const alt = "Bayview Home Watch Services | Premium Broward County Property Monitoring";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "row",
          boxSizing: "border-box",
          fontFamily: "sans-serif",
          overflow: "hidden",
        }}
      >
        {/* LEFT PANEL - Deep Midnight Brand Navy Block (40%) */}
        <div
          style={{
            width: "40%",
            height: "100%",
            backgroundColor: "#081721",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "50px",
            boxSizing: "border-box",
            position: "relative",
            borderRight: "4px solid #00a896", // Tropic teal demarcation bar
          }}
        >
          {/* Subtle decorative background arch inside the left panel */}
          <div
            style={{
              position: "absolute",
              top: "-50px",
              left: "-50px",
              width: "250px",
              height: "250px",
              borderRadius: "999px",
              border: "2px solid rgba(0, 168, 150, 0.1)",
              pointerEvents: "none",
            }}
          />

          {/* Scaled-up SVG Logo */}
          <div
            style={{
              width: "160px",
              height: "160px",
              display: "flex",
              marginBottom: "30px",
            }}
          >
            <svg width="160" height="160" viewBox="6 6 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Watchful protective arch */}
              <path 
                d="M 8 44 C 8 20, 56 20, 56 44" 
                stroke="#00a896" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
              />
              
              {/* Minimalist luxury estate slope-roof profile */}
              <path 
                d="M 14 34 L 38 22 L 48 30" 
                stroke="#ffffff" 
                strokeWidth="3.5" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
              />
              <path 
                d="M 18 32 V 46 H 44 V 32.5" 
                stroke="#ffffff" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
              />
              <rect 
                x="24" 
                y="36" 
                width="6" 
                height="10" 
                stroke="#ffffff" 
                strokeWidth="1.5" 
                rx="1" 
              />
              <line 
                x1="34" 
                y1="36" 
                x2="38" 
                y2="36" 
                stroke="#00a896" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
              />

              {/* Palm Tree Detail */}
              <path 
                d="M 49 46 Q 52 38 49 28" 
                stroke="#ffffff" 
                strokeWidth="2" 
                strokeLinecap="round" 
              />
              <path 
                d="M 49 28 Q 43 25 39 30 M 49 28 Q 46 20 44 14 M 49 28 Q 53 21 58 24 M 49 28 Q 55 28 58 35" 
                stroke="#00a896" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
              />

              {/* Coastal Sun */}
              <circle cx="32" cy="14" r="3" fill="#eab308" stroke="#eab308" strokeWidth="1" />
            </svg>
          </div>

          {/* Centered Typography Section */}
          <span
            style={{
              fontSize: "44px",
              fontWeight: 900,
              letterSpacing: "0.1em",
              color: "#FAF8F5",
              textTransform: "uppercase",
              lineHeight: "1",
              marginBottom: "8px",
            }}
          >
            BAYVIEW
          </span>
          <span
            style={{
              fontSize: "13px",
              fontWeight: 800,
              letterSpacing: "0.25em",
              color: "#00a896",
              textTransform: "uppercase",
              lineHeight: "1",
              textAlign: "center",
            }}
          >
            HOME WATCH SERVICES
          </span>
        </div>

        {/* RIGHT PANEL - Resort Warm Sand Canvas (60%) */}
        <div
          style={{
            width: "60%",
            height: "100%",
            backgroundColor: "#FAF8F5",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "80px 70px",
            boxSizing: "border-box",
            position: "relative",
          }}
        >
          {/* Soft inner frame border detail */}
          <div
            style={{
              position: "absolute",
              top: "30px",
              left: "30px",
              right: "30px",
              bottom: "30px",
              border: "1.5px solid rgba(8, 23, 33, 0.05)",
              borderRadius: "20px",
              pointerEvents: "none",
            }}
          />

          {/* Premium tag at the top */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <span
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "999px",
                backgroundColor: "#00a896",
              }}
            />
            <span
              style={{
                fontSize: "12px",
                fontWeight: 900,
                color: "#111827",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
              }}
            >
              Professional Broward County Property Care
            </span>
          </div>

          {/* Main Marketing Headline & Dynamic Copy */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "40px",
              marginBottom: "40px",
            }}
          >
            <span
              style={{
                fontSize: "46px",
                fontWeight: 900,
                color: "#081721",
                letterSpacing: "-0.02em",
                lineHeight: "1.2",
                marginBottom: "20px",
              }}
            >
              Heading Back North for the Season?
            </span>
            <span
              style={{
                fontSize: "24px",
                fontWeight: 500,
                color: "rgba(8, 23, 33, 0.75)",
                lineHeight: "1.4",
              }}
            >
              Your property&apos;s certified seasonal guardian. Meticulous storm prep, mold checkpoints, and high-frequency digital reporting.
            </span>
          </div>

          {/* Bottom Segment: Trust Validation Badges */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                backgroundColor: "rgba(0, 168, 150, 0.08)",
                border: "1.5px solid rgba(0, 168, 150, 0.25)",
                borderRadius: "30px",
                padding: "10px 24px",
              }}
            >
              <span
                style={{
                  fontSize: "13px",
                  fontWeight: 900,
                  color: "#00a896",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                Fully Bonded, Insured & Local
              </span>
            </div>

            <span
              style={{
                fontSize: "12px",
                fontWeight: 800,
                color: "rgba(8, 23, 33, 0.4)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              EST. BROWARD COUNTY
            </span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
