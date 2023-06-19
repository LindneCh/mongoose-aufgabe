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
//export wird verwendet um Eigenschaften, Funktionen oder Objekte an
//export...das ExportObjekt an zu hängen umd es exportierbar zu machen
//export somit kann es von anderen Teilen der Anwendung importiert werden.

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
// Zuerst wird eine parallele Ausführung von zwei Datenbankabfragen 
//durchgeführt. Eine Abfrage sucht den Autor anhand der übergebenen 
//ID, die andere Abfrage sucht alle Bücher des Autors.
//die Ergebnisse werden in 1x const author und 
// 1x const allBooksByAuthor gespeichert.
//Promise.all = wird verwendet um mehrere asynchrone Operationen
//parallel auszuführen und auf ihre Ergebnisse zu warten(await). 
exports.author_detail = asyncHandler(async (req, res, next) => {
  const [author, allBooksByAuthor] = await Promise.all([
    Author.findById(req.params.id).exec(),
    Book.find({ author: req.params.id }, "title summary").exec(),
  ]);
  //**genauer erklährt: 
  //**-Promise.all() erwartet ein Array von Promises als Argument. 
  //---In diesem Fall sind es zwei Promises, die durch die Funktionen
  //--- Author.findById() und Book.find() erzeugt werden.
  //**-Die Funktion Author.findById() sucht nach einem Autor 
  //---anhand der übergebenen ID, während Book.find() alle Bücher 
  //---des Autors basierend auf der Autor-ID sucht.
  //**-Mit Promise.all() werden beide Promises parallel ausgeführt 
  //---und es wird auf die Auflösung aller Promises gewartet.
  //**-Wenn alle Promises erfüllt sind, gibt Promise.all() ein Array 
  //---zurück, das die Ergebnisse in der Reihenfolge der 
  //---ursprünglichen Promises enthält.
  //**-Mit Hilfe der 
  //---Array-Destrukturierung (const [author, allBooksByAuthor] = ...) 
  //---werden die Ergebnisse den entsprechenden Variablen author 
  //---und allBooksByAuthor zugewiesen.

  //wenn kein Author gefunden wird komme die Fehlermeldung
  // Error 404
  if (author === null) {
    const err = new Error("Author not found");
    err.status = 404;
    return next(err);
  }
//hier wird  author_detail" gerendert und an die Ansicht der Autor
//und alle Bücher des Autors übergeben.
  res.render("author_detail", {
    title: "Author Detail",
    author: author,
    author_books: allBooksByAuthor,
  });
});
