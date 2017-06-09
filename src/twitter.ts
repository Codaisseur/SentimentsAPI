import * as Twit from 'twit'
const dateFormat = require('dateformat')

const {
  TWITTER_CONSUMER_KEY,
  TWITTER_CONSUMER_SECRET,
  TWITTER_ACCESS_TOKEN,
  TWITTER_TOKEN_SECRET,
} = process.env

const twit = new Twit({
  consumer_key:         TWITTER_CONSUMER_KEY,
  consumer_secret:      TWITTER_CONSUMER_SECRET,
  access_token:         TWITTER_ACCESS_TOKEN,
  access_token_secret:  TWITTER_TOKEN_SECRET,
})

export default (searchTerm:string) => {
  return twit.get('search/tweets', { q: searchTerm, count: 100 })
}
