// Audio feedback synth utility for cyberpunk tactile UI
class CyberAudioEngine {
  private ctx: AudioContext | null = null;
  public enabled: boolean = true;

  private init() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioContextClass) {
        this.ctx = new AudioContextClass();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public playBeep(freq = 880, type: OscillatorType = 'sine', duration = 0.05, gainValue = 0.03) {
    if (!this.enabled || typeof window === 'undefined') return;
    try {
      this.init();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      gain.gain.setValueAtTime(gainValue, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch {
      // Audio autoplay policy fallback
    }
  }

  public playTerminalKey() {
    const freqs = [1200, 1400, 1600, 1800, 2000];
    const freq = freqs[Math.floor(Math.random() * freqs.length)];
    this.playBeep(freq, 'square', 0.02, 0.015);
  }

  public playExecute() {
    this.playBeep(440, 'sawtooth', 0.08, 0.04);
    setTimeout(() => this.playBeep(880, 'sine', 0.12, 0.05), 40);
  }

  public playAccessGranted() {
    this.playBeep(523.25, 'triangle', 0.06, 0.04); // C5
    setTimeout(() => this.playBeep(659.25, 'triangle', 0.06, 0.04), 60); // E5
    setTimeout(() => this.playBeep(1046.50, 'sine', 0.15, 0.05), 120); // C6
  }

  public playAccessDenied() {
    this.playBeep(220, 'sawtooth', 0.1, 0.05);
    setTimeout(() => this.playBeep(164.81, 'sawtooth', 0.15, 0.05), 80);
  }
}

export const cyberAudio = new CyberAudioEngine();
