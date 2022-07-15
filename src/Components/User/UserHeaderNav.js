import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { UserContext } from '../../UserContext'
import useMedia from '../../Hooks/useMedia'

import {ReactComponent as MyPhotos} from '../../Assets/feed.svg'
import {ReactComponent as Stats} from '../../Assets/estatisticas.svg'
import {ReactComponent as Logout} from '../../Assets/sair.svg'
import {ReactComponent as AddPhoto} from '../../Assets/adicionar.svg'

import styles from './UserHeaderNav.module.css'

function UserHeaderNav() {
    const { userLogout } = React.useContext(UserContext)
    const [mobileMenu, setMobileMenu] = React.useState(false)
    const mobile = useMedia('(max-width: 40rem)')

    const pathname = useLocation()

    React.useEffect(() => {
        setMobileMenu(false)
    }, [pathname])

    return (
        <>
            {mobile && 
                <button 
                    aria-label="Menu" 
                    className={`${styles.mobileButton} ${mobileMenu && styles.mobileButtonActive}`}
                    onClick={() => setMobileMenu(!mobileMenu)}>
                </button>
            }
            <nav className={`${mobile ? styles.navMobile : styles.nav} ${mobileMenu && styles.navMobileActive}`}>
                <NavLink to="/conta" end>
                    <MyPhotos />
                    {mobile && "Minhas Fotos"}
                </NavLink>
                <NavLink to="/conta/estatisticas">
                    <Stats />
                    {mobile && "Estatísticas"}
                </NavLink>
                <NavLink to="/conta/postar">
                    <AddPhoto />
                    {mobile && "Adicionar Foto"}
                </NavLink>

                <button onClick={userLogout}>
                    <Logout />
                    {mobile && "Sair"}
                </button>
            </nav>
        </>
    )
}

export default UserHeaderNav