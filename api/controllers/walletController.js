const dataBase = require('../models')

class WalletController{
    static async getAllWallets(req, res){
        try {
            const allWallets = await dataBase.wallet.findAll()
            return res.status(200).json(allWallets)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    static async getOneWallet(req, res){
        const {adress} = req.params
        try {
            const oneWallet = await dataBase.wallet.findOne({where:{adress:Number(adress)}})
            return res.status(200).json(oneWallet)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    static async createWallet(req, res){
        const newWallet = req.body
        try {
            const newWalletCreated = await dataBase.wallet.create(newWallet)
            return res.status(200).json(newWalletCreated)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    static async deleteWallet(req, res){
        const {adress} = req.params
        try {
            await dataBase.wallet.destroy({where:{adress:Number(adress)}})
            return res.status(204).json()
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    
}

module.exports = WalletController