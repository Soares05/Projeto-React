import React, { useState } from 'react';
import './App.css';

function App() {
  const [products] = useState([
    { id: 1, name: "Corrente", price: 50.00, image: "https://http2.mlstatic.com/D_NQ_NP_964518-MLB51908198443_102022-O.webp", description: "Corrente muito zika do São paulo" },
    { id: 2, name: "Perfume", price: 175.00, image: "https://m.media-amazon.com/images/I/41OT2EuZubL.__AC_SX300_SY300_QL70_ML2_.jpg", description: "Malbec X, perfume de macho alfa" },
    { id: 3, name: "Caneca", price: 22.22, image: "https://http2.mlstatic.com/D_NQ_NP_702416-MLB44147395718_112020-O.webp", description: "Caneca do MITOOO 22" },
    { id: 4, name: "Giftcard Robux", price: 100.00, image: "https://target.scene7.com/is/image/Target/GUEST_50289451-170a-4103-ab21-1331266d935b", description: "Dinheiro para gastar dentro do Roblox" },
    { id: 5, name: "Perfume 2", price: 99.00, image: "https://m.media-amazon.com/images/I/61iFgEw8s9L._AC_SX425_.jpg", description: "Cheiro do HOMEM KRLH" },
    { id: 6, name: "Anão", price: 0.5, image: "https://i.redd.it/peq75dvkfml41.jpg", description: "Rafael, o Anão brabo" },
  ]);

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const productInCart = prevCart.find((item) => item.id === product.id);
      if (productInCart) {
        const updatedCart = prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        return updatedCart;
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (product) => {
    setCart((prevCart) => {
      const productInCart = prevCart.find((item) => item.id === product.id);
      if (productInCart && productInCart.quantity > 1) {
        const updatedCart = prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
        return updatedCart;
      } else {
        return prevCart.filter((item) => item.id !== product.id);
      }
    });
  };

  const calculateTotal = () => {
    return cart.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
  };

  return (
    <div className="App">
      
   <>
    <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
  </>  
  <h1>Carrinho de Compras</h1>
  <h2>Produtos Disponíveis</h2>
  <div className="product-cards-container">
    {products.map((product) => (
      <div key={product.id} className="product-card">
        <img src={product.image} alt={product.name} />
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p>Preço: ${product.price.toFixed(2)}</p>
        <button onClick={() => addToCart(product)}>Adicionar</button>
      </div>
    ))}
  </div>

     
      <aside id="cart">
        <header>
          <h2>Seu Carrinho</h2>
        </header>
        <ul>
          {cart.map((product) => (
            <li key={product.id}>
              {product.name} - ${product.price.toFixed(2)} x{product.quantity}{' '}
              <button onClick={() => removeFromCart(product)}>Remover</button>
            </li>
          ))}
        </ul>
         <footer id="cart-total">
            Total: ${calculateTotal().toFixed(2)}
          </footer> 
      </aside>
    </div>
  );
  
}

export default App;
