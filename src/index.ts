// =========================
// src/index.ts
// Entry point
// =========================

import { ScreenManager } from './screens/ScreenManager';
import { MainMenu } from './screens/MainMenu';
import { EditorMenu } from './screens/EditorMenu';
import { LevelEditor } from './screens/LevelEditor';
import { GameScreen } from './screens/GameScreen';

// -------------------------
// Initialize Screens
// -------------------------
const mainMenu = new MainMenu();
const editorMenu = new EditorMenu();
const levelEditor = new LevelEditor();
const gameScreen = new GameScreen();

const screenManager = new ScreenManager([
  { id: 'screen-main', instance: mainMenu },
  { id: 'screen-editor-menu', instance: editorMenu },
  { id: 'screen-editor', instance: levelEditor },
  { id: 'screen-game', instance: gameScreen }
]);

// -------------------------
// Bottom Navigation
// -------------------------
document.querySelectorAll<HTMLButtonElement>('#bottom-nav .nav-button')
  .forEach(button => {
    button.addEventListener('click', () => {
      const target = button.dataset.target;
      if (target) screenManager.showScreen(target);
    });
  });

// -------------------------
// Main Menu: Arrow Selection
// -------------------------
mainMenu.setup();

// -------------------------
// Editor Menu: Create Level
// -------------------------
editorMenu.setup(screenManager, levelEditor);

// -------------------------
// Level Editor: Tool selection
// -------------------------
levelEditor.setup();

// -------------------------
// Game Screen: Reset button
// -------------------------
gameScreen.setup(screenManager);
