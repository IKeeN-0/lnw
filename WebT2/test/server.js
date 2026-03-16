const express = require("express")
const app = express()

app.use(express.json())

const book_shelf = [
    {id: 1,name: "Ikeen", book: "Ikeen", author: "Ikken"},
    {id: 2,name: "Ifew", book: "Ifew", author: "Ifew"}
]

app.get("/test", (req, res) =>{
    res.status(200).json({message: "Hello"})
})

app.post("/add-book", (req, res)=>{
    const {name, book, author} = req.query
    console.log(name , book, author)
    res.status(200).json({message: "success"})
})

app.get("/book/:id", (req, res) =>{
    const {id} = req.params
    const number = parseInt(id)
    const books = [...book_shelf]
    const bookID = books.filter(b => b.id === number)

    res.status(200).json({message :"success", Book_id: bookID})
})

app.put("/fix-book", (req,res) =>{
    const block = req.body
    const books = [...book_shelf] 

    books.push(block)

    res.status(201).json({message: "success", new_shelf: books})

})

app.delete("/book/:id", (req, res) =>{
    const {id} = req.params
    const number = parseInt(id)
    const books = [...book_shelf]
    const bookidx = books.findIndex(b=>b.id == number)
    books.splice(bookidx, 1)
    console.log(books)
    res.status(204).json({message: "success", book: books})
})


app.listen(3000, ()=>{
    console.log("Server is running...")
})