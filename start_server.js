const app = require('./src/server/app.js')
const port = 8000

app.listen(port, () => {
    console.log('Backend running')
})