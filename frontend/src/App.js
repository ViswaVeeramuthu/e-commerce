import './App.css';
import data from './data';

function App() {
  return (
    <div>
      <header>
        <a href='/'>E-Commerce</a>
      </header>
      <main>
        <h1>Featured Products</h1>
        <div className="products">
          {data.products.map(product => (
            <div className="product">
              <div key={product.slug}>
                <a href={`/product/${product.slug}`}>
                  <img src={product.image} alt={product.name}/>
                </a>
                <div className="product-info">
                  <a href={`/product/${product.slug}`}>
                    <p>{product.name}</p>
                  </a>
                  <p><strong>Price : {product.price}</strong></p>
                  <button>Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
