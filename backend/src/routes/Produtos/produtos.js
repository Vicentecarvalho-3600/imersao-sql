import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Rota principal clientes");
});

router.get("/porid", (req, res) => {
  res.send("Rota por id 10");
});

export default router;
