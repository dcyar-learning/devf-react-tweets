import { useState } from 'react'
import { Button, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

function LoginPage({ handleLogin }) {
  const [username, setUsername] = useState('')
  const [error, setError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const inputChangeHandler = (e) => {
    if (error) {
      setError(false)
      setErrorMessage('')
    }

    setUsername(e.target.value)
  }

  const setUserHandler = () => {
    if (username.length === 0) {
      setError(true)
      setErrorMessage('Incorrect entry.')
    } else {
      handleLogin(username)
    }
  }

  return (
    <Box sx={{ width: '300px', margin: 'auto' }}>
      <h2>Login View</h2>
      <TextField
        value={username}
        onChange={inputChangeHandler}
        id="standard-basic"
        fullWidth
        label="Username"
        variant="standard"
        autoFocus
        error={error}
        helperText={errorMessage}
      />
      <Button
        onClick={setUserHandler}
        sx={{ marginTop: '15px' }}
        variant="outlined"
        fullWidth
      >
        Login
      </Button>
    </Box>
  )
}

export default LoginPage
