import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();

// middleware
app.use(cors());
app.use(express.json())
app.use(bodyParser.json());

app.get('/', (req, res) => {
 res.send('olha mundo')
});

app.listen(5555, () => {
  console.log('aplicação rodando na porta 5555');
})