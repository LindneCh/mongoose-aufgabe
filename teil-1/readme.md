# Mongoose Aufgabe

## Einführung

Lese die [Mongoose](https://mongoosejs.com/docs/guide.html) Dokumentation, um zu verstehen, was die einzelnen Bestandteile der Datei `author.js` bewirken.

Das "Author"-Schema hat verschiedene Felder und virtuelle Felder. Deine Aufgabe ist es, zu erkunden, wie sie funktionieren und warum sie in dieser Datei verwendet werden.

## Aufgabenstellung

1. Beschreibe, was das `Schema` in Mongoose ist und wie es in dieser Datei verwendet wird.
2. Untersuche die einzelnen Felder im `AuthorSchema`. Was bedeuten die Optionen `type`, `required` und `maxLength`?
3. Warum `type String` und nicht nur `String`? Beispiel: `name: String`, vs `first_name: { type: String,...}`
4. Was sind virtuelle Felder in Mongoose? Wie werden sie in `author.js` verwendet?
5. Was geschieht am Ende der Datei `author.js` mit `module.exports = mongoose.model("Author", AuthorSchema);`?

Am einfachsten machst du dir Notizen in der Datei `Author.js`
Schau dir die Datei `author.js` sorgfältig an und versuche, jede Zeile zu verstehen. Viel Erfolg!
