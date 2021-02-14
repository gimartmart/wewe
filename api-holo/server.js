const express = require('express')
const fs = require('fs')
const app = express()
const path = require('path')

let mime = {
  html: 'text/html',
  txt: 'text/plain',
  css: 'text/css',
  gif: 'image/gif',
  jpg: 'image/jpeg',
  png: 'image/png',
  svg: 'image/svg+xml',
  js: 'application/javascript'
};

app.use(express.static(__dirname + '/site'));
app.use(express.static(__dirname + '/api'));

app.use(express.json())

const dirs = fs.readdirSync("./api/gifs")
const files = fs.readdirSync("./api/gifs").map(dir => fs.readdirSync(`./api/gifs/${dir}`))
const dir = path.join(__dirname, 'api');
console.log(dir)


app.get("/api/gifs/:type", async (req, res) => {
  const t = req.params.type
  const index = dirs.indexOf(t.toLowerCase())
  const filename = files[index][Math.floor(Math.random() * files[index].length)]
  if(index < 0) return res.send(404)
  const file = `${dir}/gifs/${t}/${filename}`
  if (file.indexOf(dir + path.sep) !== 0) {
    return res.status(403).end('Forbidden');
  }
  res.send({link: `http://holobot.xyz${req.originalUrl}/${filename}`})
})
app.get("/api/gifs/:type/:file", async (req, res) => {
  const t = req.params.type
  const f = req.params.file
  const index = dirs.indexOf(t.toLowerCase())
  if(index < 0) return res.send(404)
  const file = `${dir}/gifs/${t}/${f}`
  if (file.indexOf(dir + path.sep) !== 0) {
    return res.status(403).end('Forbidden');
  }
  res.sendFile(file)
})

app.get('*', function (req, res) {
  let file = path.resolve("." + req.path);
  if (file.indexOf(dir + path.sep) !== 0) {
    return res.status(403).end('Forbidden');
  }
  let type = mime[path.extname(file).slice(1)] || 'text/plain';
  let s = fs.createReadStream(file);
  s.on('open', function () {
    res.set('Content-Type', type);
    s.pipe(res);
  });
  s.on('error', function () {
    res.set('Content-Type', 'text/plain');
    res.status(404).end('Not found');
  });
});

app.get('/', function(req, res) {
  res.send("index")
})

app.listen(80, function() {
  console.log(`API START http://localhost:3000`)
})