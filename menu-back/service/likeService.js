const { doc, getDoc, setDoc, deleteDoc, collection, query, where, getDocs } = require("firebase/firestore");
const { db } = require("../firebase");

// Marca que o usuário curtiu um produto
async function likeProduct(productId, userId) {
  const docRef = doc(db, "likes", `${productId}_${userId}`);
  await setDoc(docRef, { productId, userId });
}

// Remove o "curtir" de um produto
async function unlikeProduct(productId, userId) {
  const docRef = doc(db, "likes", `${productId}_${userId}`);
  await deleteDoc(docRef);
}

// Verifica se o usuário curtiu o produto
async function checkIfLiked(productId, userId) {
  const docRef = doc(db, "likes", `${productId}_${userId}`);
  const docSnap = await getDoc(docRef);
  return docSnap.exists();
}

// Conta quantos likes um produto tem
async function countLikes(productId) {
  const q = query(collection(db, "likes"), where("productId", "==", productId));
  const querySnapshot = await getDocs(q);
  return querySnapshot.size;
}

module.exports = {
  likeProduct,
  unlikeProduct,
  checkIfLiked,
  countLikes,
};
