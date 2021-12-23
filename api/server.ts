import express from 'express';

const app = express();
const PORT = 3001;

app.get('/', (req, res) => res.send('Express + TypeScript server'));

app.listen(PORT, () => {
    console.log(`Running on port ${PORT}.`)
});