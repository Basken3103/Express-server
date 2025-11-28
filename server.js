import express from 'express';
import { readFileSync } from 'fs';

const app = express();

const PORT = 3000;

const errorImage = readFileSync('./images/no-coffee.svg');

app.get('/api', (request, response) => {
    response.send('Hey girl!')
}); 

app.get('/error', (request, response) => {
    response
    .status(418)
    .type('image/svg+xml')
    .send(errorImage);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})