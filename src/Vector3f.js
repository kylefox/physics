export default class Vector3f {

  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  magnitude() {
    return Math.sqrt(
      this.x * this.x +
      this.y * this.y +
      this.z * this.z
    );
  }

  normalize() {
    const magnitude = this.magnitude();
    this.x /= magnitude;
    this.y /= magnitude;
    this.z /= magnitude;
  }

}
