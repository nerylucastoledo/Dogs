import React from 'react'

function PhotoPost() {
    const [token, setToken] = React.useState('')
    const [nome, setNome] = React.useState('')
    const [peso, setPeso] = React.useState('')
    const [idade, setIdade] = React.useState('')
    const [imagem, setImagem] = React.useState('')

    function sendForm(event) {
        event.preventDefault()

        const formData = new FormData()
        formData.append('img', imagem)
        formData.append('nome', nome)
        formData.append('peso', peso)
        formData.append('idade', idade)

        fetch('https://dogsapi.origamid.dev/json/api/photo', {
            method: 'POST',
            headers: {
                Authorization: 'Bearer ' + token
            },
            body: formData
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
            value={token} 
            placeholder="token"
            onChange={({target}) => setToken(target.value)}
        />

        <input 
            type="text"
            value={nome} 
            placeholder="nome"
            onChange={({target}) => setNome(target.value)}
        />

        <input
            type="number"
            value={peso}
            placeholder="peso"
            onChange={({target}) => setPeso(target.value)}
        />

        <input
            type="number"
            value={idade}
            placeholder="idade"
            onChange={({target}) => setIdade(target.value)}
        />

        <input
            type="file"
            onChange={({target}) => setImagem(target.files[0])}
        />

        <button>Enviar</button>
        </form>
    )
}

export default PhotoPost