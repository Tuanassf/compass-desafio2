const { Router }  = require('express')
const transactionsController = require ('../controllers/transactionsController')

const router = Router()

router.get('/wallet/:adress/transaction', transactionsController.getOneTransaction)


module.exports = router