// =========================
// LevelEditor.ts
// Handles level editing canvas and tools
// =========================

import { Screen } from './ScreenManager';

export type ToolType = 'wall-white' | 'wall-blue' | 'wall-green' | 'wall-red' | 'finish' | 'erase';

export class LevelEditor implements Screen {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private selectedTool: ToolType = 'wall-white';
  private gridSize: number = 20; // 20x20 grid
  private levelData: string[][] = []; // store cell types as strings

  constructor() {
    const canvasEl = document.getElementById('editor-canvas') as HTMLCanvasElement;
    if (!canvasEl) throw new Error('Editor canvas not found');
    this.canvas = canvasEl;
    const context = this.canvas.getContext('2d');
    if (!context) throw new Error('Canvas context not found');
    this.ctx = context;

    // Initialize empty level
    this.resetLevelData();

    // Tool buttons
    document.querySelectorAll<HTMLButtonElement>('#editor-tools button')
      .forEach(btn => {
        btn.addEventListener('click', () => {
          const tool = btn.dataset.tool as ToolType;
          if (tool) this.selectedTool = tool;
          console.log('Selected tool:', this.selectedTool);
        });
      });

    // Back button
    document.getElementById('back-to-editor-menu-button')?.addEventListener('click', () => {
      document.getElementById('screen-editor')?.classList.remove('visible');
      document.getElementById('screen-editor-menu')?.classList.add('visible');
    });
  }

  setup() {
    this.renderGrid();
  }

  createNewLevel() {
    this.resetLevelData();
    this.renderGrid();
  }

  resetLevelData() {
    this.levelData = Array.from({ length: this.gridSize }, () =>
      Array.from({ length: this.gridSize }, () => 'empty')
    );
  }

  renderGrid() {
    const width = this.canvas.width = 400;
    const height = this.canvas.height = 400;
    const cellSize = width / this.gridSize;

    // Clear
    this.ctx.fillStyle = '#000';
    this.ctx.fillRect(0, 0, width, height);

    // Draw grid
    for (let y = 0; y < this.gridSize; y++) {
      for (let x = 0; x < this.gridSize; x++) {
        const cell = this.levelData[y][x];
        switch (cell) {
          case 'wall-white': this.ctx.fillStyle = '#eee'; break;
          case 'wall-blue': this.ctx.fillStyle = '#00f'; break;
          case 'wall-green': this.ctx.fillStyle = '#0f0'; break;
          case 'wall-red': this.ctx.fillStyle = '#f00'; break;
          case 'finish': this.ctx.fillStyle = '#ff0'; break;
          default: this.ctx.fillStyle = '#000';
        }
        this.ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
        this.ctx.strokeStyle = '#222';
        this.ctx.strokeRect(x * cellSize, y * cellSize, cellSize, cellSize);
      }
    }
  }

  show() {
    document.getElementById('screen-editor')?.classList.add('visible');
  }

  hide() {
    document.getElementById('screen-editor')?.classList.remove('visible');
  }
}
