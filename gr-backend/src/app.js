import express from 'express';
import bodyParser from 'body-parser'

const app = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

app.listen(3030);
console.log('app running on port 3030');