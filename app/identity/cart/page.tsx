"use client"
import React, { useState } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
}

interface CartItem {
  product: Product;
  quantity: number;
}

interface ShoppingCartProps {
  products: Product[];
}

const ShoppingCart: React.FC<ShoppingCartProps> = ({ products }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    const existingCartItem = cart.find((item) => item.product.id === product.id);

    if (existingCartItem) {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart((prevCart) => [...prevCart, { product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.product.id !== productId));
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.product.price * item.quantity, 0);
  };


  return (
    <div className="shopping-cart">
      <h2>Корзина</h2>
      <ul className="cart-list">
        {cart.map((item) => (
          <li key={item.product.id} className="cart-item">
            {item.product.name} x{item.quantity} - ₴{item.product.price * item.quantity}
            <button onClick={() => removeFromCart(item.product.id)}>видалити</button>
          </li>
        ))}
      </ul>
      <p className="total">Результат: ₴{calculateTotal()}</p>
      <h3 className="available-products">Достунпні товари</h3>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ₴{product.price}{" "}
            <button onClick={() => addToCart(product)}>Додати до корзини</button>
          </li>
        ))}
      </ul>
    </div>
  );
        }