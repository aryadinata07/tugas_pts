import React from 'react'

const ItemBody = ({hewan, deskripsi}) => {
  return (
    <div>
        <h1>{hewan}</h1>
        <p>{deskripsi}</p>
    </div>
  )
}

export default ItemBody