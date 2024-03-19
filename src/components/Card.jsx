import React from 'react'

const Card = (props) => {
  return (
    <>
    <div class="card" style={{width: "18rem"}}>
  <img src="..." class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{props.title}</h5>
    <p className="card-text">${props.price}</p>
    <p class="card-text"></p>
    <a href="#" class="btn btn-primary">Add To Cart</a>
  </div>
</div>
    
    </>
  )
}

export default Card