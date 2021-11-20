import React, { useState } from 'react'
import { Button, TextField } from '@mui/material'
import { Box } from '@mui/system'

function TweetForm({ username, handleTweet, handleLogout }) {
  const [tweet, setTweet] = useState('')

  const changeInputHandler = (e) => setTweet(e.target.value)

  const sendTweetHandler = () => {
    handleTweet({ text: tweet, author: username, date: `${new Date().toLocaleTimeString()} ${new Date().toLocaleDateString()}` })
    setTweet('')
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'end' }}>
      <Button sx={{ textAlign: 'right' }} onClick={handleLogout} variant="text">Salir</Button>
      <TextField
        onChange={changeInputHandler}
        id="filled-multiline-static"
        label="Today I'm..."
        multiline
        rows={2}
        fullWidth
        variant="filled"
        value={tweet}
      />
      <Button
        onClick={sendTweetHandler}
        sx={{ marginTop: '15px' }}
        variant="outlined"
        fullWidth
      >
        Tweet
      </Button>
    </Box>
  )
}

export default TweetForm
