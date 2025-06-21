// server.js
import { createServer } from 'https'
import next from 'next'
import { readFileSync } from 'fs'
import { parse } from 'url'

const app = next({ dev: false })
const handle = app.getRequestHandler()

const httpsOptions = {
  key:  readFileSync('./certs/privkey.pem'),
  cert: readFileSync('./certs/fullchain.pem'),
}

app.prepare().then(() => {
  createServer(httpsOptions, (req, res) => {
    const parsed = parse(req.url || '/', true)
    handle(req, res, parsed)
  }).listen(443, () => {
    console.log('✅ HTTPS running on port 443')
  })
})
