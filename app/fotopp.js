// pages/page.js
import Image from 'next/image';

export default function Page() {
  return (
    <div className="container">
      <div className="profile-pic-wrapper">
        <Image
          src="/rendi.jpeg" // Path relatif ke gambar di folder public
          alt="Foto Profil"
          layout="intrinsic" // Menjaga aspek rasio asli
          width={300} // Lebar gambar
          height={300} // Tinggi gambar akan otomatis menyesuaikan berdasarkan aspek rasio asli
          className="profile-pic"
        />
      </div>
    </div>
  );
}