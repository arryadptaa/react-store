import React from "react";

export default function Cart({ cart, removeFromCart, goToCheckout, onContinueShopping }) {
  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);

  return (
    <div className="cart-page">
      <h2>Keranjang Belanja</h2>
      {cart.length === 0 ? (
        <>
          <p>Keranjang kosong</p>
          <button className="btn-add" onClick={onContinueShopping}>Lanjut Belanja</button>
        </>
      ) : (
        <>
          <ul className="cart-items">
            {cart.map((item, index) => (
              <li key={index} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="cart-info">
                  <strong>{item.name}</strong>
                  <p>Jumlah: {item.qty}</p>
                  <p>Harga: Rp {(item.price * item.qty).toLocaleString()}</p>
                  <p>Tanggal: {item.date}</p>
                </div>
                <button className="btn-delete" onClick={() => removeFromCart(index)}>Hapus</button>
              </li>
            ))}
          </ul>
          <h3>Total: Rp {total.toLocaleString()}</h3>
          <div style={{ display: "flex", gap: 8 }}>
            <button className="btn-add" onClick={goToCheckout}>Checkout</button>
            <button onClick={onContinueShopping}>Kembali Belanja</button>
          </div>
        </>
      )}
    </div>
  );
}
