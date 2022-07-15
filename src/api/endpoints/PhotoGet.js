import React from 'react'

function PhotoGet() {
    function pegarPhoto(event) {
        event.preventDefault()
        fetch('https://dogsapi.origamid.dev/json/api/photo')
        .then(req => req.json())
        .then(res => console.log(res))
    }

    return (
        <form onSubmit={pegarPhoto}>
            <button>Enviar</button>
        </form>
    )
}

export default PhotoGet