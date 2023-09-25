import { Link } from "react-router-dom";
import React from 'react'
import Update from "../pages/Update";


const Card = ({restaurant,handelDelete}) => {

    const handDelete = async (id) =>{
        try {
            await axios.delete(`${URL}/restaurants/${id}`, config);
            window.location.reload();
        } catch (error) {
            console.error(error);
        }
    }


    
  return (
      <div className="card" style={{ width: "18rem" }} key={restaurant.id}>
          <img src={restaurant.image} alt="" className='card-img-top' />
          <div className="card-body">
              <h5 className='title'>{restaurant.name}</h5>
              <p className="card-text">{restaurant.type}</p>
              <Link to="" className='btn btn-danger px-2'onClick={() =>{
                handelDelete(restaurant.id);
                }}>
                  Delete
              </Link>
              <Link to="./Update/:restaurantId" className='btn btn-warning px-2'>
                  Edit
              </Link>
          </div>
      </div>
  )
}

export default Card
