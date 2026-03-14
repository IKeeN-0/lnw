const express = require('express');  
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const path = require('path');
const app = express();  
const port = 8000;  

app.use(express.json()); 
const swaggerDocument = YAML.load(path.join(__dirname, 'swagger.yaml'));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

let books = [
    {id: 1, name: "A Court of Thorns and Roses", genres: "Fantasy", price: 360, stock: 10},
    {id: 2, name: "Before We Were Strangers", genres: "Romance", price: 455, stock: 9},
    {id: 3, name: "Dune1", genres: "Sci-Fi", price: 300, stock: 11},
    {id: 4, name: "The Silent Patient", genres: "Thriller", price: 380, stock: 10},
    {id: 5, name: "Mexican Gothic", genres: "Horror", price: 450, stock: 18},
    {id: 6, name: "Empire of Pain", genres: "Historical", price: 445, stock: 9},
    {id: 7, name: "The Only Good Indians", genres: "Horror", price: 400, stock: 9},
    {id: 8, name: "The Hobbit", genres: "Fantasy", price: 320, stock: 6},
    {id: 9, name: "One of Us Is Lying", genres: "YA", price: 350, stock: 10},
    {id: 10, name: "Happy Place", genres: "Romance", price: 570, stock: 7}
];
let counter = 11; 

app.get('/books', (req, res) =>{
    let {name, sortBy, order} = req.query;
    let filteredBooks = [...books];

    if(name){
        filteredBooks = filteredBooks.filter(b => 
            b.name.toLowerCase().includes(name.toLowerCase())
        );
    }

    if(sortBy){
        filteredBooks.sort((a, b) =>{
            let valA = a[sortBy];
            let valB = b[sortBy];
            
            if (order === 'desc'){
                return valA < valB ? 1 : -1;
            } else {
                return valA > valB ? 1 : -1;
            }
        });
    }

   const bookList = filteredBooks.map(book =>({
        id: book.id,
        name: book.name,
        genres: book.genres,
        priceDisplay: `฿${book.price}`
    }));

    res.json(bookList);
});

app.post('/books', (req, res) =>{ 
    let book = req.body;

    if(!book.name || !book.price){
        return res.status(400).json({ message: "Name and Price are required" });
    }

    book.id = counter++;
    books.push(book);

    res.status(201).json({  
        message: "Book added to inventory",
        data: book
    });
});

app.get('/books/:id', (req, res) =>{
    let id = Number(req.params.id);
    let book = books.find(b => b.id === id);

    if(!book){
        return res.status(404).json({ message: "Book not found" });
    }
    res.json(book);
});

app.put('/books/:id', (req, res) =>{
    let id = Number(req.params.id);
    let updateData = req.body;
    let index = books.findIndex(b => b.id === id);

    if(index === -1){
        return res.status(404).json({message: "Book not found" });
    }

    books[index].name = updateData.name || books[index].name;
    books[index].genres = updateData.genres || books[index].genres;
    books[index].price = updateData.price || books[index].price;
    books[index].stock = updateData.stock || books[index].stock;

    res.json({
        message: "Update book complete",
        data: books[index]
    });
});

app.delete('/books/:id', (req, res) =>{
    let id = Number(req.params.id);
    let index = books.findIndex(b => b.id === id);

    if(index === -1){
        return res.status(404).json({message: "Book not found" });
    }

    books.splice(index, 1);

    res.status(204).json({
        message: "Deleted book from inventory successfully",
        indexDeleted: index
    });
});

app.listen(port, () =>{
    console.log(`Book Management API & Docs is running:`);
    console.log(`- API: http://localhost:${port}`);
    console.log(`- Docs: http://localhost:${port}/api-docs`);
});