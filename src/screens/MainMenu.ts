// =========================
// MainMenu.ts
// Handles arrow selection in main menu
// =========================

import { Screen } from './ScreenManager';

export class MainMenu implements Screen {
  private selectedArrow: string | null = null;

  setup() {
    const buttons = document.querySelectorAll<HTMLButtonElement>('#arrow-selection .arrow-button');

    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        // Remove highlight from all
        buttons.forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');

        this.selectedArrow = btn.dataset.arrow || null;
        console.log('Selected Arrow:', this.selectedArrow);
      });
    });

    const startButton = document.getElementById('start-game-button');
    startButton?.addEventListener('click', () => {
      if (!this.selectedArrow) {
        alert('Please select an arrow first!');
      } else {
        console.log('Start game with arrow:', this.selectedArrow);
        // Later: trigger game start
      }
    });
  }

  show() {
    document.getElementById('screen-main')?.classList.add('visible');
  }

  hide() {
    document.getElementById('screen-main')?.classList.remove('visible');
  }
}
