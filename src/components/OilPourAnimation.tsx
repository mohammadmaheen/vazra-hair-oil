import React from 'react';

interface OilPourAnimationProps {
  className?: string;
  isThumbnail?: boolean;
}

export const OilPourAnimation: React.FC<OilPourAnimationProps> = ({
  className = '',
  isThumbnail = false,
}) => {
  return (
    <div
      className={`absolute inset-0 pointer-events-none overflow-hidden select-none z-10 ${className}`}
      aria-hidden="true"
    >
      <style>{`
        /* -------------------------------------------------------------
           1. CONTINUOUS VISCOUS STREAM FLOW
           ------------------------------------------------------------- */
        @keyframes oilStreamFlow {
          0% {
            background-position: 0% 0%;
          }
          100% {
            background-position: 0% 200%;
          }
        }

        @keyframes oilStreamGleam {
          0%, 100% {
            opacity: 0.65;
            filter: drop-shadow(0 0 2px rgba(254, 240, 138, 0.6));
          }
          50% {
            opacity: 0.95;
            filter: drop-shadow(0 0 4px rgba(254, 240, 138, 0.9));
          }
        }

        /* -------------------------------------------------------------
           2. VISCOUS OIL DROPS GRAVITY ACCELERATION
           Gravity drop from bottle mouth/stream end down to cupped palms.
           Accelerates with ease-in, stretches vertically, impacts & flattens.
           ------------------------------------------------------------- */
        @keyframes oilDropFall1 {
          0% {
            top: 45%;
            left: 49.3%;
            transform: translate(-50%, 0) scale(0.65, 0.65);
            opacity: 0;
          }
          12% {
            opacity: 1;
            transform: translate(-50%, 0) scale(0.85, 1.05);
          }
          65% {
            opacity: 1;
            transform: translate(-50%, 0) scale(0.8, 1.35);
          }
          75% {
            top: 69%;
            opacity: 1;
            transform: translate(-50%, 0) scale(0.75, 1.45);
          }
          78% {
            top: 69.3%;
            opacity: 0.9;
            transform: translate(-50%, 0) scale(1.6, 0.45);
          }
          83% {
            top: 69.5%;
            opacity: 0;
            transform: translate(-50%, 0) scale(2.2, 0.2);
          }
          100% {
            top: 69.5%;
            opacity: 0;
            transform: translate(-50%, 0) scale(0.5, 0.5);
          }
        }

        @keyframes oilDropFall2 {
          0% {
            top: 45%;
            left: 49.3%;
            transform: translate(-50%, 0) scale(0.65, 0.65);
            opacity: 0;
          }
          12% {
            opacity: 1;
            transform: translate(-50%, 0) scale(0.85, 1.05);
          }
          65% {
            opacity: 1;
            transform: translate(-50%, 0) scale(0.8, 1.35);
          }
          75% {
            top: 69%;
            opacity: 1;
            transform: translate(-50%, 0) scale(0.75, 1.45);
          }
          78% {
            top: 69.3%;
            opacity: 0.9;
            transform: translate(-50%, 0) scale(1.6, 0.45);
          }
          83% {
            top: 69.5%;
            opacity: 0;
            transform: translate(-50%, 0) scale(2.2, 0.2);
          }
          100% {
            top: 69.5%;
            opacity: 0;
            transform: translate(-50%, 0) scale(0.5, 0.5);
          }
        }

        @keyframes oilDropFall3 {
          0% {
            top: 45%;
            left: 49.3%;
            transform: translate(-50%, 0) scale(0.65, 0.65);
            opacity: 0;
          }
          12% {
            opacity: 1;
            transform: translate(-50%, 0) scale(0.85, 1.05);
          }
          65% {
            opacity: 1;
            transform: translate(-50%, 0) scale(0.8, 1.35);
          }
          75% {
            top: 69%;
            opacity: 1;
            transform: translate(-50%, 0) scale(0.75, 1.45);
          }
          78% {
            top: 69.3%;
            opacity: 0.9;
            transform: translate(-50%, 0) scale(1.6, 0.45);
          }
          83% {
            top: 69.5%;
            opacity: 0;
            transform: translate(-50%, 0) scale(2.2, 0.2);
          }
          100% {
            top: 69.5%;
            opacity: 0;
            transform: translate(-50%, 0) scale(0.5, 0.5);
          }
        }

        /* -------------------------------------------------------------
           3. EXPANDING SURFACE RIPPLE WAVES IN CUPPED PALMS
           ------------------------------------------------------------- */
        @keyframes oilRipple1 {
          0%, 75% {
            width: 4px;
            height: 2px;
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.2);
            border-width: 2px;
          }
          76% {
            opacity: 0.9;
            border-width: 2px;
          }
          88% {
            opacity: 0.6;
            border-width: 1.5px;
          }
          100% {
            width: ${isThumbnail ? '32px' : '64px'};
            height: ${isThumbnail ? '14px' : '26px'};
            opacity: 0;
            transform: translate(-50%, -50%) scale(1.3);
            border-width: 0.8px;
          }
        }

        @keyframes oilRipple2 {
          0%, 75% {
            width: 4px;
            height: 2px;
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.2);
            border-width: 2px;
          }
          76% {
            opacity: 0.9;
            border-width: 2px;
          }
          88% {
            opacity: 0.6;
            border-width: 1.5px;
          }
          100% {
            width: ${isThumbnail ? '32px' : '64px'};
            height: ${isThumbnail ? '14px' : '26px'};
            opacity: 0;
            transform: translate(-50%, -50%) scale(1.3);
            border-width: 0.8px;
          }
        }

        @keyframes oilRipple3 {
          0%, 75% {
            width: 4px;
            height: 2px;
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.2);
            border-width: 2px;
          }
          76% {
            opacity: 0.9;
            border-width: 2px;
          }
          88% {
            opacity: 0.6;
            border-width: 1.5px;
          }
          100% {
            width: ${isThumbnail ? '32px' : '64px'};
            height: ${isThumbnail ? '14px' : '26px'};
            opacity: 0;
            transform: translate(-50%, -50%) scale(1.3);
            border-width: 0.8px;
          }
        }

        /* -------------------------------------------------------------
           4. GOLDEN SPARKLE / GLINT ON DROP IMPACT
           ------------------------------------------------------------- */
        @keyframes oilImpactGlint1 {
          0%, 74% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.2) rotate(0deg);
          }
          76% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1.35) rotate(20deg);
          }
          82% {
            opacity: 0.5;
            transform: translate(-50%, -50%) scale(0.8) rotate(35deg);
          }
          88%, 100% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.3) rotate(50deg);
          }
        }

        @keyframes oilImpactGlint2 {
          0%, 74% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.2) rotate(0deg);
          }
          76% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1.35) rotate(20deg);
          }
          82% {
            opacity: 0.5;
            transform: translate(-50%, -50%) scale(0.8) rotate(35deg);
          }
          88%, 100% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.3) rotate(50deg);
          }
        }

        @keyframes oilImpactGlint3 {
          0%, 74% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.2) rotate(0deg);
          }
          76% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1.35) rotate(20deg);
          }
          82% {
            opacity: 0.5;
            transform: translate(-50%, -50%) scale(0.8) rotate(35deg);
          }
          88%, 100% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.3) rotate(50deg);
          }
        }

        /* -------------------------------------------------------------
           5. CAUSTICS POOL WARMTH PULSE IN HANDS
           ------------------------------------------------------------- */
        @keyframes oilPoolBreathing {
          0%, 100% {
            opacity: 0.45;
            transform: translate(-50%, -50%) scale(0.96);
          }
          50% {
            opacity: 0.8;
            transform: translate(-50%, -50%) scale(1.04);
          }
        }

        .anim-stream-flow {
          background: linear-gradient(
            to bottom,
            rgba(254, 240, 138, 0.1) 0%,
            rgba(251, 191, 36, 0.5) 25%,
            rgba(254, 243, 199, 0.9) 45%,
            rgba(245, 158, 11, 0.7) 65%,
            rgba(254, 240, 138, 0.2) 100%
          );
          background-size: 100% 50%;
          animation: oilStreamFlow 1.1s linear infinite;
        }

        .anim-stream-gleam {
          animation: oilStreamGleam 2.2s ease-in-out infinite;
        }

        .anim-oil-drop-1 {
          animation: oilDropFall1 1.8s cubic-bezier(0.45, 0.05, 0.7, 0.95) infinite;
        }

        .anim-oil-drop-2 {
          animation: oilDropFall2 1.8s cubic-bezier(0.45, 0.05, 0.7, 0.95) 0.6s infinite;
        }

        .anim-oil-drop-3 {
          animation: oilDropFall3 1.8s cubic-bezier(0.45, 0.05, 0.7, 0.95) 1.2s infinite;
        }

        .anim-oil-ripple-1 {
          animation: oilRipple1 1.8s ease-out infinite;
        }

        .anim-oil-ripple-2 {
          animation: oilRipple2 1.8s ease-out 0.6s infinite;
        }

        .anim-oil-ripple-3 {
          animation: oilRipple3 1.8s ease-out 1.2s infinite;
        }

        .anim-oil-glint-1 {
          animation: oilImpactGlint1 1.8s ease-out infinite;
        }

        .anim-oil-glint-2 {
          animation: oilImpactGlint2 1.8s ease-out 0.6s infinite;
        }

        .anim-oil-glint-3 {
          animation: oilImpactGlint3 1.8s ease-out 1.2s infinite;
        }

        .anim-pool-warmth {
          animation: oilPoolBreathing 2.4s ease-in-out infinite;
        }
      `}</style>

      {/* =========================================================================
          LAYER 1: FLOWING OIL STREAM OVERLAY
          Covers the exact stream path from the tilted bottle down to waist.
          ========================================================================= */}
      <div
        className="absolute overflow-hidden anim-stream-gleam"
        style={{
          top: '20.2%',
          left: '48.9%',
          width: isThumbnail ? '2.8%' : '2.4%',
          height: '26.8%',
          borderRadius: '4px',
          mixBlendMode: 'color-dodge',
        }}
      >
        <div className="w-full h-full anim-stream-flow" />
      </div>

      {/* Stream Golden Edge Reflection Glint */}
      <div
        className="absolute"
        style={{
          top: '21.5%',
          left: '49.8%',
          width: '1px',
          height: '22%',
          background: 'linear-gradient(to bottom, rgba(255,255,255,0.8), rgba(254,240,138,0.9), transparent)',
          mixBlendMode: 'overlay',
          filter: 'blur(0.5px)',
        }}
      />

      {/* =========================================================================
          LAYER 2: THREE STAGGERED FALLING VISCOUS OIL DROPS
          Accelerating from the neck of the stream down into the cupped hands.
          ========================================================================= */}
      {/* Droplet 1 */}
      <div
        className="absolute anim-oil-drop-1 flex items-center justify-center pointer-events-none"
        style={{ width: isThumbnail ? '8px' : '13px', height: isThumbnail ? '11px' : '17px' }}
      >
        <svg viewBox="0 0 20 28" className="w-full h-full drop-shadow-[0_2px_4px_rgba(180,83,9,0.55)]">
          <defs>
            <radialGradient id="oilDropGrad1" cx="38%" cy="32%" r="65%">
              <stop offset="0%" stopColor="#fffbeb" />
              <stop offset="25%" stopColor="#fef08a" />
              <stop offset="65%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#b45309" />
            </radialGradient>
          </defs>
          {/* Teardrop viscous shape */}
          <path
            d="M 10 1 C 13 8, 19 14, 19 20 C 19 24.5, 15 27, 10 27 C 5 27, 1 24.5, 1 20 C 1 14, 7 8, 10 1 Z"
            fill="url(#oilDropGrad1)"
          />
          {/* Specular White Reflection Highlight */}
          <ellipse cx="7.5" cy="18" rx="2.5" ry="4" fill="#ffffff" opacity="0.9" />
          <circle cx="8" cy="10" r="1.2" fill="#ffffff" opacity="0.8" />
        </svg>
        {/* Trailing Micro-bead */}
        <div
          className="absolute -top-3 w-1.5 h-1.5 rounded-full bg-amber-300 shadow-[0_0_2px_#fff]"
          style={{ opacity: 0.85 }}
        />
      </div>

      {/* Droplet 2 */}
      <div
        className="absolute anim-oil-drop-2 flex items-center justify-center pointer-events-none"
        style={{ width: isThumbnail ? '8px' : '13px', height: isThumbnail ? '11px' : '17px' }}
      >
        <svg viewBox="0 0 20 28" className="w-full h-full drop-shadow-[0_2px_4px_rgba(180,83,9,0.55)]">
          <defs>
            <radialGradient id="oilDropGrad2" cx="38%" cy="32%" r="65%">
              <stop offset="0%" stopColor="#fffbeb" />
              <stop offset="25%" stopColor="#fef08a" />
              <stop offset="65%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#b45309" />
            </radialGradient>
          </defs>
          <path
            d="M 10 1 C 13 8, 19 14, 19 20 C 19 24.5, 15 27, 10 27 C 5 27, 1 24.5, 1 20 C 1 14, 7 8, 10 1 Z"
            fill="url(#oilDropGrad2)"
          />
          <ellipse cx="7.5" cy="18" rx="2.5" ry="4" fill="#ffffff" opacity="0.9" />
          <circle cx="8" cy="10" r="1.2" fill="#ffffff" opacity="0.8" />
        </svg>
        {/* Trailing Micro-bead */}
        <div
          className="absolute -top-3 w-1.5 h-1.5 rounded-full bg-amber-300 shadow-[0_0_2px_#fff]"
          style={{ opacity: 0.85 }}
        />
      </div>

      {/* Droplet 3 */}
      <div
        className="absolute anim-oil-drop-3 flex items-center justify-center pointer-events-none"
        style={{ width: isThumbnail ? '7px' : '12px', height: isThumbnail ? '10px' : '16px' }}
      >
        <svg viewBox="0 0 20 28" className="w-full h-full drop-shadow-[0_2px_4px_rgba(180,83,9,0.55)]">
          <defs>
            <radialGradient id="oilDropGrad3" cx="38%" cy="32%" r="65%">
              <stop offset="0%" stopColor="#fffbeb" />
              <stop offset="25%" stopColor="#fef08a" />
              <stop offset="65%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#b45309" />
            </radialGradient>
          </defs>
          <path
            d="M 10 1 C 13 8, 19 14, 19 20 C 19 24.5, 15 27, 10 27 C 5 27, 1 24.5, 1 20 C 1 14, 7 8, 10 1 Z"
            fill="url(#oilDropGrad3)"
          />
          <ellipse cx="7.5" cy="18" rx="2.5" ry="4" fill="#ffffff" opacity="0.9" />
          <circle cx="8" cy="10" r="1.2" fill="#ffffff" opacity="0.8" />
        </svg>
      </div>

      {/* =========================================================================
          LAYER 3: EXPANDING CONCENTRIC OIL RIPPLES IN CUPPED PALMS
          Positioned where drops land into the liquid puddle (y = 69.2%, x = 49.4%).
          ========================================================================= */}
      {/* Ripple 1 */}
      <div
        className="absolute anim-oil-ripple-1 rounded-full border border-amber-300 shadow-[0_0_10px_rgba(251,191,36,0.6)] pointer-events-none"
        style={{ top: '69.2%', left: '49.4%' }}
      />
      {/* Ripple 2 */}
      <div
        className="absolute anim-oil-ripple-2 rounded-full border border-amber-300 shadow-[0_0_10px_rgba(251,191,36,0.6)] pointer-events-none"
        style={{ top: '69.2%', left: '49.4%' }}
      />
      {/* Ripple 3 */}
      <div
        className="absolute anim-oil-ripple-3 rounded-full border border-amber-300 shadow-[0_0_10px_rgba(251,191,36,0.6)] pointer-events-none"
        style={{ top: '69.2%', left: '49.4%' }}
      />

      {/* =========================================================================
          LAYER 4: GOLDEN STARBURST GLINT ON IMPACT
          ========================================================================= */}
      {/* Glint 1 */}
      <div
        className="absolute anim-oil-glint-1 pointer-events-none"
        style={{ top: '69.2%', left: '49.4%', width: isThumbnail ? '16px' : '28px', height: isThumbnail ? '16px' : '28px' }}
      >
        <svg viewBox="0 0 24 24" className="w-full h-full">
          <path
            d="M 12 0 L 14 10 L 24 12 L 14 14 L 12 24 L 10 14 L 0 12 L 10 10 Z"
            fill="url(#glintGrad)"
          />
          <circle cx="12" cy="12" r="3.5" fill="#ffffff" />
          <defs>
            <radialGradient id="glintGrad">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="40%" stopColor="#fef08a" />
              <stop offset="80%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      {/* Glint 2 */}
      <div
        className="absolute anim-oil-glint-2 pointer-events-none"
        style={{ top: '69.2%', left: '49.4%', width: isThumbnail ? '16px' : '28px', height: isThumbnail ? '16px' : '28px' }}
      >
        <svg viewBox="0 0 24 24" className="w-full h-full">
          <path
            d="M 12 0 L 14 10 L 24 12 L 14 14 L 12 24 L 10 14 L 0 12 L 10 10 Z"
            fill="url(#glintGrad)"
          />
          <circle cx="12" cy="12" r="3.5" fill="#ffffff" />
        </svg>
      </div>

      {/* Glint 3 */}
      <div
        className="absolute anim-oil-glint-3 pointer-events-none"
        style={{ top: '69.2%', left: '49.4%', width: isThumbnail ? '16px' : '28px', height: isThumbnail ? '16px' : '28px' }}
      >
        <svg viewBox="0 0 24 24" className="w-full h-full">
          <path
            d="M 12 0 L 14 10 L 24 12 L 14 14 L 12 24 L 10 14 L 0 12 L 10 10 Z"
            fill="url(#glintGrad)"
          />
          <circle cx="12" cy="12" r="3.5" fill="#ffffff" />
        </svg>
      </div>

      {/* =========================================================================
          LAYER 5: PULSING GOLDEN POOL CAUSTICS IN HANDS
          Brings the liquid puddle in the cupped palms to life with warmth.
          ========================================================================= */}
      <div
        className="absolute anim-pool-warmth rounded-[50%] pointer-events-none"
        style={{
          top: '71.5%',
          left: '49.5%',
          width: isThumbnail ? '36%' : '32%',
          height: isThumbnail ? '20%' : '18%',
          background: 'radial-gradient(ellipse at center, rgba(251, 191, 36, 0.42) 0%, rgba(245, 158, 11, 0.22) 45%, transparent 75%)',
          mixBlendMode: 'color-dodge',
          filter: isThumbnail ? 'blur(6px)' : 'blur(10px)',
        }}
      />
    </div>
  );
};
