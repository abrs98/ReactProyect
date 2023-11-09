import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './TwitterFollowCard'
import { TwitterFollowCard } from './TwitterFollowCard'

function App() {
  const users = [
    {
      userName: 'midudev',
      name: 'Miguel Angel Duran',
      isFollowing: true
    },
    {
      userName: 'pheralb',
      name: 'Pablo H',
      isFollowing: false
    },
    {
      userName: 'PacoHdezs',
      name: 'Paco Hdez',
      isFollowing: true
    },
    {
      userName: 'TMChein',
      name: 'Tomas',
      isFollowing: false
    }
  ]
  return (
    <>
      <section className='App'>
        {users.map(user => {
          const { userName, name, isFollowing } = user

          return (
            <TwitterFollowCard
            key={userName}
              userName={userName}
              initialIsFollowing={isFollowing}>
                {name}
              </TwitterFollowCard>
          )
        })}
      </section>

    </>
  )
}

export default App
