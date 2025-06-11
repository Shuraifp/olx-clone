import { useLocation } from "react-router-dom";
import deleteIcon from '../assets/delete.png'
import { useContext } from "react";
import { dbContext } from "./DbProvider";
const Details = () => {
  const location = useLocation()
  const { deleteProduct } = useContext(dbContext)
  console.log(location)
  return (
    <div className="flex h-screen p-16 border-2 border-black">
      <img className="w-auto" src={location.state.product.image} alt="" />
      <div className="ml-10 p-5">
        <div className="flex">
          <h1 className="font-bold text-3xl">{location.state.product.price}</h1>
          <img onClick={() => deleteProduct(location.state.product.id)} src={deleteIcon} className="ml-auto w-10 cursor-pointer" />
        </div>
        <h1 className="mt-5"><span className="font-semibold">Category</span> : {location.state.product.category}</h1>
        <h1 className="mt-5"><span className="font-semibold">Title</span> : {location.state.product.title}</h1>
        <h1 className="mt-5"><span className="font-semibold">Description</span> : {location.state.product.description}</h1>
      </div>
    </div>
  )
}

export default Details
