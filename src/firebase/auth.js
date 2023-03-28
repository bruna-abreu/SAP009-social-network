/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
// nosso app importado de app.js
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
// eslint-disable-next-line import/no-unresolved
} from 'firebase/auth';
import { app } from './app.js';

// import das funcoes da autenticação de usuários do arquivo js do firebase referenciado nessa url

// variável executa a funcao getAuth em cima do nosso app
// variável recebe nosso app e permite que a gente execute as funcões auth em cima do nosso app
const auth = getAuth(app);

// funcao que criamos para abrigar a funcao de criar user com email/senha (já criada pelo firebase)

export const getUserId = () => auth.currentUser.uid;

// eslint-disable-next-line max-len
export const createUserWithEmail = (name, displayName, email, password) => createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user);
    return updateProfile(user, { name, displayName });
  });

export const signIn = (email, password) => signInWithEmailAndPassword(auth, email, password);

export const loginGoogle = () => {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider);
};

export const logOut = () => signOut(auth);

export function checkLoggedUser(status) {
  return onAuthStateChanged(auth, (user) => {
    status(user !== null);
  });
}
