import React from "react";

export default function App() {
  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Header */}
      <header
        style={{
          height: "58px",
          background: "#ffffff",
          borderBottom: "1px solid #e5e9f0",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 1.5rem"
        }}
      >
        <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
          <div
            style={{
              width: "32px",
              height: "32px",
              borderRadius: "12px",
              background: "linear-gradient(135deg,#2563eb,#93c5fd)"
            }}
          ></div>
          <h1 style={{ fontSize: "1rem", margin: 0, fontWeight: 600 }}>PlanAI Rezidențial</h1>
          <span
            style={{
              background: "#eff6ff",
              color: "#1d4ed8",
              fontSize: "0.65rem",
              padding: "2px 8px",
              borderRadius: "9999px"
            }}
          >
            Demo concept
          </span>
        </div>
        <div style={{ fontSize: "0.7rem", color: "#64748b" }}>Prototip de prezentare – nu este funcțional</div>
      </header>

      {/* Content */}
      <div style={{ flex: 1, display: "flex", overflow: "hidden" }}>
        {/* Left / main */}
        <div style={{ flex: 1.4, display: "flex", flexDirection: "column", gap: "1rem", padding: "1rem 1.5rem" }}>
          {/* Form */}
          <div
            style={{
              background: "#ffffff",
              borderRadius: "1rem",
              border: "1px solid #e2e8f0",
              padding: "0.75rem 1rem",
              display: "flex",
              gap: "0.75rem",
              alignItems: "center"
            }}
          >
            <input
              defaultValue="Casă P+1, 4 camere, 2 băi, living spre sud"
              style={{
                flex: 1,
                border: "none",
                outline: "none",
                fontSize: "0.85rem",
                background: "transparent"
              }}
            />
            <button
              style={{
                background: "linear-gradient(135deg,#2563eb,#60a5fa)",
                color: "white",
                border: "none",
                borderRadius: "9999px",
                padding: "0.45rem 1.1rem",
                fontWeight: 500,
                fontSize: "0.8rem"
              }}
            >
              Generează plan
            </button>
            <button
              style={{
                background: "#eff6ff",
                color: "#1d4ed8",
                border: "none",
                borderRadius: "9999px",
                padding: "0.45rem 0.9rem",
                fontWeight: 500,
                fontSize: "0.75rem"
              }}
            >
              Vedere 3D
            </button>
          </div>

          {/* Plan 2D */}
          <div
            style={{
              flex: 1,
              background: "#ffffff",
              borderRadius: "1rem",
              border: "1px solid #e2e8f0",
              padding: "1rem",
              display: "flex",
              flexDirection: "column",
              gap: "0.75rem"
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <h2 style={{ margin: 0, fontSize: "0.9rem" }}>Plan parter – casă P+1</h2>
              <span style={{ fontSize: "0.7rem", color: "#94a3b8" }}>Generat automat</span>
            </div>

            <div
              style={{
                flex: 1,
                background: "#f8fafc",
                borderRadius: "0.75rem",
                border: "1px dashed #d0d7e2",
                display: "flex",
                gap: "0.75rem"
              }}
            >
              <div style={{ flex: 1.5, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <div style={{ display: "flex", gap: "0.75rem", flex: 1 }}>
                  <div
                    style={{
                      flex: 1.3,
                      background: "#dbeafe",
                      border: "1px solid #bfdbfe",
                      borderRadius: "0.75rem",
                      padding: "0.45rem 0.5rem",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between"
                    }}
                  >
                    <div>
                      <div style={{ fontSize: "0.7rem", fontWeight: 600, color: "#1e3a8a" }}>Living</div>
                      <div style={{ fontSize: "0.65rem", color: "#1e3a8a" }}>30 mp</div>
                    </div>
                    <div style={{ fontSize: "0.55rem", color: "#1e3a8a" }}>Orientare: S</div>
                  </div>

                  <div
                    style={{
                      flex: 0.7,
                      background: "#fee4d6",
                      border: "1px solid #fdba9c",
                      borderRadius: "0.75rem",
                      padding: "0.45rem 0.5rem"
                    }}
                  >
                    <div style={{ fontSize: "0.7rem", fontWeight: 600, color: "#9a3412" }}>Bucătărie</div>
                    <div style={{ fontSize: "0.65rem", color: "#9a3412" }}>12 mp</div>
                  </div>
                </div>

                <div style={{ display: "flex", gap: "0.75rem", height: "72px" }}>
                  <div
                    style={{
                      flex: 1,
                      background: "#eef2ff",
                      border: "1px solid #c7d2fe",
                      borderRadius: "0.75rem",
                      padding: "0.3rem 0.5rem"
                    }}
                  >
                    <div style={{ fontSize: "0.65rem", fontWeight: 600, color: "#312e81" }}>Terasă</div>
                    <div style={{ fontSize: "0.6rem", color: "#312e81" }}>10 mp</div>
                  </div>
                  <div
                    style={{
                      width: "110px",
                      background: "#fff1f2",
                      border: "1px solid #ffe4e6",
                      borderRadius: "0.75rem",
                      padding: "0.3rem 0.5rem"
                    }}
                  >
                    <div style={{ fontSize: "0.65rem", fontWeight: 600, color: "#be123c" }}>Scară</div>
                    <div style={{ fontSize: "0.6rem", color: "#be123c" }}>etaj</div>
                  </div>
                </div>
              </div>

              <div style={{ width: "150px", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <div
                  style={{
                    background: "#fef9c3",
                    border: "1px solid #fde68a",
                    borderRadius: "0.75rem",
                    padding: "0.4rem 0.5rem"
                  }}
                >
                  <div style={{ fontSize: "0.7rem", fontWeight: 600, color: "#854d0e" }}>Dormitor</div>
                  <div style={{ fontSize: "0.65rem", color: "#854d0e" }}>14 mp</div>
                </div>
                <div
                  style={{
                    background: "#e2e8f0",
                    border: "1px solid #cbd5e1",
                    borderRadius: "0.75rem",
                    padding: "0.4rem 0.5rem"
                  }}
                >
                  <div style={{ fontSize: "0.7rem", fontWeight: 600, color: "#0f172a" }}>Baie</div>
                  <div style={{ fontSize: "0.65rem", color: "#0f172a" }}>6 mp</div>
                </div>
                <div
                  style={{
                    background: "#f8fafc",
                    border: "1px dashed #cbd5e1",
                    borderRadius: "0.75rem",
                    padding: "0.4rem 0.5rem",
                    fontSize: "0.6rem",
                    color: "#94a3b8"
                  }}
                >
                  spațiu tehnic
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right panel */}
        <aside
          style={{
            width: "290px",
            background: "#ffffff",
            borderLeft: "1px solid #e2e8f0",
            padding: "1rem 1rem 1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem"
          }}
        >
          <div>
            <h2 style={{ fontSize: "0.85rem", margin: 0 }}>Detalii proiect</h2>
            <p style={{ fontSize: "0.7rem", color: "#94a3b8" }}>
              Casă P+1, locuire individuală. Plan parter generat automat.
            </p>
          </div>

          <div
            style={{
              background: "#f8fafc",
              border: "1px solid #e2e8f0",
              borderRadius: "0.75rem",
              padding: "0.75rem",
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem"
            }}
          >
            <RoomItem name="Living" area="30 mp" color="#dbeafe" />
            <RoomItem name="Bucătărie" area="12 mp" color="#fee4d6" />
            <RoomItem name="Dormitor" area="14 mp" color="#fef9c3" />
            <RoomItem name="Baie" area="6 mp" color="#e2e8f0" />
            <RoomItem name="Terasă" area="10 mp" color="#eef2ff" />
          </div>

          <div
            style={{
              background: "#eff6ff",
              border: "1px solid #dbeafe",
              borderRadius: "0.75rem",
              padding: "0.7rem"
            }}
          >
            <div style={{ fontSize: "0.7rem", color: "#1d4ed8", fontWeight: 600 }}>Indicatori</div>
            <div style={{ fontSize: "0.7rem", color: "#1e293b", marginTop: "0.4rem" }}>
              Suprafață utilă: <b>82 mp</b>
            </div>
            <div style={{ fontSize: "0.7rem", color: "#1e293b" }}>
              Niveluri: <b>P+1</b>
            </div>
          </div>

          <div style={{ fontSize: "0.65rem", color: "#94a3b8", marginTop: "auto" }}>
            Prototip de prezentare – butoanele nu sunt funcționale.
          </div>
        </aside>
      </div>
    </div>
  );
}

function RoomItem({ name, area, color }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
      <div
        style={{
          width: "14px",
          height: "14px",
          borderRadius: "4px",
          background: color,
          border: "1px solid rgba(15,23,42,0.08)"
        }}
      ></div>
      <div style={{ display: "flex", justifyContent: "space-between", width: "100%", gap: "0.5rem" }}>
        <span style={{ fontSize: "0.7rem" }}>{name}</span>
        <span style={{ fontSize: "0.65rem", color: "#475569" }}>{area}</span>
      </div>
    </div>
  );
}
