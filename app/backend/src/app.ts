import * as express from 'express';
import router from './routes';

class App {
  public app: express.Express;

  constructor() {
    this.app = express();

    this.config();

    this.routes();
    
    this.app.get('/', (req, res) => res.json({ ok: true }));
  }

  private config():void {
    

    this.app.use(express.json());
  }

  private routes(): void {
    this.app.use(router);
  }

  public start(PORT: string | number): void {
    this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  }
}

export default App


