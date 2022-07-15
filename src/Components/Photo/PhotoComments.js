import React from 'react'
import {UserContext} from '../../UserContext'
import PhotoCommetsForm from './PhotoCommetsForm'
import styles from './PhotoComments.module.css'

function PhotoComments({ id, comments, single }) {
    const [comentarios, setComments] = React.useState(() => comments)
    const { login } = React.useContext(UserContext)
    return (
        <>
            <ul className={`${styles.comments} ${single ? styles.single : ''}`}>
                {comentarios.map(comentario => 
                    <li key={comentario.comment_ID}>
                        <b>{comentario.comment_author}: </b>
                        <span>{comentario.comment_content}</span>
                    </li>
                )}
            </ul>
            {login && <PhotoCommetsForm single={single} id={id} setComments={setComments} />}
        </>
    )
}

export default PhotoComments