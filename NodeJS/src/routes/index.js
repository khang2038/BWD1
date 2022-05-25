const productrouter=require('./product')
const detailrouter=require('./detail')
const loginrouter=require('./login')
const homerouter=require('./home')
function route(app){

    app.use('/product',productrouter);

    app.get('/', (req, res) => {
      res.render('home',{
          title: 'Home',
          style:'stylehome.css',
          style2:'responsivehome.css'
      });
    })

    app.get('/home',homerouter)
    app.get('/detail',detailrouter)
    app.get('/login',loginrouter)


}
module.exports = route;