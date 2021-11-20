import React, { useState } from 'react'
import MainLayout from './layouts/MainLayout';
import LoginPage from './pages/LoginPage';
import './App.css';
import FeedPage from './pages/FeedPage';

function App() {
  let localStorageTweets = []

  if (localStorage.getItem('tweets'))
    localStorageTweets = JSON.parse(localStorage.getItem('tweets'));
  else
    localStorage.setItem('tweets', JSON.stringify([]));

  const [username, setUsername] = useState('')
  const [tweets, setTweets] = useState(localStorageTweets)

  const tweetHandler = (tweet) => {
    localStorage.setItem('tweets', JSON.stringify([tweet, ...tweets]))
    setTweets([tweet, ...tweets])
  }

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
