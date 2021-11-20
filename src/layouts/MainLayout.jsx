import { Container } from '@mui/material'
import React from 'react'
import Header from './components/Header'

function MainLayout(props) {
  return (
    <>
      <Header />
      <Container sx={{ marginTop: '20px' }}>
        {props.children}
      </Container>
    </>
  )
}

export default MainLayout
