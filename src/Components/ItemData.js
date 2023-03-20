import React from 'react'
import ItemBody from './ItemBody'
import ItemImage from './ItemImage'

const ItemData = ({img,nama,deskripsi}) => {
  return (
    <div>
        <li>
            <ItemImage img={img}/>
            <ItemBody hewan = {nama} deskripsi={deskripsi} />
        </li>
    </div>
  )
}

export default ItemData