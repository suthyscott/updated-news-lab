import express from 'express';
import ViteExpress from 'vite-express';
import jsonArticles from "./articles.json" assert { type: "json" };

const app = express();
ViteExpress.config({ printViteDevServerHost: true });

const delay = 500;

app.get('/api/hacker-news', (req, res) => {
  setTimeout(() => {
    res.status(200).send(jsonArticles.hackerNews);
  }, delay);
});
app.get('/api/medium', (req, res) => {
  setTimeout(() => {
    res.status(200).send(jsonArticles.medium);
  }, delay);
});
app.get('/api/reddit', (req, res) => {
  console.log('hit')
  setTimeout(() => {
    res.status(200).send(jsonArticles.reddit);
  }, delay);
});

const port = process.env.PORT || 8080;
ViteExpress.listen(app, port, () => console.log(`Server is listening http://localhost:${port}`));
