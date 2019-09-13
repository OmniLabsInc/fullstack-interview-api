const app = require('./server.js')

// default the port to 8080
const PORT = 8080

// start the app on specified port
app.listen(PORT, () => {
  console.log(`Started on port ${PORT}`)
})
