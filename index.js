const express = require('express')
const app = express()
// ứng dụng đại diện nodeJS

const port = 3000

//route:tuyến đường hoặc page hoặc endpoint ? dấu / là main page, tuyến đường đến main page
//định nghĩa tuyến đường 
// app.get('/ketqua', (req, res) => {
//   res.send('Hello World!')
// })
//nếu vậy ta phải vào localhost:3000/ketqua để nhận được 'hello world !'
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// app lắng nghe port (3000)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
// staged change ???
