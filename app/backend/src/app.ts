import * as express from 'express';

class App {
  public app: express.Express;

  constructor() {
    this.app = express();

    this.config();

    this.app.get('/teste', (req, res) => res.json({ ok: 'tudo certo' }));
  }

  private config():void {
    this.app.use(express.json());
  }

  

  public start(PORT: string | number): void {
    this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  }
}

export { App };


