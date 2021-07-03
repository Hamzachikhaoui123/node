const mongosse = require('mongoose') // import mongosse

const mongodb_uri = "mongodb+srv://root:root@cluster0.k60m5.mongodb.net/ecom?retryWrites=true&w=majority" //lien de serveur
const mongodb_options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}

mongosse.connect(mongodb_uri, mongodb_options)
    .then(() => console.log("we're connected to database !"))
    .catch(() => console.log("connection error!")) // connexion avec BD

module.exports = mongosse // export bech najam naaml lih import fi index .js


