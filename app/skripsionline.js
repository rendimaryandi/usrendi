'use client'; // Menandakan bahwa ini adalah komponen klien

import { useState, useEffect } from 'react';

export default function Home() {
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const stickyPosition = document.querySelector('.sticky-heading')?.offsetTop;

    if (stickyPosition && scrollPosition >= stickyPosition) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div style={{ paddingTop: '60px', backgroundColor: '#fafafa', color: '#333' }}>
      {/* Navbar */}
      <nav style={{
        backgroundColor: '#333', 
        color: 'white', 
        padding: '15px 30px', 
        position: 'fixed', 
        top: 0, 
        width: '100%', 
        zIndex: 1000, 
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)'
      }}>
        <h1 style={{ margin: 0, fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>Skripsi Online</h1>
      </nav>

      {/* Konten Skripsi */}
      <main style={{ marginTop: '120px', padding: '30px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <section style={{ marginBottom: '60px' }}>
          <h2 className={`sticky-heading ${isSticky ? 'sticky' : ''}`}>Bab 1 - Pendahuluan</h2>
          <div className="content">
            <p>
              Bab ini memberikan gambaran umum mengenai topik yang akan dibahas dalam penelitian. Pendahuluan ini menjelaskan latar belakang masalah, tujuan penelitian, serta manfaat yang diharapkan dari penelitian yang dilakukan.
            </p>
            <p>
              Penelitian ini bertujuan untuk menganalisis pengaruh teknologi terhadap perkembangan ekonomi di negara berkembang. Selain itu, bab ini juga mencakup rumusan masalah yang ingin dijawab dalam penelitian ini.
            </p>
          </div>
        </section>

        <section style={{ marginBottom: '60px' }}>
          <h2 className={`sticky-heading ${isSticky ? 'sticky' : ''}`}>Bab 2 - Tinjauan Pustaka</h2>
          <div className="content">
            <p>
              Bab ini membahas teori-teori yang relevan dengan topik penelitian. Tinjauan pustaka ini menyajikan penelitian-penelitian sebelumnya yang dapat mendukung atau membantah temuan penelitian yang akan dilakukan.
            </p>
            <p>
              Beberapa teori yang dibahas dalam bab ini meliputi teori pertumbuhan ekonomi, teori teknologi informasi, dan konsep-konsep terkait dengan ekonomi digital. Selain itu, bab ini juga membahas perkembangan terkini dalam teknologi yang relevan.
            </p>
          </div>
        </section>

        <section style={{ marginBottom: '60px' }}>
          <h2 className={`sticky-heading ${isSticky ? 'sticky' : ''}`}>Bab 3 - Metodologi Penelitian</h2>
          <div className="content">
            <p>
              Bab ini menjelaskan metode penelitian yang digunakan untuk mengumpulkan data dan menganalisis informasi yang relevan dengan topik penelitian. Metode yang digunakan dapat berupa kuantitatif atau kualitatif, tergantung pada tujuan penelitian.
            </p>
            <p>
              Penelitian ini menggunakan metode survei dengan pengambilan sampel acak dari masyarakat yang tinggal di kota besar. Data yang dikumpulkan akan dianalisis menggunakan teknik statistik untuk menentukan hubungan antara penggunaan teknologi dan pertumbuhan ekonomi.
            </p>
          </div>
        </section>

        <section style={{ marginBottom: '60px' }}>
          <h2 className={`sticky-heading ${isSticky ? 'sticky' : ''}`}>Bab 4 - Hasil dan Pembahasan</h2>
          <div className="content">
            <p>
              Bab ini memaparkan hasil dari penelitian yang telah dilakukan. Data yang terkumpul akan dipresentasikan dalam bentuk tabel, grafik, dan analisis statistik untuk mendukung temuan-temuan yang diperoleh.
            </p>
            <p>
              Hasil penelitian menunjukkan bahwa terdapat hubungan positif antara tingkat penggunaan teknologi dengan pertumbuhan ekonomi di negara berkembang. Pembahasan dalam bab ini juga menyarankan langkah-langkah yang perlu diambil untuk meningkatkan pemanfaatan teknologi dalam ekonomi.
            </p>
          </div>
        </section>

        <section style={{ marginBottom: '60px' }}>
          <h2 className={`sticky-heading ${isSticky ? 'sticky' : ''}`}>Bab 5 - Penutup</h2>
          <div className="content">
            <p>
              Bab terakhir ini menyimpulkan hasil penelitian yang telah dilakukan dan memberikan rekomendasi untuk penelitian lebih lanjut serta implikasi praktis dari temuan yang ada. Bab ini juga membahas keterbatasan penelitian dan saran untuk penelitian yang lebih mendalam di masa depan.
            </p>
            <p>
              Berdasarkan hasil penelitian, disarankan agar pemerintah dan sektor swasta lebih fokus dalam meningkatkan infrastruktur teknologi guna mendorong pertumbuhan ekonomi yang berkelanjutan. Penelitian lebih lanjut diperlukan untuk menggali lebih dalam terkait faktor-faktor yang mempengaruhi dampak teknologi pada ekonomi.
            </p>
          </div>
        </section>
      </main>

      <style jsx>{`
        .sticky-heading {
          position: relative;
          transition: top 0.3s;
          background-color: #ff7f50; /* Warna coral untuk sticky header */
          color: white;
          padding: 12px 20px;
          border-radius: 5px;
          font-family: 'Arial', sans-serif;
          font-size: 24px;
          margin-bottom: 20px;
        }

        .sticky {
          position: sticky;
          top: 80px; /* Menempatkan sticky lebih rendah agar lebih jelas */
          background-color: #ff5722; /* Warna lebih gelap saat sticky */
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
          z-index: 10;
        }

        .content {
          background-color: white;
          color: #333;
          padding: 25px;
          border-radius: 10px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          line-height: 1.6;
        }
      `}</style>
    </div>
  );
}
