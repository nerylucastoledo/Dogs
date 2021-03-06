import React from 'react'

function TokenPost() {
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')

  function sendForm(event) {
    event.preventDefault()
    fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username, 
        password
      })
    })
    .then((response) => {
        console.log(response);
        return response.json();
    })
    .then((json) => {
        console.log(json);
        return json;
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
        type="password"
        value={password}
        placeholder="password"
        onChange={({target}) => setPassword(target.value)}
      />

      <button>Enviar</button>
    </form>
  )
}

export default TokenPost