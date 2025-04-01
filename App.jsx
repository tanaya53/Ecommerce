import React from 'react'; 
import './App.css';  
function App() { 
const products = [ 
    { 
      id: 1, 
      name: 'Smart Tv', 
      price: '$30.50', 
      image: 'https://i5.walmartimages.com/asr/2b2943fd-73d6-4d7b-9c54-e22db0c660f1_4.e79d68ec3a718064170de6cbd82e6030.jpeg'
    }, 
    { 
      id: 2, 
      name: 'Smart Watch', 
      price: '$20.20', 
      image: 'https://m.media-amazon.com/images/I/61ZjlBOp+rL._SL1500_.jpg'
    }, 
    { 
      id: 3, 
      name: 'Headphones', 
      price: '$10.80', 
      image: 'https://cdn-d03d5231-5b2e278c.commercebuild.com/427d67657268bc8f3a03cdf6be3a5c95/contents/VOH3050/Tune_720BT_pur.jpg'
    }, 
    { 
      id: 4, 
      name: 'Smart Phone', 
      price: '$20.50', 
      image:  'https://images.samsung.com/is/image/samsung/p6pim/ph/sm-s711blgcphl/gallery/ph-galaxy-s23-fe-s711-sm-s711blgcphl-538436839?$650_519_PNG$'
    }, 
    { 
      id: 5, 
      name: 'Powerbank', 
      price: '$20.80', 
      image: 'https://media.e-valy.com/cms/products/images/eeca2c11-aab6-4568-b6a4-7891519ef2c3?h=1000&w=1000'
    }, 
    { 
      id: 6, 
      name: 'Laptop', 
      price: '$10.50', 
      image: 'https://syndication.inc.hp.com/inpage/content/gaming/us/en/omen/uploads/images/victus-16-intel-hero-gallery-3.png'
    }, 
    { 
      id: 7, 
      name: 'Tablet', 
      price: '$10.50', 
      image: 'https://sm.mashable.com/mashable_in/photo/default/oppo-pad-air-cover-copy_mj59.jpg'
    },
    { 
      id: 8, 
      name: 'Speaker', 
      price: '$10.50', 
      image: 'https://m.media-amazon.com/images/I/613SH7hCqOL._SL1500_.jpg'
    },
  ]; 
  return ( 
    <div className="app-container"> 
      {/* Header */} 
      <header className="app-header"> 
        <h1>Tanaya's Store</h1> 
        <nav> 
          <ul> 
            <li>Home</li> 
            <li>Shop</li> 
            <li>About</li> 
            <li>Contact</li> 
          </ul> 
        </nav> 
      </header> 
 
      {/* Product Grid */} 
      <div className="product-grid"> 
        {products.map((product) => ( 
          <div key={product.id} className="product-card"> 
            <img src={product.image} alt={product.name} className="product-image" 
/> 
            <h2>{product.name}</h2> 
            <p>{product.price}</p> 
            <button className="add-to-cart-btn">Add to Cart</button> 
          </div> 
        ))} 
      </div> 
    </div> 
  ); 
} 
export default App; 
