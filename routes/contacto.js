var express = require('express');
var router = express.Router();

/* salida de texto
router.get('/', function(req, res, next) {
  res.send('Página de contacto');
});
*/
//con render va a buscar una vista
router.get('/', function(req, res, next) {
    res.render('contacto');
});


module.exports = router;
