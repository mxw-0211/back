const http = require('http')
const app = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain')
  res.end('ok4')
})
app.listen(80)