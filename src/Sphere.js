export default class SphereCollider {

  constructor(center, radius) {
    this.center = center;
    this.radius = radius;
  }

  intersection(other) {
    const radiusDistance = this.radius + other.radius;
    const centerDistance = other.center - this.center;

    return {
      intersecting: centerDistance < radiusDistance,
      distance: centerDistance - radiusDistance
    };
  }

}
