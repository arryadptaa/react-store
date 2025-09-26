import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function CheckoutPage({ cart }) {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();

  const handleCheckout = (e) => {
    e.preventDefault();
    if (!name || !address) return alert("Isi semua data!");
    navigate("/shipping");
  };

  return (
    <div className="container">
      <h2>Checkout</h2>
      <form onSubmit={handleCheckout}>
        <div>
          <label>Nama:</label>
          <input value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Alamat:</label>
          <textarea value={address} onChange={(e) => setAddress(e.target.value)} />
        </div>
        <button type="submit" className="btn-add">Lanjut ke Pengiriman</button>
      </form>
      <Link to="/cart">⬅ Kembali ke Keranjang</Link>
    </div>
  );
}
