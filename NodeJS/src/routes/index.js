const productrouter=require('./product')
const detailrouter=require('./detail')
const loginrouter=require('./login')
const signuprouter=require('./signup')
const Airouter=require('./Ai')
const homerouter=require('./home')
const Approuter=require('./App')
const costumerouter=require('./costume')
const ecommercerouter=require('./ecommerce')
const Gamerouter=require('./Game')
const donaterouter=require('./donate')
function route(app){

    app.use('/product',productrouter);


    app.get('/homepage', (req, res) => {
      res.render('home',{
          title: 'Home',
          style:'stylehome.css',
          style2:'responsivehome.css',
          script1:'homepage.js',
          script2:'https://code.jquery.com/jquery-3.6.0.js'
      });
    })
     app.get('/', (req, res) => {
      res.render('home',{
          title: 'Home',
          style:'stylehome.css',
          style2:'responsivehome.css',
          script1:'homepage.js',
          script2:'https://code.jquery.com/jquery-3.6.0.js'
      });
    })

    app.get('/home',homerouter)
    app.get('/detail',detailrouter)
    app.get('/login',loginrouter)
    app.get('/signup',signuprouter)
    app.get('/Ai',Airouter)
    app.get('/App',Approuter)
    app.get('/costume',costumerouter)
    app.get('/ecommerce',ecommercerouter)
    app.get('/Game',Gamerouter)
    app.get('/donate',donaterouter)
}

module.exports = route;