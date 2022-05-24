const productrouter=require('./product')
const detailrouter=require('./detail')

function route(app){

    app.use('/product',productrouter);

    app.get('/', (req, res) => {
      res.render('home',{
          title: 'Home',
          style:'stylehome.css',
          style2:'responsivehome.css'
      });
    })

    app.get('/detail',detailrouter)


}
module.exports = route;