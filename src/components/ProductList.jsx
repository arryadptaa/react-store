import React from "react";
import ProductCard from "./ProductCard";

// import gambar
import handleRem from "../assets/handle-rem.jpg";
import kampasKtc from "../assets/kampas-rem-ktc.jpg";
import shockRcb from "../assets/shock-rcb.jpg";
import velgRcb from "../assets/velg-rcb.jpg";

export default function ProductList({ addToCart, search }) {
  const products = [
    { id: 1, name: "Velg RCB", price: 2500000, image: velgRcb },
    { id: 2, name: "Handle Rem RCB", price: 350000, image: handleRem },
    { id: 3, name: "Kampas Rem KTC", price: 150000, image: kampasKtc },
    { id: 4, name: "Shockbreaker RCB", price: 1200000, image: shockRcb },
  ];

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes((search || "").toLowerCase())
  );

  return (
    <div className="product-list">
      {filtered.map((p) => (
        <ProductCard key={p.id} product={p} addToCart={addToCart} />
      ))}
    </div>
  );
}
