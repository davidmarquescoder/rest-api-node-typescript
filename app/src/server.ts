import express from 'express';
import routes from './routes/products.routes';
import path from 'path';
import cors from 'cors';


class Server{
    app: express.Application;

    constructor(EnablePermission: boolean, portServer: number, statusMessage: string){

        this.app = express();

        if (EnablePermission === true){this.PermissionAccess()}
        this.Settings()
        this.EndPoints()        

        this.ServerUp(portServer, statusMessage)
    }

    Settings(){
        this.app.use(express.json())
    }

    EndPoints(){
        this.app.use(routes)
    }

    ServerUp(portServer: number, statusMessage: string){
        this.app.listen(portServer, () => {return console.log(statusMessage);})
    }

    PermissionAccess(){
        this.app.use((req, res, next) => {
            res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
            res.header('Access-Control-Allow-Headers', 'Content-Type');
            this.app.use(cors());
            next();
        });
    }
}


new Server(true, 3333, '📌 Backend started on port 3333 👌')