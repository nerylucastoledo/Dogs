import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { UserContext } from '../../UserContext'
import LoginCreate from './LoginCreate'
import LoginForms from './LoginForms'
import LoginPasswordLost from './LoginPasswordLost'
import LoginPasswordReset from './LoginPasswordReset'
import styles from './Login.module.css'
import NotFound from '../NotFound'

function Login() {
  const {login} = React.useContext(UserContext)

  if (login === true) return <Navigate to='/conta'/>
  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path='/' element={<LoginForms />}></Route>
          <Route path='criar' element={<LoginCreate />}></Route>
          <Route path='perdeu' element={<LoginPasswordLost />}></Route>
          <Route path='resetar' element={<LoginPasswordReset />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
      </div>
    </section>
  )
}

export default Login