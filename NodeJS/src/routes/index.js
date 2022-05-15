const productrouter=require('./product')

function route(app){

    app.use('/product',productrouter);

    app.get('/', (req, res) => {
      res.render('home');
    })

    app.get('/detail', (req, res) => {
      res.render('detail');
    })


}
module.exports = route;