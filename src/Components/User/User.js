import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { UserContext } from '../../UserContext'
import Feed from '../Feed/Feed'
import Head from '../Helper/Head'
import NotFound from '../NotFound'
import UserHeader from './UserHeader'
import UserPhotoPost from './UserPhotoPost'
import UserStats from './UserStats'

function User() {
  const { data } = React.useContext(UserContext)
  return (
    <section className='container'>
      <Head title="Minha conta" description="Feed da conta do uisuário no site dogs."/>
        <UserHeader />

        <Routes>
            <Route path='/' element={<Feed user={data.id}/>}/>
            <Route path='postar' element={<UserPhotoPost />}/>
            <Route path='estatisticas' element={<UserStats />}/>
            <Route path='*' element={<NotFound />}></Route>
        </Routes>
    </section>
  )
}

export default User