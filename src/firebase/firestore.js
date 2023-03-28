import {
  getFirestore, addDoc, collection, getDocs, doc, updateDoc, deleteDoc,
} from 'firebase/firestore';
import { app, auth } from './app';

const db = getFirestore(app);

export const createPost = (anime, episodes, description) => { //eslint-disable-line
  return addDoc(collection(db, 'posts'), {
    name: auth.currentUser.displayName,
    author: auth.currentUser.uid,
    anime,
    episodes,
    description,
  });
};

export async function accessPost() {
  const allPosts = [];
  const querySnapshot = await getDocs(collection(db, 'posts'));
  querySnapshot.forEach((post) => {
    const data = post.data();
    data.id = post.id;
    allPosts.push(data);
  });
  return allPosts;
}
/*
export async function editPost(idPost, newPost) {
  const docRef = doc(db, 'posts', idPost);
  return updateDoc(docRef, newPost);
}
*/

export const editPost = async (postId, anime, episodes, description) => {
  const post = doc(db, 'posts', postId);

  await updateDoc(post, {
    anime,
    episodes,
    description,
  });
};

export async function deletePost(idPost) {
  const docRef = doc(db, 'posts', idPost);
  return deleteDoc(docRef);
}
