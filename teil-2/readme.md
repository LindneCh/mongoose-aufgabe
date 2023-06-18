# Mongoose Aufgabe - Teil 2

## Einführung

Im zweiten Teil dieser Aufgabe ist es dein Ziel, die Verwendung des "Author"-Modells in der Datei `authorController.js` zu verstehen. Lese in der passenden Dokumentation nach, um den Code besser zu verstehen.

## Aufgabenstellung

1. Erkläre den Zweck der `require`-Anweisungen zu Beginn der Datei `authorController.js`.
2. Was sind `exports` in Node.js und wofür werden sie in `authorController.js` verwendet?
3. Was macht die Funktion `asyncHandler` und warum wird sie hier verwendet?
4. Untersuche die Funktion `author_list`. Was passiert in dieser Funktion und warum wird `res.render` verwendet?
5. In der Funktion `author_detail` wird `Promise.all` verwendet. Erkläre, was `Promise.all` tut und warum es in diesem Kontext nützlich ist.
6. Was geschieht, wenn `author === null` und warum wird ein Fehler mit dem Statuscode 404 geworfen?
7. Wie werden die Ergebnisse von `Author.findById(req.params.id).exec()` und `Book.find({ author: req.params.id }, "title summary").exec()` in `author_detail` genutzt?

Schau dir die Datei `authorController.js` sorgfältig an und versuche, jede Zeile zu verstehen. Viel Erfolg!