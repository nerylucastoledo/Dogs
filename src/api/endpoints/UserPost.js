import React from 'react'

function UserPost() {
  const [username, setUsername] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  function sendForm(event) {
    event.preventDefault()
    fetch('https://dogsapi.origamid.dev/json/api/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username, 
        email, 
        password
      })
    })
    .then(req => {
      console.log(req)
      req.json()
    })
  }

  return (
    <form onSubmit={sendForm}>
      <input 
        type="text"
        value={username} 
        placeholder="username"
        onChange={({target}) => setUsername(target.value)}
      />

      <input
        type="email"
        value={email}
        placeholder="email"
        onChange={({target}) => setEmail(target.value)}
      />

      <input
        type="password"
        value={password}
        placeholder="password"
        onChange={({target}) => setPassword(target.value)}
      />

      <button>Enviar</button>
    </form>
  )
}

export default UserPost