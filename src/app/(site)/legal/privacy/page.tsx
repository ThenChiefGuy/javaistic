"use client";

import { useEffect } from "react";

export default function StorePage() {
  useEffect(() => {
    const bar = document.getElementById("bar") as HTMLDivElement | null;
    let pct = 0;
    const steps = [8, 16, 5, 20, 10, 9, 12, 20];
    let i = 0;

    function advance() {
      if (i >= steps.length) {
        pct = 100;
        if (bar) bar.style.width = pct + "%";
        return;
      }
      pct = Math.min(99, pct + steps[i]);
      if (bar) bar.style.width = pct + "%";
      i++;
      setTimeout(advance, 500 + Math.random() * 900);
    }

    setTimeout(advance, 700);

    const typed = document.getElementById("typed") as HTMLSpanElement | null;
    const messages = [
      "checking packets...",
      "patching core modules...",
      "optimizing assets...",
      "finalizing...",
    ];
    let tIndex = 0;

    function cycleTyped() {
      if (typed) typed.textContent = messages[tIndex];
      tIndex = (tIndex + 1) % messages.length;
      setTimeout(cycleTyped, 2500 + Math.random() * 1200);
    }

    cycleTyped();
  }, []);

  return (
    <div className="lux-bg min-h-screen text-slate-300 antialiased">
      <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center p-6 lg:p-12 gap-10">
        {/* Header */}
        <header className="max-w-xl">
          <div className="p-6 rounded-2xl terminal glass-accent">
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
              DonutSMP Store — Coming Soon
            </h1>
            <p className="mt-3 text-sm text-slate-300/80">
              A new digital experience is being crafted. Stay tuned — we’re
              building something truly special.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <a
                href="https://ggdonutsmp.netlify.app"
                className="px-4 py-2 rounded-lg text-sm font-medium text-white bg-gradient-to-r from-red-600/80 to-green-500/80 shadow-md hover:scale-[1.01] transition"
              >
                Dashboard
              </a>
              <a
                href="https://discord.gg/HyTFhjMwCz"
                className="px-4 py-2 rounded-lg text-sm font-medium text-white bg-gradient-to-r from-cyan-600/80 to-green-500/80 shadow-md hover:scale-[1.01] transition"
              >
                Discord
              </a>
            </div>

            <p className="mt-5 text-xs text-slate-400">
              Crafted by{" "}
              <a
                href="https://github.com/septydev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white underline"
              >
                TheBlackSpider
              </a>
            </p>
          </div>
        </header>

        {/* Terminal */}
        <main className="w-full max-w-md">
          <div className="terminal p-6 rounded-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-3 h-3 rounded-full bg-red-500/90 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-green-500/70 inline-block"></span>
              <div className="ml-auto text-xs text-slate-400">Maintenance mode</div>
            </div>

            <div className="text-[13px] leading-6">
              <div className="term-line">
                <span className="text-slate-400">[</span>
                <span className="text-slate-200">init</span>
                <span className="text-slate-400">]</span> Boot sequence started
              </div>
              <div className="term-line">
                <span className="text-slate-400">[</span>
                <span className="text-slate-200">update</span>
                <span className="text-slate-400">]</span> Deploying assets — optimizing shaders
              </div>
              <div className="term-line">
                <span className="text-slate-400">[</span>
                <span className="text-slate-200">status</span>
                <span className="text-slate-400">]</span> Expected return:{" "}
                <strong className="text-white">~ 3 hours</strong>
              </div>

              <div className="term-line mt-3">
                <div className="term-progress">
                  <div id="bar" className="bar"></div>
                </div>
              </div>

              <div className="mt-4 text-xs text-slate-400 font-mono">
                Need help? Visit our{" "}
                <a
                  href="https://discord.domain.com"
                  className="underline text-slate-200 hover:text-white"
                >
                  Discord
                </a>{" "}
                or{" "}
                <a
                  href="https://dash.domain.com"
                  className="underline text-slate-200 hover:text-white"
                >
                  Dashboard
                </a>
              </div>

              <div>
                <span className="text-green-300">root@project</span>:
                <span className="text-slate-400">~</span>$ <span id="typed">checking integrity...</span>
                <span className="cursor" aria-hidden="true"></span>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Embedded Styles */}
      <style jsx>{`
        :root {
          --bg-900: #05060a;
          --bg-800: #0b0d13;
          --accent-1: rgba(126, 58, 255, 0.12);
          --accent-2: rgba(0, 255, 200, 0.06);
        }

        .lux-bg {
          background: linear-gradient(
              180deg,
              rgba(6, 8, 12, 1) 0%,
              rgba(12, 10, 18, 1) 100%
            ),
            radial-gradient(600px 400px at 10% 10%, rgba(126, 58, 255, 0.08), transparent 20%),
            radial-gradient(500px 300px at 90% 90%, rgba(0, 255, 200, 0.04), transparent 25%);
          background-blend-mode: screen, overlay;
        }

        .terminal {
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, "Roboto Mono", "JetBrains Mono", monospace;
          color: #b9f6ca;
          background: rgba(2, 6, 12, 0.45);
          border: 1px solid rgba(255, 255, 255, 0.04);
          box-shadow: 0 6px 30px rgba(2, 6, 12, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.02);
          backdrop-filter: blur(6px) saturate(120%);
        }

        .term-line {
          opacity: 0;
          transform: translateY(6px);
          animation: lineIn 1s ease forwards;
        }

        .term-line:nth-child(1) {
          animation-delay: 0.3s;
        }

        .term-line:nth-child(2) {
          animation-delay: 0.7s;
        }

        .term-line:nth-child(3) {
          animation-delay: 1.1s;
        }

        .term-line:nth-child(4) {
          animation-delay: 1.5s;
        }

        @keyframes lineIn {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .term-progress {
          height: 10px;
          width: 100%;
          background: linear-gradient(90deg, rgba(255, 255, 255, 0.03), rgba(255, 255, 255, 0.02));
          border-radius: 6px;
          overflow: hidden;
          margin-top: 12px;
          position: relative;
          border: 1px solid rgba(255, 255, 255, 0.03);
        }

        .term-progress .bar {
          height: 100%;
          width: 0%;
          background: linear-gradient(90deg, rgba(0, 255, 200, 0.18), rgba(126, 58, 255, 0.18));
          box-shadow: 0 6px 18px rgba(126, 58, 255, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.02);
          border-radius: 6px;
          transition: width 0.6s cubic-bezier(0.2, 0.9, 0.2, 1);
        }

        .cursor {
          display: inline-block;
          width: 8px;
          height: 18px;
          background: #b9f6ca;
          margin-left: 6px;
          border-radius: 2px;
          animation: blink 1s steps(2, end) infinite;
          vertical-align: text-bottom;
        }

        @keyframes blink {
          50% {
            opacity: 0;
          }
        }

        .glass-accent {
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.02), rgba(255, 255, 255, 0.01));
          border: 1px solid rgba(255, 255, 255, 0.02);
          backdrop-filter: blur(6px);
        }
      `}</style>
    </div>
  );
}
