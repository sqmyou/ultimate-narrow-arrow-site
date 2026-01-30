// =========================
// Vector2.ts
// Simple 2D vector class
// =========================

export class Vector2 {
  constructor(public x: number, public y: number) {}

  add(v: Vector2): Vector2 {
    return new Vector2(this.x + v.x, this.y + v.y);
  }

  subtract(v: Vector2): Vector2 {
    return new Vector2(this.x - v.x, this.y - v.y);
  }

  scale(f: number): Vector2 {
    return new Vector2(this.x * f, this.y * f);
  }

  clone(): Vector2 {
    return new Vector2(this.x, this.y);
  }
}
