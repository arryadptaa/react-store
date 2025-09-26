export default function ShippingPage() {
    return (
      <div className="container">
        <h2>Pengiriman</h2>
        <p>Alamat pengiriman sudah diterima.</p>
        <p>Pilih jasa pengiriman:</p>
        <ul>
          <li>JNE - Rp 20.000</li>
          <li>J&T - Rp 22.000</li>
          <li>SiCepat - Rp 18.000</li>
        </ul>
        <button className="btn-add">Konfirmasi Pesanan</button>
      </div>
    );
  }
  