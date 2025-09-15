import './App.css'
import ProductCard from './product-card/ProductCard'
import type {ProductData} from './models/Product'
import { useEffect, useState } from 'react';
import fetchData from './api/fetchData';



function App() {
  const [productData, setProductData] = useState<ProductData[]>();

  useEffect(() => {
    fetchData().then((data) => setProductData(data));
  }, []);

  const cardList = () => (productData === undefined)?  null : (
    <div className="cardList">
        {productData.map((data, index) => (
          <ProductCard key={index} productData={data}/>

        ))}
        {productData.map((data, index) => (
          <ProductCard key={index} productData={data}/>

        ))}
    </div>
  )


  return (
    <>
      {cardList()}
    </>
  )
}

export default App
