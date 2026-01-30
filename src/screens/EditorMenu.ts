// =========================
// EditorMenu.ts
// Handles My Levels screen
// =========================

import { Screen } from './ScreenManager';
import { LevelEditor } from './LevelEditor';

export class EditorMenu implements Screen {
  private levelListContainer: HTMLElement | null;

  constructor() {
    this.levelListContainer = document.getElementById('level-list');
  }

  setup(screenManager: any, levelEditor: LevelEditor) {
    const createBtn = document.getElementById('create-level-button');
    createBtn?.addEventListener('click', () => {
      // Create empty level
      levelEditor.createNewLevel();

      // Show editor screen
      screenManager.showScreen('screen-editor');
    });
  }

  show() {
    document.getElementById('screen-editor-menu')?.classList.add('visible');
  }

  hide() {
    document.getElementById('screen-editor-menu')?.classList.remove('visible');
  }
}
