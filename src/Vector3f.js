/**
* Represents a three-component vector.
*/
class Vector3f {

  static add(v1, v2) {
    return new Vector3f(
      v1.x + v2.x,
      v1.y + v2.y,
      v1.z + v2.z)
    ;
  }

  /**
  * Calculates the sum of the provided `...vectors`
  * @static
  * @param {Array} ...vectors - The vectors to sum (spread)
  * @return {Vector3f} A new vector representing the sum of the set.
  */
  static sum(...vectors) {
    let x=0, y=0, z=0;
    vectors.forEach((vector) => {
      x += vector.x;
      y += vector.y;
      z += vector.z;
    });
    return new Vector3f(x, y, z);
  }

  /**
  * Create a Vector3f.
  * @param {number} x - The x value.
  * @param {number} y - The y value.
  * @param {number} z - The z value.
  */
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  /**
  * Calculate the vector's magnitude (length).
  * @return {number} x - The vector's magnitude.
  */
  magnitude() {
    return Math.sqrt(
      this.x * this.x +
      this.y * this.y +
      this.z * this.z
    );
  }

  /**
  * Normalize the vector.
  */
  normalize() {
    const magnitude = this.magnitude();
    this.x /= magnitude;
    this.y /= magnitude;
    this.z /= magnitude;
  }

}

export default Vector3f;
