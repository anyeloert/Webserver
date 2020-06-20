const express = require('express')
const app = express()
var hbs = require('hbs');

const port = process.env.PORT || 3000;
 
app.use(express.static(__dirname + '/public'))

//helpers

hbs.registerHelper('getAno',  () => {
    return new Date().getFullYear()
});

hbs.registerPartials(__dirname + '/views/partials');


app.set('view engine', 'hbs');

app.get('/',  (req, res) => {
  
    res.render('home', {
        nombre: 'Anyelo'
    })
})
app.get('/about',  (req, res) => {
  
    res.render('about')
})
 
app.listen(port, () => {
    console.log(`escuchando por el puerto ${port}`);
})