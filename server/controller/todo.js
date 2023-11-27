const createHttpError = require("http-errors")

// 
const todo = async (req, res, next)=>{
    try {
        
    } catch(error){
        next (createHttpError(error))
    }
}

module.exports = {
    
}