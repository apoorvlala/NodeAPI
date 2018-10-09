var express=require('express');
var app=express();
var bodyParser=require('body-parser');
var mongoose=require('mongoose');

app.use(bodyParser.json());

var Genre=require('./models/genre');
var Book=require('./models/book');

//connect to mongoose
mongoose.connect('mongodb://localhost/test',{ useNewUrlParser: true });
var db=mongoose.connection;

app.get('/',(req ,res)=>{
    res.send('Please use /api/books or /api/types');
});

//Get all genres
app.get('/api/genres',(req,res)=>{
    Genre.getGenres((err,genres)=>{
        if(err)throw err;
        res.json(genres);
    });
});

//Add Genre
app.post('/api/genres',(req,res)=>{
    var genre=req.body;
    Genre.addGenres(genre,(err,genre)=>{
        if(err)throw err;
        res.json(genre);
    });
});

//Update Genre
app.put('/api/genres/:id',(req,res)=>{
    var id=req.params.id;//console.log(id);
    var genre=req.body;//console.log(genre);
    Genre.updateGenre(id,genre,{},(err,genre)=>{
        if(err)throw err;
        res.json(genre);
    });
});

//update Book
app.put('/api/books/:id',(req,res)=>{
    var id=req.params.id;
    var book=req.body;
    Book.updateBook(id,book,{},(err,book)=>{
        if(err)throw err;
        res.json(book);
    });
});

//Add Books
app.post('/api/books',(req,res)=>{
    var book=req.body;console.log(book);
    Book.addBooks(book,(err,book)=>{
        if(err)throw err;
        res.json(book);
    });
});

// Get all Books
app.get('/api/books',(req,res)=>{
    Book.getBooks((err,books)=>{
        if(err)throw err;
        res.json(books);
    });
});

//Get Book By ID
app.get('/api/book/:id',(req ,res)=>{
    Book.getBookById(req.params.id,(err,book)=>{
        if(err)throw err;
        res.json(book);
    });
});

//Delete Genres
app.delete('/api/genres/:id',(req,res)=>{
    var id=req.params.id;
    Genre.removeGenre(id,(err,genre)=>{
        if(err)throw err;
        res.json(genre);
    });
});

//Delete Book
app.delete('/api/book/:id',(req,res)=>{
    var id=req.params.id;
    Book.removeBook(id,(err,book)=>{
        if(err)throw err;
        res.json(book);
    });
});

app.listen(3000);
console.log('Running on port 3000');