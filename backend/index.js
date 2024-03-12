import express from "express";
import cors from "cors";
import routes from "./src/routes/Routers.js";

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// routes

app.get("/", (req, res) => {
  res.send("estou funcionando!!!");
});

app.use("/clientes", routes.clientes);
app.use("produtos", routes.produtos);

app.listen(5555, () => {
  console.log("aplicação rodando na porta 5555");
});
