import Vector3f from '../src/Vector3f';

describe('Vector3f', () => {

  describe('instances', () => {
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

  it('can add vectors', () => {
    const vector = Vector3f.add(
      new Vector3f(1, 2, 3),
      new Vector3f(2, 4, 6)
    );
    expect(vector.x).toEqual(3);
    expect(vector.y).toEqual(6);
    expect(vector.z).toEqual(9);
  });

  it('can sum an arbitrary number of vectors', () => {
    const vector = Vector3f.sum(
      new Vector3f(1, 2, 3),
      new Vector3f(2, 4, 6),
      new Vector3f(0, -5, 8),
      new Vector3f(-9, 15, 12),
    );
    expect(vector.x).toEqual(-6);
    expect(vector.y).toEqual(16);
    expect(vector.z).toEqual(29);
  });

});
