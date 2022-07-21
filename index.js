import express from "express";
import Dicas from "./src/controllers/Dicas.js";

const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Servidor rodando com sucesso em http://localhost:${port}`)
})

app.use(express.json());

Dicas.rotas(app);