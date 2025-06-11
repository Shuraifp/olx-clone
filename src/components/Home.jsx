import { useContext } from "react"
import Products from "./Products"
import {dbContext } from "./DbProvider"

const Home = ({search,menu}) => {

  const {products} = useContext(dbContext)
  return (
    <div>
      <Products products={products} search={search} menu={menu}/>
    </div>
  )
}

export default Home
