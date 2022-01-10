const dataBase = require('../models')

class transactionsController{
    static async getOneTransaction(req, res){
        const {adress} = req.params
        try {
            const oneTransaction = await dataBase.transactions.findOne({where:{adress:Number(adress)}})
            return res.status(200).json(oneTransaction)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = transactionsController