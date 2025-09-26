import React, { useState } from "react";

export default function PaymentPage({ onConfirm, onBack }) {
  const [method, setMethod] = useState("");

  const handleConfirm = () => {
    if (!method) return alert("Pilih metode pembayaran!");
    onConfirm();
  };

  return (
    <div className="payment-page">
      <h2>Metode Pembayaran</h2>
      <div className="payment-options">
        <label>
          <input
            type="radio"
            name="payment"
            value="transfer"
            checked={method === "transfer"}
            onChange={(e) => setMethod(e.target.value)}
          />
          Transfer Bank (BCA, BNI, Mandiri)
        </label>
        <label>
          <input
            type="radio"
            name="payment"
            value="ewallet"
            checked={method === "ewallet"}
            onChange={(e) => setMethod(e.target.value)}
          />
          E-Wallet (OVO, GoPay, Dana, ShopeePay)
        </label>
        <label>
          <input
            type="radio"
            name="payment"
            value="cod"
            checked={method === "cod"}
            onChange={(e) => setMethod(e.target.value)}
          />
          COD (Bayar di Tempat)
        </label>
      </div>
      <button className="btn-add" onClick={handleConfirm}>Konfirmasi Pembayaran</button>
      <button style={{ marginLeft: 8 }} onClick={onBack}>Kembali</button>
    </div>
  );
}
