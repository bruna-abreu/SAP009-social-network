import { createUserWithEmail } from '../src/firebase/auth';

describe('create user with email', () => {
  it('should be an object', () => {
    expect(typeof createUserWithEmail).toBe('function');
  });
});
