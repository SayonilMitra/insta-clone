const express = require('express')
const fs = require('fs')
const cors = require('cors')
const userModel = require('./model')

const app = express()
const port = 8000

app.use(cors())
app.use(express.json({ limit: '50mb' }))

app.get('/test', cors(), (req, res) => {
    res.end('test page working')
})

app.get('/posts', cors(), (req, res) => {
    async function fetchPosts() {
        let postList = await userModel.find()
        res.end(JSON.stringify(postList))
    }

    fetchPosts()
})

app.post('/upload', (req, res) => {
    let postInfo = req.body

    async function uploadPost() {
        let newPost = new userModel(postInfo)
        await newPost.save()
        res.end()
    }
    uploadPost()

})

/* app.listen(port, () => {
    console.log('Backend running')
}) */

module.exports = app