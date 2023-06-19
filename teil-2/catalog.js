//hier werden express importiert und ein Router erstellt.
//Der Router wird verwendet, um die Routen für die Autor-function zu
//definieren. 
const express = require("express");
const router = express.Router();

// Require our controllers.
//author_controller wird aus der Datei "authorController.js" importiert
const author_controller = require("../controllers/authorController");


/// AUTHOR ROUTES ///


//eine Route mit dem pfad "/author/:id" id steht für den Parameter der Id
//des Authors. Anfrage wird an Route gesendet -> author-controller wird 
//aufgerufen und die funktion "author-detail" wird ausgeführt.
router.get("/author/:id", author_controller.author_detail);

//eine Route wird definiert, also nimm (get) route mit 
//dem pfad:"/authors". Wird eine Anfrage an diese Route gesendet, 
//wird der Author_controller aufgerufen und die Funktion "author_list" ausführt.
router.get("/authors", author_controller.author_list);

//hier wird Route exportiert, somit können andere Teile der Anwendung
//zb.: Autor-Funktionen, auf die definierten Routen zugreifen.
module.exports = router;
