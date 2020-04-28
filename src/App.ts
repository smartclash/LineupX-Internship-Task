import * as path from 'path';
import * as dotenv from 'dotenv';
import routes from './App/Routes';
import * as express from 'express';
import * as session from 'express-session';

if (process.env.NODE_ENV !== 'production') {
    dotenv.config();
}

const app: express.Application = express();

app.set('views', path.join(__dirname, '/../src/Resources/views'));
app.set('view engine', 'pug');

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
}));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

app.listen(process.env.APP_PORT, () => {
    console.log('Listening on port', process.env.APP_PORT);
});
