import React, { useState } from 'react';
import './App.css';

function App() {
  const [products] = useState([
    { id: 1, name: "Quadro", price: 30.00, image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTbLD3PAaOMwKJgAog7r3hyG6i-OquexYMwHqN9y4oRZHFvmfCLVahQnmtZhrX98Fa6gsKsYz6CivsK9Hn9FYUGp7fJ3Y2dL7CMhbiaF-XkWl9hK15_1yZL0g&usqp=CAE", description: "Qadro Terror 3D" },
    { id: 2, name: "Descartaveis", price: 20.00, image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRiVUmcCSb9kpsiGNs5t0wAsR5EdBQ5qvjc2lT_14ub1k7q-yo1NRjJjh5h0no9pFjVOAvE1tWmc7qnP4dNOJKH7uTOhftu1O7M7ZpZhEI&usqp=CAE", description: "Conjunto de Descartaveis" },
    { id: 3, name: "Painel", price: 25.00, image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRaABETyTCcZhNRoGIAtBRQIuS60nQa7FYRsgA5aWSiswiRzwHlY83c_2CuZrFXsT21IyOWhHAXbflBIx0y7B2MB3Nw9xiIPxIW8QhT_Xit4Q9SqeskP-iB&usqp=CAE", description: "Painel Janela com snague" },
    { id: 4, name: "Vela", price: 4.00, image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTu6HbGiEKO-Ta4jQxIjbUr_89xfc9Rev4DgSGF5_OOKbLJSVXRwegzUc-4dVHxBLdpO0iGC9M9sWh365ciw8Gb-tukJsYbtg2ACKL5Up0&usqp=CAE", description: "Vela Led Abóora" },

    { id: 5, name: "Aranhas", price: 8.00, image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRwJstc1Cwr4eAOeTzbF9PlL9ETHcV8N5PuB0kEcsnYjt0zctHY93TpA1jgWjJF37tiMAp1H2hLrNFf7y3W_Sdr2W8yN2p3rKMpnJc68DPMS3r0Uqh084MDYA&usqp=CAE", description: "Kit 20 Aranhas" },
    { id: 6, name: "Pânico", price: 24.99, image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTOmi-mR4uCBvxcv-3eHa5ueqKpbdKK9ySgYd0CckQif6NWipGrSv_H6Cdt_mhTJ5JKJ9Y35n5RGlrt4u9ms7NI1M3HAU5bagnWSgM5md7Nrm-su40TyckU&usqp=CAE", description: "Máscara Pânico" },
    { id: 7, name: "Coelho", price: 60.00, image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQgrNyNrUgwpY_V5sKpSXrqkbeSdOfFg2k1NnxGq6SQ_PT08PeASrw7WxJDLkk3MVKfUATJX63RYr2ZzP20sr1WFxREhENIJC1PM1TWF_k3_0A60rxkTJ7r&usqp=CAE", description: "Máscara Terror Coelho" },
    { id: 8, name: "Morcego", price: 45.00, image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSPFfkDNOa_3FiMN_D7epckJQ05-1bendqah6EE0ADdfZ_F7_B65-79R1hCzHIqpRImKQsQU0zfOj8Q-DvPUdjleJ-gnwyrt7hhXDJo2lgxl26lcJZ14dMtSw&usqp=CAE", description: "Estátua Morcego" },
    { id: 9, name: "Zumbi", price: 70.00, image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSBHq0iQSwVHAkkuZtzsewh62D62eAIPFDNNLameNJUTsezX9Lj4UfUB8yP4OZViyWUjj-RGdjYFeXB7vJ3Ecos4IVJrjwh2v0DHFRTUAEavMaUl5FVJpI6&usqp=CAE", description: "Estátua Zumbi" },
    { id: 10, name: "Campainha", price: 65.00, image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSL0hfBBUuf30SS0g6JIIxCKn0CNafphNLQIq6V8fXaZAQ3_MYR6BmV1fIKxfplmvziRB7t_O9R_o0xJ97VZmkbxNVoMp9-Zyq2Ppjt0RwesLZ5NG-8kQ8s&usqp=CAE", description: "Campainha com Led" },

    { id: 11, name: "Esqueleto", price: 25.00, image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSAyBM7lQQ2LfrByLIDWNMBsbaY9rDSlw0A8Xtng8kpqQ2bEBAvMsnqYj4wwOG7zMr9video59Q_VIcfNtt8cB0bP_3hf8o4qdAxHPpYIZ2NK3bPDcTFW2MrA&usqp=CAE", description: "Ossada de Esqueleto" },
    { id: 12, name: "Bruxa", price: 30.00, image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQDJ4K0xacz-CaRJprOOFqtBEvsKHt23eMxm-sOy8mHuzatcZIzglDjQeRX8tTiGhf3qQXmEx0qHfnbb_wm0Vgw3xr1R1lvo64_i5OfFTSqjTIoMmww9OnK&usqp=CAE", description: "Bruxa Welcome" },
    { id: 13, name: "Lanterna", price: 14.99, image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRILdG_fgcE0AhIFTqWsUuYDQIx8ZVVVwvhcSGNcch6iwVH5qYAxNpon_ugUMffQEBQPsu54UV-ZZTB4CcJdUCS1OyRoxMSPez9KLipiGk&usqp=CAE", description: "Lanterna Eletrônica" },
    { id: 14, name: "Cortina", price: 6.00, image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRiF7lIQJ4D-ZndWYHOY3md7IWy_0HLSClH62nr1gz9P8HioM99-FBHb1EQtuI9MhYLMe1sXMuMvRMBmTDh8-yqFxqTu7REDHM2c2CGywjq&usqp=CAE", description: "Cortina Preta Tecido" },
    { id: 15, name: "Castiçal", price: 18.00, image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQHFQnQloaqnQZb0yR0eFrmMuXa0otqcH4jrFLLZZsf90N7rFJW_3pfQDxzrWgsDls3bosSkBdcH5OU7aFs2e1pxtddZ4XZX5aG_p8smjkCoTK_LH7x4Cma&usqp=CAE", description: "Castiçal Halloween" },
    { id: 16, name: "Lápide", price: 30.00, image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR1eZtIf8CvOEGNHno1GC4gXtcrQ8qdLtJ45MRHmI5qwWutvS7wI5yrnRG2oaVnXwSaqZjoC4dNAYVSRVaDjR1-F8pwgH4e2vb3KUnvjaxFFbftVKBjTz2G6g&usqp=CAE", description: "Lápide Terror" },
    { id: 17, name: "Caldeirão", price: 8.00, image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSLLRjPCf8Kqi98Gdhzt4PpJW0Jmco-Ouvj1_QbqQq2tZs7J9R8kRjkYJIi6ZcdKAmuMU9isBBU0dynV0O_TLbF8eaDkWMO&usqp=CAE", description: "Caldeirão da Bruxa" },
    { id: 18, name: "Mão", price: 16.00, image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSgm89faKeBLYKaT8MEmb47tpujdA8LN9gy4Z0k0Es5sPnxjtKwn0Gid3uE5mePCDCDxFei3OJibCEmu_VvkOSdxvNkRPgKK9MCw_I3bp5bqyc9sXy0Pkpx7A&usqp=CAE", description: "Mão Falsa" },

    { id: 19, name: "Ferramentas", price: 20.00, image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQDEBnK8mxHfJ80M-pRcLBZFf_mgiT0RiDp1t16-s7Sx-xvJJ5D2kS3Todz_g6OvpXlX_fkvw1ydu6fuPtVC6jQrfuNYqbV-PqWS8zS4FGtlWrxpFMehrRAog&usqp=CAE", description: "Ferramentas com Sangue" },
    { id: 20, name: "Caveira", price: 25.00, image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS62spDF2PgAYqtR3oA-FTlFZTOEWxpTayjMFCaLYE5Pj5bjYvB2Jjy6NNDo-FkT22kkPAR7vypfGXs3eJI-THIK8WenyBs3Nckkvv32AMeqqLbur7uU1OG&usqp=CAE", description: "Caveira Fantasma Enfeite" },
    { id: 21, name: "Palhaço", price: 65.00, image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQtAgDuK-3_jIw9icZBVb1NKI8RXLBXEaPwpaBTzCUKFS3JQNCawu4Dw9dOQnJDLlTC-S_tQkz466QGvDnHo-RcsoiHDxi35Zqe4647k_JZFX5aS6FTJxA3Cg&usqp=CAE", description: "Máscara Palhaço It Pennywise" },
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
    <div className='background'>

      <div className="App">
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
    </div>
  );

}

export default App;
