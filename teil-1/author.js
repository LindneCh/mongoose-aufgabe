//require importiert das MongooseModul einer MongoDB
const mongoose = require("mongoose");
// importiert von luxon die zeit (ist eine javascript Bibliothek zur Arbeit
//mit Datum und Uhrzeit)
const { DateTime } = require("luxon");
//erstellt eine constante von mongoose.schema
const Schema = mongoose.Schema;
//kompiliert in authorschema die folgenden Daten(inhalt)
//somit haben wir ein Dokument mit autorschema erstellt
const AuthorSchema = new Schema({
  first_name: { type: String, required: true, maxLength: 100 },
  family_name: { type: String, required: true, maxLength: 100 },
  date_of_birth: { type: Date },
  date_of_death: { type: Date },
});
//Was ist AuthorSchema.virtual
//virtual ist wie eine variable wird aber jedesmal neu berechnet

//funktion mit der vollen Namen des Autors zurück gibt
AuthorSchema.virtual("name").get(function () {
  return this.family_name + ", " + this.first_name;
});
 
//virtuelle Eigenschaft namens "url" es gibt eine funktion die mittels
// id des Authors die URL wieder gibt.
AuthorSchema.virtual("url").get(function () {
  return "/catalog/author/" + this._id;
});
//hier wird eine virtuelle Eigenschaft namens "lifespan"definiert, es
//gibt eine Funktion, doie den Lebenszeitraum des Autors zurückgibt,
// indem das "date_of_birth" und "date_of_death"in einen lesbaren
//String umgewandelt werden.
AuthorSchema.virtual("lifespan").get(function () {
  let lifetime_string = "";
  if (this.date_of_birth) {
    lifetime_string = DateTime.fromJSDate(this.date_of_birth).toLocaleString(
      DateTime.DATE_MED
    );
  }
  lifetime_string += " - ";
  if (this.date_of_death) {
    lifetime_string += DateTime.fromJSDate(this.date_of_death).toLocaleString(
      DateTime.DATE_MED
    );
  }
  return lifetime_string;
});
//hier wird 1. das Geburtsdatum und 2. das Todesdatum angezeigt
AuthorSchema.virtual("date_of_birth_yyyy_mm_dd").get(function () {
  return DateTime.fromJSDate(this.date_of_birth).toISODate(); // format 'YYYY-MM-DD'
});

AuthorSchema.virtual("date_of_death_yyyy_mm_dd").get(function () {
  return DateTime.fromJSDate(this.date_of_death).toISODate(); // format 'YYYY-MM-DD'
});

// hiermit wird das Mongoose Model Author" exportiert
//somit kann dies in anderen Teilen verwendet werden.
module.exports = mongoose.model("Author", AuthorSchema);
