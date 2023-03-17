// import { createUserWithEmailAndPassword } from 'firebase/auth';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { createUserWithEmail } from '../../src/firebase/auth';
import auth from '../../src/firebase/app';

jest.mock('firebase/auth');

describe('createUserWithEmail', () => {
  test('cria usuário com email e senha', () => {
    const email = 'teste@teste.com';
    const password = 'senha123';
    const userCredentialMock = { user: { email } };
    const createUserWithEmailAndPasswordMock = jest.fn().mockResolvedValue(userCredentialMock);

    createUserWithEmailAndPassword.mockImplementation(createUserWithEmailAndPasswordMock);

    return createUserWithEmail(email, password).then((result) => {
      expect(createUserWithEmailAndPasswordMock).toHaveBeenCalledWith(auth, email, password);
      expect(result).toEqual(true);
      /* expect(console.log).toHaveBeenCalledWith('email-criado');
      expect(console.log).toHaveBeenCalledWith('Processo de cadastro finalizado');
      expect(console.log).not.toHaveBeenCalledWith('email-nao-criado'); */
    });
  });
});

/*
função da aline
describe('create user with email', () => {
/*   it('should be a function', () => {
    expect(typeof createUserWithEmail).toBe('function');
  }); */

/*   it('should create a new user with an email account', () => {
    const newUser = {
      email: 'teste@teste.com',
      password: '123456',
    };
    return expect(createUserWithEmail()).resolves.toBe(newUser);
  });

  it('in case to return an error', () => expect(createUserWithEmail()).rejects.toMatch('error'));
}); */

/* jest.mock('../../src/firebase/auth', () => ({ createUserWithEmail: jest.fn(() => true) }));

describe('create user with email', () => {
  it('should create a new user with an email account', () => {
    const newUser = createUserWithEmail('teste@teste.com', '123456');
    return expect(newUser).resolves.toEqual(newUser);
  });
});

it('in case to return an error', () => expect(createUserWithEmail()).rejects.toEqual('error'));
 */

/* jest.mock('../../src/firebase/auth', () => ({
  getAuth: jest.fn(),
  createUserWithEmail: jest.fn(),
}));

describe('creatUserWithEmail', () => {
  it('deve criar um usuário', () => {
    createUserWithEmail.mockResolvedValue({
      user: {},
    });
    createUserWithEmail('teste@teste.com', '123456');
    expect(createUserWithEmail).toHaveBeenCalledTimes(1);
  });
}); */

/* test('my test, async', async () => {
  const myAsyncFunction = createUserWithEmail.default;
  const result = await myAsyncFunction();
  expect(result).toEqual('Mocked Result');
}); */
