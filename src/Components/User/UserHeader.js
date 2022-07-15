import React from 'react'
import UserHeaderNav from './UserHeaderNav'
import styles from './UserHeader.module.css'
import { useLocation } from 'react-router-dom'

function UserHeader() {
    const [title, setTilte] = React.useState('')
    const location = useLocation()

    React.useEffect(() => {
        const {pathname} = location
        switch (pathname) {
            case '/conta':
                setTilte('Minha Conta')
                break
            case '/conta/estatisticas':
                setTilte('Estatísticas')
                break
            case '/conta/postar':
                setTilte('Postar Foto')
                break
            default:
                setTilte('Minha Conta')
        }
    }, [location])

    return (
        <header className={styles.header}>
            <h1 className='title'>{title}</h1>

            <UserHeaderNav />
        </header>
    )
}

export default UserHeader