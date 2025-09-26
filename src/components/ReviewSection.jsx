import React, { useState } from "react";

export default function ReviewSection({ productId }) {
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(0);
  const [text, setText] = useState("");

  const submit = () => {
    if (rating <= 0 || text.trim() === "") return alert("Pilih bintang & isi ulasan");
    setReviews([...reviews, { rating, text }]);
    setRating(0);
    setText("");
  };

  return (
    <div className="reviews">
      <h4>Ulasan</h4>
      {reviews.length === 0 ? <p>Belum ada ulasan</p> :
        <ul>
          {reviews.map((r, i) => <li key={i}>{"⭐".repeat(r.rating)} - {r.text}</li>)}
        </ul>
      }
      <div className="review-form">
        <select value={rating} onChange={(e) => setRating(parseInt(e.target.value || "0"))}>
          <option value="0">Pilih bintang</option>
          <option value="1">⭐ 1</option>
          <option value="2">⭐⭐ 2</option>
          <option value="3">⭐⭐⭐ 3</option>
          <option value="4">⭐⭐⭐⭐ 4</option>
          <option value="5">⭐⭐⭐⭐⭐ 5</option>
        </select>
        <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Tulis ulasan..." />
        <button onClick={submit}>Kirim</button>
      </div>
    </div>
  );
}
