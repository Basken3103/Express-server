import express from 'express';

const app = express();

const PORT = 3000;

app.get('/api', (request, response) => {
    response.send('Hey girl!')
}); 

app.get('/error', (request, response) => {
    response.status(418).send();
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})