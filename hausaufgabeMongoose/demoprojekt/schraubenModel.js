const mongoose = require('mongoose');

//VerkaufsSchema



//VerkaufsSchema Gesamtpreis


//stehen lassen, sonst wird der Gesamtpreis nicht angezeigt im request
VerkaufSchema.set('toObject', { virtuals: true });
VerkaufSchema.set('toJSON', { virtuals: true });

const schraubenModel = mongoose.model('Schraube', VerkaufSchema, 'schrauben');

module.exports = schraubenModel;
