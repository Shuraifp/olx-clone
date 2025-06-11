import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { txtDB } from "../firebase";
import { doc, deleteDoc } from "firebase/firestore";

export const dbContext = createContext();

const DbProvider = ({ children }) => {

  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  const getProducts = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const json = await response.json();
      console.log(json);
      setProducts(json);
      getData();
    } catch (err) {
      setError(err.message); 
    } finally {
      setLoading(false); 
    }
  };

  const getData = async () => {
    const detRef = collection(txtDB,'product Details');
    const data = await getDocs(detRef);
    const allData = data.docs.map((doc) => ({...doc.data(), id: doc.id}));
    updateProducts(allData);
  }

  const updateProducts = (newProduct) => {
    console.log(newProduct);
    setProducts((products) => [...products, ...newProduct]);
  };

  const deleteProduct = async (id) => {
    const itemDocRef = doc(txtDB, 'product Details', id);
    await deleteDoc(itemDocRef);
    getProducts(); 
    alert('Item deleted successfully');
    navigate('/');
  };
  

  useEffect(() => {
    // const fetchData = async () => {
     getProducts(); 
      // await getData(); 
    // };
    // fetchData();
  }, []);
  
  return (
    <dbContext.Provider value={{ products, updateProducts, loading, error, deleteProduct, getProducts }}>
      {children}
    </dbContext.Provider>
  );
};

export default DbProvider;
