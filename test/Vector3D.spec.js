import Vector3D from '../src/Vector3D';

describe('Vector3D', () => {

  it('should be initialized with x, y, z components', () => {
  	const vector = new Vector3D(1, 2, 3);
    expect(vector.x).toEqual(1.0);
    expect(vector.y).toEqual(2.0);
    expect(vector.z).toEqual(3.0);
  });

  it('should have a length', () => {
    const vector = new Vector3D(1, 2, 3);
    expect(vector.length()).toEqual(3.7416573867739413);
  });

});
