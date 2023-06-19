const mongoose = require('mongoose');

//VerkaufsSchema
const VerkaufSchema = new Schema({
    schrauben_typ: { type: String, required: true, maxLength: 100 },
    verkaufsdatum: { type: Date },
    menge: { type: Number },
    preis_pro_einheit: { type: Number },
    produkt_id: {type: String, required: true, maxLength: 10}
  });



//VerkaufsSchema Gesamtpreis
VerkaufSchema.virtual("gesamtpreis").get(function () {
    return this.menge * this.preis_pro_einheit;
  });


//stehen lassen, sonst wird der Gesamtpreis nicht angezeigt im request
VerkaufSchema.set('toObject', { virtuals: true });
VerkaufSchema.set('toJSON', { virtuals: true });

const schraubenModel = mongoose.model('Schraube', VerkaufSchema, 'schrauben');

module.exports = schraubenModel;
