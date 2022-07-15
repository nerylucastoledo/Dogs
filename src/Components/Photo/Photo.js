import React from 'react'
import { useParams } from 'react-router-dom'
import { PHOTO_GET_ID_ESPECIFIC } from '../../api'
import useFetch from '../../Hooks/useFetch'
import Erro from '../Helper/Erro'
import Head from '../Helper/Head'
import Loading from '../Helper/Loading'
import PhotoContet from './PhotoContet'

function Photo() {
    const { id }= useParams()
    const {data, loading, error, request }= useFetch()

    React.useEffect(() => {
        const { url }= PHOTO_GET_ID_ESPECIFIC(id)
        request(url)
    }, [id, request])

    if (error) return <Erro error={error}/>
    if (loading) return <Loading />
    if (data) {
        return (
            <section className="container mainContainer">
                <Head title={data.photo.title} description={`Foto do ${data.photo.title} no site dogs.`}/>
                <PhotoContet single={true} data={data}/>
            </section>
        )
    } else {
        return null
    }
}

export default Photo