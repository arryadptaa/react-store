import { Link } from "react-router-dom";

export default function CartPage({ cart, removeFromCart }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="container">
      <h2>Keranjang Belanja</h2>
      {cart.length === 0 ? (
        <p>Keranjang kosong</p>
      ) : (
        <>
          <ul className="cart-items">
            {cart.map((item, i) => (
              <li key={i} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="cart-info">
                  <strong>{item.name}</strong>
                  <p>Jumlah: {item.qty}</p>
                  <p>Harga: Rp {(item.price * item.qty).toLocaleString()}</p>
                  <p>Tanggal: {item.date}</p>
                </div>
                <button className="btn-delete" onClick={() => removeFromCart(i)}>
                  Hapus
                </button>
              </li>
            ))}
          </ul>
          <h3>Total: Rp {total.toLocaleString()}</h3>
          <Link to="/checkout" className="btn-add">Checkout</Link>
        </>
      )}
    </div>
  );
}
