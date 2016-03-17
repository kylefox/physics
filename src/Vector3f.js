export default class Vector3f {

  static add(v1, v2) {
    return new Vector3f(
      v1.x + v2.x,
      v1.y + v2.y,
      v1.z + v2.z)
    ;
  }

  static sum(...vectors) {
    let x=0, y=0, z=0;
    vectors.forEach((vector) => {
      x += vector.x;
      y += vector.y;
      z += vector.z;
    });
    return new Vector3f(x, y, z);
  }

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
