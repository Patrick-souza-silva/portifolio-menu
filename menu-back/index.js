const express = require("express");
const cors = require("cors");
const { db } = require("./firebase");
const { doc, setDoc } = require("firebase/firestore");

const app = express();
app.use(cors());
app.use(express.json()); // para entender JSON

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

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`menu-back rodando na porta ${PORT}`);
});
