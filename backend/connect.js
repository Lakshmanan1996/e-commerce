const mongodb = require("mongoose")
module.exports = connect = (dbname) => { 
    return mongodb.connect(`mongodb://mongodb-svc:27017/${dbname}`) 
}
