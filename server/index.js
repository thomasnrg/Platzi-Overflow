import http from 'http'
import Debug from 'debug'

const PORT = 3000
const debug = new Debug('platzi-overflow:root')

const app = http.createServer((req, res) => {
  debug('new request')
  res.writeHead(200, { 'content-Type': 'text/plain' })
  res.write('Hola desde Platzi Overflow')
  res.end()
})

app.listen(PORT, () => {
  debug(`server running at port ${PORT}`);
})
