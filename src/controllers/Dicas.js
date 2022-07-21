import ModelsDica from "../models/ModelsDica.js";
import MetodosDatabase from "../utils/MetodosDatabase.js";

class Dicas{
    static rotas(app) {
        app.get("/tips", (req,res) => {
            const resposta = MetodosDatabase.devolveDica();
            res.status(200).json(resposta);
        })

        app.post("/create", (req,res) => {
            const dica = new ModelsDica(...Object.values(req.body));
            const resposta = MetodosDatabase.adicionarDica(dica);
            res.status(201).json(resposta)
        })
    }
}

export default Dicas;