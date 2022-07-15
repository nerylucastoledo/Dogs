import React from 'react'
import { PHOTO_DELETE } from '../../api'
import useFetch from '../../Hooks/useFetch'
import styles from './PhotoDelete.module.css'

function PhotoDelete({ id }) {
    const {loading, request }= useFetch()

    async function handleClick() {
        const confirm = window.confirm('Certeza que deseja deletar?')
        if (confirm) {
            const token = localStorage.getItem('token')
            const { url, options } = PHOTO_DELETE(id, token)
            const { response } = await request(url, options)
            if (response.ok) {
                window.location.reload()
            }
        }
    }

    return (
        <>
            {loading ? 
                <button disabled className={styles.delete}>Carregando...</button>
                :
                <button onClick={handleClick} className={styles.delete}>Deletar</button>
            }
        </>
    )
}

export default PhotoDelete