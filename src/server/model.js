const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()
const dbLink = process.env.mongo_url

mongoose.set('strictQuery', true);

const userSchema = mongoose.Schema({
    username: String,
    location: String,
    date: String,
    description: String,
    fileData: String,
    likes: Number
})

const userModel = mongoose.model('instaclone', userSchema)

mongoose.connect(dbLink, () => {
    console.log('database connected at ' + dbLink)
}
)

module.exports = userModel