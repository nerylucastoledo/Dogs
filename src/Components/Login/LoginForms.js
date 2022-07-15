import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { UserContext } from '../../UserContext'
import useForm from '../../Hooks/useForm'

import Button from '../Forms/Button'
import Input from '../Forms/Input'
import Erro from '../Helper/Erro'
import styles from './LoginForm.module.css'
import stylesBtn from '../Forms/Button.module.css'
import Head from '../Helper/Head'

function LoginForms() {
  const username = useForm()
  const password = useForm()
  const {userLogin, error, loading} = React.useContext(UserContext)

  async function handleSubmit(event) {
    event.preventDefault()

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value)
    }
  }

  return (
    <section className='animeLeft'>
      <Head title="Login" description="Login do site dogs."/>
      <h1 className='title'>Login</h1>

      <form className={styles.form} onSubmit={handleSubmit}>
        <Input label='Usuário' type='text' name='username' {...username}/>
        <Input label='Senha' type="password" name='password' {...password}/>
        { loading ? <Button disabled>Carregando...</Button>
          : 
          <Button>Entrar</Button>
        }
        {error && <Erro error={error && 'Dados incorretos.'}/>}
      </form>
      <Link className={styles.perdeu} to='/login/perdeu'>Perder a senha?</Link>
      <div className={styles.cadastro}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site.</p>
        <Link className={stylesBtn.button} to='/login/criar'>Cadastro</Link>
      </div>
    </section>
  )
}

export default LoginForms