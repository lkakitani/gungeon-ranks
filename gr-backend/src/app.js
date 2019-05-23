import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes/rankRoutes';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

routes(app);

app.listen(3030);
console.log('app running on port 3030');