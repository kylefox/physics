import Vector3f from '../src/Vector3f';

describe('Vector3f', () => {

  it('should be initialized with x, y, z components', () => {
  	const vector = new Vector3f(1, 2, 3);
    expect(vector.x).toEqual(1.0);
    expect(vector.y).toEqual(2.0);
    expect(vector.z).toEqual(3.0);
  });

  it('should have a magnitude (length)', () => {
    const vector = new Vector3f(1, 2, 3);
    expect(vector.magnitude()).toEqual(3.7416573867739413);
  });

  it('can be normalized', () => {
    const vector = new Vector3f(1, 2, 3);
    vector.normalize();
    expect(vector.magnitude()).toEqual(1.0);
  });

});
