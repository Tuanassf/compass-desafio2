const bodyParser = require('body-parser')
const wallets = require('./walletRoutes') 

module.exports = app => {
    app.use(bodyParser.json())
    app.use(wallets)
       
}