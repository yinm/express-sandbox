const express = require('express')
const app = express()

const server = app.listen(3000, () => {
  console.log('Node.js is listening to PORT:' + server.address().port)
})

const photoList = [
  {
    id: '001',
    name: 'photo001.jpg',
    type: 'jpg',
    dataUrl: 'http://localhost:3000/data/photo001.jpg'
  },
  {
    id: '002',
    name: 'photo002.jpg',
    type: 'jpg',
    dataUrl: 'http://localhost:3000/data/photo002.jpg'
  }
]

app.get('/api/photo/list', (req, res, next) => {
  res.json(photoList)
})

app.get('/api/photos/:photoId', (req, res, next) => {
  let photo
  for (let i = 0; i < photoList.length; i++) {
    if (photoList[i].id === req.params.photoId) {
      photo = photoList[i]
    }
  }

  res.json(photo)
})
