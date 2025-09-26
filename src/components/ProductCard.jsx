import React, { useState } from "react";
import ReviewSection from "./ReviewSection";

export default function ProductCard({ product, addToCart }) {
  const [qty, setQty] = useState(1);

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p className="price">Rp {product.price.toLocaleString()}</p>

      <div style={{ margin: "8px 0" }}>
        <label>Jumlah: </label>
        <input
          type="number"
          min="1"
          value={qty}
          onChange={(e) => setQty(Math.max(1, parseInt(e.target.value || "1")))}
          className="qty-input"
        />
      </div>

      <button className="btn-add" onClick={() => addToCart(product, qty)}>
        + Keranjang
      </button>

      <ReviewSection productId={product.id} />
    </div>
  );
}
