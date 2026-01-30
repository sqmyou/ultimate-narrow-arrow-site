// =========================
// ScreenManager.ts
// Handles showing/hiding screens
// =========================

export interface Screen {
  show(): void;
  hide(): void;
}

export class ScreenManager {
  private screens: Map<string, Screen>;

  constructor(screens: { id: string; instance: Screen }[]) {
    this.screens = new Map();
    screens.forEach(s => this.screens.set(s.id, s.instance));
  }

  showScreen(id: string) {
    this.screens.forEach((screen, key) => {
      if (key === id) screen.show();
      else screen.hide();
    });

    // Update bottom nav active button
    document.querySelectorAll('#bottom-nav .nav-button')
      .forEach(btn => btn.classList.toggle('active', btn.dataset.target === id));
  }
}
