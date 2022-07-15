import React from 'react'
import Head from '../Helper/Head'
import useFetch from '../../Hooks/useFetch'
import Loading from '../Helper/Loading'
import Erro from '../Helper/Erro'
import { STATS_GET } from '../../api'
const UserStatsGraphs = React.lazy(() => import('./UserStatsGraphs'))

function UserStats() {
  const { data, error, loading, request} = useFetch()

  React.useEffect(() => {
    async function getData() {
      const token = localStorage.getItem('token')
      const { url, options } = STATS_GET(token)
      await request(url, options)
    }
    getData()
  }, [request])

  if (loading ) return <Loading />
  if (error) return <Erro error={error} />
  if (data) {
    return (
      <React.Suspense fallback={<div></div>}>
        <Head title="Estatísticas" description="Estatísticas das fotos no site dogs."/>
        <UserStatsGraphs data={data}/>
      </React.Suspense>
    )
  } else {
    return null
  }
}

export default UserStats