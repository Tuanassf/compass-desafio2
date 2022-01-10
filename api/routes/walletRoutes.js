const { Router }  = require('express')
const WalletController = require ('../controllers/walletController')

const router = Router()

router.get('/wallet', WalletController.getAllWallets)
router.get('/wallet/:adress', WalletController.getOneWallet)
router.post('/wallet', WalletController.createWallet)
router.delete('/wallet/:adress', WalletController.deleteWallet)

module.exports = router