import React from 'react'
import SingleItem from './SingleItem'
import { Link, useLocation } from 'react-router-dom'

const ItemList = ({ title, items, itemsArray, path, idPath }) => {
  // console.log(title)
  // console.log(items)
  const {pathname} = useLocation()
  const isHome = pathname === "/"
  const finalItems = isHome ? items : Infinity

  return (
    <div className="item-list">
            <div className="item-list__header">
              <h2>{title} populares</h2>
              {isHome ?<Link to={path} className="item-list__link" >
                Mostrar tudo
              </Link> : 
              <></>}
            </div>
    
            <div className="item-list__container">
            {itemsArray.filter((currentValue, index) => index < finalItems)
            .map((currobj, index) => (
              <SingleItem
              // id={currobj.id}
              // name={currobj.name}
              // image={currobj.image}
              // banner={currobj.banner}
              idPath={idPath}
              {...currobj}
              key={`${title}-${index}`}/>
              ))}
    
            </div>
          </div>
  )
}

export default ItemList