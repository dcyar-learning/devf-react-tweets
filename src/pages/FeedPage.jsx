import React from 'react'
import { Container } from '@mui/material'
import TweetForm from '../components/TweetForm'
import Tweet from '../components/Tweet'
import { Box } from '@mui/system'

function FeedPage({ username, handleLogout, tweets, tweetHandler }) {
  return (
    <Container maxWidth="sm">
      <TweetForm handleTweet={tweetHandler} handleLogout={handleLogout} username={username} />
      <Box sx={{ marginTop: '20px' }}>
        {
          tweets.map((tweet, index) => (
            <Tweet tweet={tweet} key={index} />
          ))
        }
      </Box>
    </Container>
  )
}

export default FeedPage
