import Database from '../infra/Database.js'

class MetodosDatabase{

    static adicionarDica(dica) {
        Database.dicas.push(dica);
        return Database.dicas;
    }

    static devolveDica() {
        let randomNumber = Math.floor(Math.random() * Database.dicas.length);
        console.log(`Número gerado: ${randomNumber}`)

        if (Database.dicas.length >= 1) {
            return Database.dicas[randomNumber];
        } else {
            return Database.dicas;
        }
    }
}


export default MetodosDatabase;