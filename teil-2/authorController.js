//hier wird das Model "author"importiert
const Author = require("../models/author");
// hier wird das Model "book" importiert
const Book = require("../models/book");
//Schema definiert Struktur und Verhalten der Datenbankobjekte
//Model definiert 

//hier wird eine Funktion namens asyncHandler aus dem Modul
//express-asyncron-handler importiert
//asyncHandler ist ein Hilfsprogramm, das die Fehlerbehandlung für 
//asynchrone Express-Middleware und Routenfunktionen erleichtert.
//warten ist das
const asyncHandler = require("express-async-handler");

//???
//export stellt diesen teil fuer andere Teile der Anwendung bereit
//asyncHandler oben beschrieben
//const all Authors gibt einmal alle einträge aus und sortiert die nach
//family namen (1=aufsteigend)
//res render =
exports.author_list = asyncHandler(async (req, res, next) => {
  const allAuthors = await Author.find().sort({ family_name: 1 }).exec();
  res.render("author_list", {
    title: "Author List",
    author_list: allAuthors,
  });
});
//speichert in 1x const author und 1x const allBooksByAuthor
// await= warten
//Promise = 
exports.author_detail = asyncHandler(async (req, res, next) => {
  const [author, allBooksByAuthor] = await Promise.all([
    Author.findById(req.params.id).exec(),
    Book.find({ author: req.params.id }, "title summary").exec(),
  ]);

  //wenn kein Author gefunden wird komme die Fehlermeldung
  // Error 404
  if (author === null) {
    const err = new Error("Author not found");
    err.status = 404;
    return next(err);
  }

  res.render("author_detail", {
    title: "Author Detail",
    author: author,
    author_books: allBooksByAuthor,
  });
});
