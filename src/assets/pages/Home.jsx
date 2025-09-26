import { useState } from "react";
import ProductList from "../components/ProductList";

export default function Home({ addToCart }) {
  const [search, setSearch] = useState("");

  return (
    <div className="container">
      <input
        type="text"
        placeholder="Cari produk..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search"
      />
      <ProductList addToCart={addToCart} search={search} />
    </div>
  );
}
