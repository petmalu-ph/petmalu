import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

// local modules
import config from './config';

// interfaces
import Controller from './interfaces/controller.interface';

class App {
    public app: express.Application;

    private origin: string;

    constructor(controllers: Controller[]) {

        this.app = express();
        
        this.origin = config.origin;

        this.initializeMiddlewares();
        this.initializeControllers(controllers);
    }

    public listen() {
        this.app.listen(process.env.PORT || config.port, () => {
            console.log(`Server is running on Port ${config.port}`)
        })
    }

    private initializeMiddlewares() {
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(express.json());
        this.app.use(helmet());
        this.app.use(cors({ origin: this.origin, credentials: true }))
    }

    private initializeControllers(controllers: Controller[]) {
        controllers.forEach((controller) => {
            this.app.use('/', controller.router);
        })
    }
}

export default App;