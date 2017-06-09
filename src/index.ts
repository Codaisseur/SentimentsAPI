// src/index.ts
import * as express from 'express'
import search from './twitter'
import sentiment from './sentiment'

const app = express()

app
	.get('/search/:term', (req, res) => {
		const searchTerm = req.params.term

    console.log('Searching for', searchTerm)
    search(searchTerm)
      .then((results) => (
        sentiment(results.data.statuses)
          .pipe(res)
      ))
	})
	.listen(5000, () => console.log('Listening on port 5000'))
