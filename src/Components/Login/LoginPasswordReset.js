import React from 'react'
import { useNavigate } from 'react-router-dom'
import { PASSWORD_RESET } from '../../api'
import useFetch from '../../Hooks/useFetch'
import useForm from '../../Hooks/useForm'
import Button from '../Forms/Button'
import Input from '../Forms/Input'
import Erro from '../Helper/Erro'
import Head from '../Helper/Head'

function LoginPasswordReset() {
  const [login, setLogin] = React.useState('')
  const [key, setKey] = React.useState('')
  const password = useForm('password')
  const { error, loading, request } = useFetch()
  const navigate = useNavigate()

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const key = params.get('key')
    const login = params.get('login')

    if (key) setKey(key)
    if (login) setLogin(login)
  }, [])

  async function handleSubmit(event) {
    event.preventDefault()
    const { url, options } = PASSWORD_RESET({
      login,
      key,
      password: password.value
    })
    const { response } = await request(url, options)

    if (response.ok) navigate('/login')
  }

  return (
    <section className='animeLeft'>
      <Head title="Resetar Senha" description="Página para resetar senha no site dogs."/>
      <h1 className='title'>Resete a Senha</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Nova Senha" type="password" name="password" {...password}/>
        {loading ? 
          <Button disabled>Resetando...</Button>
          :
          <Button>Resetar</Button>
        }
        </form>
        <Erro error={error}/>
    </section>
  )
}

export default LoginPasswordReset