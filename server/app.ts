import * as dotenv from 'dotenv';
import * as express from 'express';
import * as morgan from 'morgan';
import * as path from 'path';

import { setMongo } from './mongo';
import { setRoutes } from './routes';

const app = express();
dotenv.config();
const port = 3000;
app.set('port', process.env.PORT || port);
app.use('/', express.static(path.join(__dirname, '../public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
if (process.env.NODE_ENV !== 'test') {
  app.use(morgan('dev'));
}

async function main() {
  try {
    await setMongo();
    setRoutes(app);
    if (!module.parent) {
      app.listen(app.get('port'), () => console.log(`Pubg listening on port ${app.get('port')}`));
    }
  } catch (err) {
    console.error(err);
  }
}

main()
  .then(() => console.log('app connected'))
  .catch(error => console.log(error));

export { app };
