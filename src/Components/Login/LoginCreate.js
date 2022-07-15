import React from 'react'
import Input from '../Forms/Input'
import Button from '../Forms/Button'
import Erro from '../Helper/Erro'
import useForm from '../../Hooks/useForm'
import { USER_POST } from '../../api'
import { UserContext } from '../../UserContext'
import useFetch from '../../Hooks/useFetch'
import Head from '../Helper/Head'
import { useNavigate } from 'react-router-dom'

function LoginCreate() {
  const username = useForm()
  const email = useForm('email')
  const password = useForm('password')
  const navigate = useNavigate()

  const { userLogin }= React.useContext(UserContext)
  const { loading, error, request } = useFetch()

  async function handleSubmit(event) {
    event.preventDefault()
    const { url, options }= USER_POST({
      username: username.value,
      email: email.value,
      password: password.value,
    })
    const {response} = await request(url, options)
    if (response.ok) {
      userLogin(username.value, password.value)
      navigate('/conta')
    }
  }
  return (
    <section className='animeLeft'>
      <Head title="Criar Conta" description="Criar uma conta no site dogs."/>
      <h1 className='title'>Cadastre-se</h1>

      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username}/>
        <Input label="E-mail" type="email" name="email" {...email}/>
        <Input label="Senha" type="password" name="password" {...password}/>

        {loading ? <Button disabled>Cadastrando...</Button>
          :
          <Button>Cadastrar</Button>
        }
        {error && <Erro error={error}/>}
      </form>
    </section>
  )
}

export default LoginCreate