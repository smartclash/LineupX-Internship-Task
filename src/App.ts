import * as express from 'express';
import * as dotenv from 'dotenv';

if (process.env.NODE_ENV !== 'production') {
    dotenv.config();
}

const app: express.Application = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(process.env.APP_PORT, () => {
    console.log('Listening on port', process.env.APP_PORT);
});
