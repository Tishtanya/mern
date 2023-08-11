import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT || 5001;

const app = express();

app.get('/', (req, res) => res.send('Server is ready'));

app.listen(port, () => console.log(`server started on port ${port}`));