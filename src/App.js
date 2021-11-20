import React, { useState } from 'react'
import MainLayout from './layouts/MainLayout';
import LoginPage from './pages/LoginPage';
import './App.css';
import FeedPage from './pages/FeedPage';

function App() {
  const [username, setUsername] = useState('')
  const [tweets, setTweets] = useState([])

  const tweetHandler = (tweet) => setTweets([tweet, ...tweets])

  const loginHandler = (username) => setUsername(username);

  const logoutHandler = () => setUsername('')

  return (
    <div className="App">
      <MainLayout>
        {
          !username.length
            ? <LoginPage handleLogin={loginHandler} handleLogout={logoutHandler} />
            : <FeedPage username={username} tweets={tweets} handleLogout={logoutHandler} tweetHandler={tweetHandler} />
        }
      </MainLayout>
    </div>
  );
}

export default App;
