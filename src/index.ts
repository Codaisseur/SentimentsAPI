// src/index.ts
import * as express from 'express'
import search from './twitter'
import sentiment from './sentiment'

const PORT = process.env.PORT || 5000

const app = express()

app
  .get('/', (req, res) => {
    res.send({ message: 'hello, world!' })
  })
	.get('/search/:term', (req, res) => {
		const searchTerm = req.params.term

    console.log('Searching for', searchTerm)
    search(searchTerm)
      .then((results) => (
        sentiment(results.data.statuses)
          .pipe(res)
      ))
	})
	.listen(PORT, () => console.log('Listening on port 5000'))
