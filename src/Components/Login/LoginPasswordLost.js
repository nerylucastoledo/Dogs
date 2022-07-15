import React from 'react'
import { PASSWORD_LOST } from '../../api'
import useFetch from '../../Hooks/useFetch'
import useForm from '../../Hooks/useForm'
import Button from '../Forms/Button'
import Input from '../Forms/Input'
import Erro from '../Helper/Erro'
import Head from '../Helper/Head'

function LoginPasswordLost() {
  const email = useForm()
  const {data, loading, error, request} = useFetch()

  async function handleSubmit(event) {
    event.preventDefault()
    if (email.validate()) {
      const { url, options } = PASSWORD_LOST({
        login: email.value, 
        url: window.location.href.replace('perdeu', 'resetar')
      })
      await request(url, options)
    }
  }

  return (
    <section className='animeLeft'>
      <Head title="Perdeu a senha" description="Página de perdeu a senha no site dogs."/>
      <h1 className='title'>Perdeu a senha?</h1>
      {data ? 
        <p style={{color: '#4c1'}}>{data}</p>
        :
        <form onSubmit={handleSubmit}>
          <Input label="E-mail / Usuário" type="text" name="email" {...email}/>
          {loading ? 
            <Button disabled>Enviando...</Button>
            :
            <Button>Enviar mail</Button>
          }
        </form>
      }
      <Erro error={error}/>
    </section>
  )
}

export default LoginPasswordLost