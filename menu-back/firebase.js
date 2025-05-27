const express = require("express");
const cors = require("cors");
const { initializeApp } = require("firebase/app");
const { getFirestore, doc, setDoc, getDoc, collection, query, where, getDocs } = require("firebase/firestore");

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDjpcIKg0fLJ_hl2k4V0Wx7XHglnN3L28o",
  authDomain: "menu-3b46d.firebaseapp.com",
  projectId: "menu-3b46d",
  storageBucket: "menu-3b46d.appspot.com",
  messagingSenderId: "760835552568",
  appId: "1:760835552568:web:33242b76dd953da9777dcd",
  measurementId: "G-THW15ZS3CW"
};

// Inicializa o app Firebase
const appFirebase = initializeApp(firebaseConfig);
const db = getFirestore(appFirebase);

// Configuração do servidor Express
const app = express();
app.use(cors());
app.use(express.json());

// Rota para curtir (POST)
app.post("/like", async (req, res) => {
  const { userId, productId } = req.body;

  if (!userId || !productId) {
    return res.status(400).json({ error: "Missing userId or productId" });
  }

  try {
    await setDoc(doc(db, "likes", `${userId}_${productId}`), {
      userId,
      productId,
      likedAt: new Date()
    });
    res.status(200).json({ message: "Liked successfully!" });
  } catch (error) {
    console.error("Error liking product:", error);
    res.status(500).json({ error: "Failed to like product" });
  }
});

// Rota para buscar status da curtida e contagem (GET)
app.get("/like", async (req, res) => {
  const { userId, productId } = req.query;

  if (!userId || !productId) {
    return res.status(400).json({ error: "Missing userId or productId" });
  }

  try {
    // Verifica se o usuário curtiu
    const likeDoc = await getDoc(doc(db, "likes", `${userId}_${productId}`));
    const likedByUser = likeDoc.exists();

    // Conta quantas curtidas o produto tem
    const likesQuery = query(collection(db, "likes"), where("productId", "==", productId));
    const likesSnapshot = await getDocs(likesQuery);
    const likesCount = likesSnapshot.size;

    res.status(200).json({ likedByUser, likesCount });
  } catch (error) {
    console.error("Error fetching like data:", error);
    res.status(500).json({ error: "Failed to fetch like data" });
  }
});

// Inicia o servidor
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`menu-back rodando na porta ${PORT}`);
});
