import React, { useState } from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import PaymentPage from "./components/PaymentPage";

export default function App() {
  const [page, setPage] = useState("home"); // halaman aktif
  const [cart, setCart] = useState([]); // isi keranjang
  const [search, setSearch] = useState("");
  const [checkoutInfo, setCheckoutInfo] = useState({ name: "", address: "" });

  // tambah barang ke keranjang
  const addToCart = (product, qty) => {
    const today = new Date().toLocaleDateString("id-ID");
    const existing = cart.findIndex((c) => c.id === product.id);
    if (existing >= 0) {
      const updated = [...cart];
      updated[existing].qty += qty;
      updated[existing].date = today;
      setCart(updated);
    } else {
      setCart([...cart, { ...product, qty, date: today }]);
    }
  };

  // hapus barang dari keranjang
  const removeFromCart = (index) => {
    const updated = [...cart];
    updated.splice(index, 1);
    setCart(updated);
  };

  // checkout
  const goToCheckout = () => {
    if (cart.length === 0) return alert("Keranjang kosong!");
    setPage("checkout");
  };

  const confirmCheckout = (info) => {
    if (!info.name || !info.address) return alert("Isi nama & alamat!");
    setCheckoutInfo(info);
    setPage("shipping");
  };

  const totalItems = cart.reduce((s, i) => s + i.qty, 0);

  return (
    <div className="container">
      {/* Header */}
      <header className="header">
        <div className="left-header">
          <h1 className="logo" onClick={() => setPage("home")}>
             ARR GARAGE SHOP
          </h1>
          
        </div>

        <div className="center-header">
          <input
            className="search"
            placeholder="Cari produk..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="right-header">
          <div className="cart-icon" onClick={() => setPage("cart")}>
            🛒
            {totalItems > 0 && <span className="badge">{totalItems}</span>}
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="main-layout">
        {page === "home" && (
          <ProductList addToCart={addToCart} search={search} />
        )}

        {page === "cart" && (
          <Cart
            cart={cart}
            removeFromCart={removeFromCart}
            goToCheckout={goToCheckout}
            onContinueShopping={() => setPage("home")}
          />
        )}

        {page === "checkout" && (
          <CheckoutForm
            cart={cart}
            onConfirm={confirmCheckout}
            onBack={() => setPage("cart")}
          />
        )}

        {page === "shipping" && (
          <div className="shipping-page">
            <h2>Pengiriman</h2>
            <p><strong>Nama:</strong> {checkoutInfo.name}</p>
            <p><strong>Alamat:</strong> {checkoutInfo.address}</p>
            <p>Pilih jasa pengiriman:</p>
            <ul>
              <li>JNE - Rp 20.000</li>
              <li>J&T - Rp 22.000</li>
              <li>SiCepat - Rp 18.000</li>
            </ul>
            <button className="btn-add" onClick={() => setPage("payment")}>
              Lanjut ke Pembayaran
            </button>
            <button style={{ marginLeft: 8 }} onClick={() => setPage("checkout")}>
              Kembali
            </button>
          </div>
        )}

        {page === "payment" && (
          <PaymentPage
            onConfirm={() => {
              alert("Pesanan berhasil! Terima kasih.");
              setCart([]);
              setPage("home");
            }}
            onBack={() => setPage("shipping")}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="footer">© ARRGARAGE</footer>
    </div>
  );
}

/* Form checkout (inline biar simpel) */
function CheckoutForm({ cart, onConfirm, onBack }) {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);

  return (
    <div className="checkout-page">
      <h2>Checkout</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onConfirm({ name, address });
        }}
      >
        <div>
          <label>Nama:</label>
          <input value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Alamat:</label>
          <textarea value={address} onChange={(e) => setAddress(e.target.value)} />
        </div>
        <p><strong>Total:</strong> Rp {total.toLocaleString()}</p>
        <button type="submit" className="btn-add">Lanjut ke Pengiriman</button>
        <button type="button" style={{ marginLeft: 8 }} onClick={onBack}>Kembali</button>
      </form>
    </div>
  );
}
