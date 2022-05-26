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
const createrouter=require('./create')
const storerouter=require('./store')
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

    app.use('/home',homerouter)
    app.use('/detail',detailrouter)
    app.use('/login',loginrouter)
    app.use('/signup',signuprouter)
    app.use('/Ai',Airouter)
    app.use('/App',Approuter)
    app.use('/costume',costumerouter)
    app.use('/ecommerce',ecommercerouter)
    app.use('/Game',Gamerouter)
    app.use('/donate',donaterouter)
    app.use('/create',createrouter)
    app.use('/store',storerouter)
}

module.exports = route;