import { useEffect, useRef } from 'react';

/**
 * Clean Web Audio API synthesized ambient sanctuary tone
 * Generates an ethereal, soft Tibetan bowl/drone harmonic pad
 */
export function useAudioAmbience(isPlaying) {
  const audioCtxRef = useRef(null);
  const gainNodeRef = useRef(null);
  const oscillatorsRef = useRef([]);

  useEffect(() => {
    if (isPlaying) {
      try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (!AudioContext) return;

        const ctx = new AudioContext();
        audioCtxRef.current = ctx;

        const masterGain = ctx.createGain();
        masterGain.gain.setValueAtTime(0, ctx.currentTime);
        masterGain.gain.linearRampToValueAtTime(0.04, ctx.currentTime + 3); // Soft ambient level
        masterGain.connect(ctx.destination);
        gainNodeRef.current = masterGain;

        // Frequencies tuned to peaceful harmonic resonance (F# minor sacred chord: 185Hz, 220Hz, 277Hz, 432Hz)
        const freqs = [185.00, 220.00, 277.18, 432.00];
        const oscs = freqs.map((f, i) => {
          const osc = ctx.createOscillator();
          const panner = ctx.createStereoPanner ? ctx.createStereoPanner() : null;
          
          osc.type = i === 3 ? 'sine' : 'triangle';
          osc.frequency.setValueAtTime(f, ctx.currentTime);
          
          // Subtle detune for shimmer
          osc.detune.setValueAtTime((i - 1.5) * 4, ctx.currentTime);

          if (panner) {
            panner.pan.setValueAtTime((i % 2 === 0 ? -0.4 : 0.4), ctx.currentTime);
            osc.connect(panner);
            panner.connect(masterGain);
          } else {
            osc.connect(masterGain);
          }

          osc.start();
          return osc;
        });

        oscillatorsRef.current = oscs;
      } catch (err) {
        console.warn('Web Audio ambience not allowed or supported', err);
      }
    } else {
      if (gainNodeRef.current && audioCtxRef.current) {
        const ctx = audioCtxRef.current;
        gainNodeRef.current.gain.linearRampToValueAtTime(0, ctx.currentTime + 1.5);
        setTimeout(() => {
          oscillatorsRef.current.forEach(osc => {
            try { osc.stop(); osc.disconnect(); } catch (e) {}
          });
          oscillatorsRef.current = [];
          if (audioCtxRef.current && audioCtxRef.current.state !== 'closed') {
            audioCtxRef.current.close();
          }
        }, 1600);
      }
    }

    return () => {
      oscillatorsRef.current.forEach(osc => {
        try { osc.stop(); osc.disconnect(); } catch (e) {}
      });
      if (audioCtxRef.current && audioCtxRef.current.state !== 'closed') {
        audioCtxRef.current.close();
      }
    };
  }, [isPlaying]);
}
