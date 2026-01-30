// =========================
// GameScreen.ts
// Placeholder for game canvas and reset button
// =========================

import { Screen } from './ScreenManager';

export class GameScreen implements Screen {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;

  constructor() {
    const canvasEl = document.getElementById('game-canvas') as HTMLCanvasElement;
    if (!canvasEl) throw new Error('Game canvas not found');
    this.canvas = canvasEl;

    const context = this.canvas.getContext('2d');
    if (!context) throw new Error('Game canvas context not found');
    this.ctx = context;

    // Reset button
    document.getElementById('reset-button')?.addEventListener('click', () => {
      console.log('Reset game');
      this.renderEmpty();
    });

    // Back to main menu
    document.getElementById('back-to-main-button')?.addEventListener('click', () => {
      document.getElementById('screen-game')?.classList.remove('visible');
      document.getElementById('screen-main')?.classList.add('visible');
    });
  }

  setup() {
    this.renderEmpty();
  }

  renderEmpty() {
    this.canvas.width = 400;
    this.canvas.height = 400;
    this.ctx.fillStyle = '#000';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }

  show() {
    document.getElementById('screen-game')?.classList.add('visible');
  }

  hide() {
    document.getElementById('screen-game')?.classList.remove('visible');
  }
}
