import { Link } from "react-router-dom"

const Products = ({products,search,menu}) => {
  return (
    <div>
      {products.length > 0 ? (
        <div className="grid grid-cols-4 p-5">
          {products.filter((product) => 
              product?.title && (search || menu) ? 
              product.title.includes(search ? search : menu) 
              : true
            ).map((product) => (
           <Link to={`/details`} state={{product}}><div key={product.id} className="border border-spacing-1 p-2 ml-3 mt-3">
              <img src={product.image} alt={product.title} className="w-60 h-48" />
              <p className="font-bold text-xl">Price: ${product.price}</p>
              <h2 className="font-semibold text-slate-900">{product.title}</h2>
              <p>{product.category}</p>
            </div>
            </Link>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default Products
