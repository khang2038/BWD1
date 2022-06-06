const express = require('express')
const path=require('path')
const handlebars=require('express-handlebars');
var methodOverride = require('method-override')
const app = express()
const route=require('./routes')
const port = 3000


const db=require('./config/db');

db.connect();

app.use(express.static(path.join(__dirname, 'public')))

app.use(express.urlencoded({ 
    extended:true
}));
app.use(express.json());

app.use(methodOverride('_method'));

app.engine('hbs',handlebars.engine({
      extname:'.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})