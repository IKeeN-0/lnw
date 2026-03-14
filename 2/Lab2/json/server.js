const express = require('express');
const BookSerializer = require('./serializers/book.serializer'); 
const app = express();

const books = [
    {id: 1, title: "A Court of Thorns and Roses", author: "Sarah J. Maas", isbn: "9781619634442"},
    {id: 2, title: "Before We Were Strangers", author: "CARLINO, RENEE", isbn: "9781668025895"},
    {id: 3, title: "Dune 1", author: "Frank Herbert", isbn: "9780441172719"},
    {id: 4, title: "The Silent Patient", author: "Alex Michaelides", isbn: "9781250301697"}
];

app.get('/api/books/:id', (req, res) => {
    let id = Number(req.params.id);
    let book = books.find(b => b.id === id);

    if(!book){
        return res.status(404).json({ message: "Book not found" });
    }

    const jsonApiData = BookSerializer.serialize(book);
  
    res.set('Content-Type', 'application/vnd.api+json');
    res.send(jsonApiData);
});

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`JSON:API Server is running on http://localhost:${PORT}`);
});