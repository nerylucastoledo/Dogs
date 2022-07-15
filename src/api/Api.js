import React from 'react'
import PhotoGet from './endpoints/PhotoGet'
import PhotoPost from './endpoints/PhotoPost'
import TokenPost from './endpoints/TokenPost'
import UserPost from './endpoints/UserPost'

function Api() {
  return (
    <div>
        <h2>USER POST</h2>
        <UserPost />

        <h2>Token POST</h2>
        <TokenPost />

        <h2>Post photo</h2>
        <PhotoPost />

        <h2>GET photos</h2>
        <PhotoGet />
    </div>
  )
}

export default Api