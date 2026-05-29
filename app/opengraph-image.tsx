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
          position: "relative",
          backgroundColor: "#FAF8F5", // Premium warm resort sand background
          color: "#081721",           // AUTHORITATIVE deep midnight navy text
          padding: "70px 80px",
          flexDirection: "column",
          justifyContent: "space-between",
          boxSizing: "border-box",
          fontFamily: "sans-serif",
        }}
      >
        {/* Subtle, elegant hand-crafted inner framing detail representing technical caliber */}
        <div
          style={{
            position: "absolute",
            top: "30px",
            left: "30px",
            right: "30px",
            bottom: "30px",
            border: "1px solid rgba(8, 23, 33, 0.08)",
            borderRadius: "24px",
            pointerEvents: "none",
          }}
        />

        {/* Ambient warm resort sunburst background glow reflection */}
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            right: "40px",
            width: "300px",
            height: "300px",
            borderRadius: "999px",
            backgroundColor: "rgba(0, 168, 150, 0.05)",
            filter: "blur(60px)",
          }}
        />

        {/* Brand Header Section: Logo & Titles Side-by-Side */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "24px",
          }}
        >
          {/* Concept 1: The Modern Guardian Vector SVG Representation */}
          <div
            style={{
              width: "84px",
              height: "84px",
              display: "flex",
            }}
          >
            <svg width="84" height="84" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Elegant protective watchful arch */}
              <path 
                d="M 8 44 C 8 20, 56 20, 56 44" 
                stroke="#00a896" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
              />
              
              {/* Minimalist modern luxury sloped-roof house profile */}
              {/* Roof slab */}
              <path 
                d="M 14 34 L 38 22 L 48 30" 
                stroke="#081721" 
                strokeWidth="3.5" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
              />
              {/* Main house frame */}
              <path 
                d="M 18 32 V 46 H 44 V 32.5" 
                stroke="#081721" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
              />
              {/* Modern vertical glass window pane */}
              <rect 
                x="24" 
                y="36" 
                width="6" 
                height="10" 
                stroke="#081721" 
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

              {/* Stylized palm tree silhouette */}
              <path 
                d="M 49 46 Q 52 38 49 28" 
                stroke="#081721" 
                strokeWidth="2" 
                strokeLinecap="round" 
              />
              <path 
                d="M 49 28 Q 43 25 39 30 M 49 28 Q 46 20 44 14 M 49 28 Q 53 21 58 24 M 49 28 Q 55 28 58 35" 
                stroke="#00a896" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
              />

              {/* Golden warm coastal sun accent */}
              <circle cx="32" cy="14" r="3" fill="#eab308" stroke="#eab308" strokeWidth="1" />
            </svg>
          </div>

          {/* Typography Panel */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span
              style={{
                fontSize: "42px",
                fontWeight: 900,
                letterSpacing: "0.08em",
                color: "#081721",
                textTransform: "uppercase",
                lineHeight: "1",
              }}
            >
              Bayview
            </span>
            <span
              style={{
                fontSize: "14px",
                fontWeight: 850,
                letterSpacing: "0.22em",
                color: "#00a896",
                textTransform: "uppercase",
                lineHeight: "1",
                marginTop: "6px",
              }}
            >
              Home Watch Services
            </span>
          </div>
        </div>

        {/* Core Marketing Copy: Hook & Dynamic Description */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            marginTop: "60px",
          }}
        >
          <span
            style={{
              fontSize: "52px",
              fontWeight: 900,
              color: "#081721",
              letterSpacing: "-0.02em",
              lineHeight: "1.15",
              marginBottom: "16px",
            }}
          >
            Heading Back North for the Season?
          </span>
          <span
            style={{
              fontSize: "26px",
              fontWeight: 650,
              color: "rgba(8, 23, 33, 0.72)",
              lineHeight: "1.25",
              maxWidth: "850px",
            }}
          >
            Your Home&apos;s Seasonal Guardian in Broward County. Licensed, bonded, and detail-obsessed walkthrough protection.
          </span>
        </div>

        {/* Premium Trust Badge Overlay in corner */}
        <div
          style={{
            position: "absolute",
            bottom: "70px",
            right: "80px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            border: "1.5px solid rgba(234, 179, 8, 0.25)",
            backgroundColor: "rgba(234, 179, 8, 0.08)",
            padding: "10px 18px",
            borderRadius: "999px",
            boxSizing: "border-box",
          }}
        >
          {/* Micro gold beacon */}
          <div
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "999px",
              backgroundColor: "#eab308",
            }}
          />
          <span
            style={{
              fontSize: "11px",
              fontWeight: 800,
              color: "#eab308",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
            }}
          >
            Certified Watchkeepers
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
