"use client";

import { useState, useEffect } from "react";
import Image from 'next/image';
import { FaHome, FaUser, FaCode, FaTools, FaBriefcase, FaEnvelope, FaStar , FaGamepad, FaMoon, FaSun } from "react-icons/fa";
import { FaWhatsapp, FaInstagram } from "react-icons/fa"; // Tambahkan import icon
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [page, setPage] = useState("home");
  const [theme, setTheme] = useState("light");

  // Toggle Tema
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    document.body.className = theme === "dark" ? "dark-mode" : "light";
  }, [theme]);

  const renderPage = () => {
    switch (page) {
      case "about": return <About />;
      case "skills": return <Skills />;
      case "services": return <Services />;
      case "portfolio": return <Portfolio />;
      case "contact": return <Contact />;
      case "Rating": return <Rating />;
      case "mini game": return <MiniGame />;
      default: return <HomePage />;
    }
  };

  return (
    <div>
      {/* Navbar dengan Ikon */}
      <nav style={{ 
        position: "fixed", 
        top: "10px", 
        right: "20px", 
        display: "flex", 
        gap: "15px",
        background: theme === "dark" ? "#222" : "#fff",
        padding: "10px 15px",
        borderRadius: "30px",
        boxShadow: "2px 2px 10px rgba(0,0,0,0.1)"
      }}>
        <button onClick={() => setPage("home")} title="Home"><FaHome size={22} /></button>
        <button onClick={() => setPage("about")} title="About"><FaUser size={22} /></button>
        <button onClick={() => setPage("skills")} title="Skills"><FaCode size={22} /></button>
        <button onClick={() => setPage("services")} title="Services"><FaTools size={22} /></button>
        <button onClick={() => setPage("portfolio")} title="Portfolio"><FaBriefcase size={22} /></button>
        <button onClick={() => setPage("contact")} title="Contact"><FaEnvelope size={22} /></button>
        <button onClick={() => setPage("Rating")} title="Rating">< FaStar size={22} /></button>
        <button onClick={() => setPage("mini game")} title="mini game"><FaGamepad size={22} /></button>
      </nav>

      {/* Konten Halaman */}
      <div>{renderPage()}</div>

      {/* Tombol Toggle Theme */}
      <button 
        onClick={toggleTheme} 
        style={{
          position: "fixed", 
          bottom: "20px", 
          right: "20px", 
          padding: "10px", 
          backgroundColor: theme === "dark" ? "#f4a261" : "#333", 
          color: theme === "dark" ? "black" : "white", 
          border: "none", 
          borderRadius: "50%", 
          cursor: "pointer"
        }}
      >
        {theme === "light" ? <FaMoon size={22} /> : <FaSun size={22} />}
      </button>
    </div>
  );
}

/* About Me */
function About() {
  return (
    <div 
      style={{ 
        display: "flex", 
        flexDirection: "column", 
        justifyContent: "center", 
        alignItems: "center", 
        height: "100vh",
        textAlign: "center", 
        padding: "50px" 
      }}
    >
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h1>

      <motion.p 
        style={{ maxWidth: "600px", marginTop: "20px" }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Hai! Saya Rendi Maryandi, salah satu Mahasiswa Universitas Ma'soem, yang aktif bermain futsal di SMA hingga sekarang, saya memiliki ketertarikan bermain futsal dari kecil,
        Dengan mengikuti futsal saya mendapatkan banyak pengalaman dan pembelajaran seperti kerja sama tim yang harus kompak, serta memperbaiki kesalahan agar menjadi lebih baik.
      </motion.p>
    </div>
  );
}


/* Skills */
function Skills() {
  const [selectedSkill, setSelectedSkill] = useState(null);

  const skills = [
    { name: "Microsoft Excel", description: "Mahasiswa dapat menggunakan Microsoft Excel untuk menghitung dengan rumus dasar, membuat tabel untuk mengorganisir data, dan membuat grafik sederhana untuk visualisasi informasi." },
    { name: "Akuntansi Dasar", description: "Mahasiswa memiliki pemahaman dasar tentang proses akuntansi, seperti pencatatan transaksi keuangan, pengelolaan buku kas, dan menyusun laporan keuangan sederhana" },
    { name: "Pengolahan Data", description: "Mahasiswa memiliki kemampuan untuk mengelola dan menganalisis data menggunakan software seperti Excel atau Google Sheets, serta menghasilkan laporan yang berguna dari data tersebut." },
    { name: "Pemrograman Dasar", description: "Mahasiswa memahami konsep-konsep dasar dalam pemrograman komputer, termasuk penggunaan variabel, struktur pengkondisian, dan perulangan dalam bahasa pemrograman sederhana.." },
    { name: "Software Akuntansi", description: "Mahasiswa dapat menggunakan software akuntansi dasar untuk mencatat transaksi, membuat laporan keuangan, serta mengelola data keuangan secara efektif." }  ];

  return (
    <div style={{ 
      display: "flex", 
      flexDirection: "column",
      alignItems: "center", 
      justifyContent: "center", 
      minHeight: "100vh", 
      textAlign: "center", 
      padding: "50px"
    }}>
      <h1>Skills</h1>
      <div style={{ 
        display: "flex", 
        justifyContent: "center", 
        gap: "15px", 
        flexWrap: "wrap",
        maxWidth: "600px"
      }}>
        {skills.map((skill, index) => (
          <button 
            key={index} 
            onClick={() => setSelectedSkill(skill)} 
            style={{ 
              padding: "12px 20px", 
              cursor: "pointer", 
              borderRadius: "5px", 
              border: "1px solid #333",
              background: "#D3D3D3",
              transition: "0.3s"
            }}
          >
            {skill.name}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {selectedSkill && (
          <motion.div
            key={selectedSkill.name}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}
            style={{ 
              marginTop: "20px", 
              padding: "20px", 
              background: "#D3D3D3", 
              borderRadius: "10px",
              maxWidth: "500px"
            }}
          >
            <h3>{selectedSkill.name}</h3>
            <p>{selectedSkill.description}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}



/* Services */
function Services() {
  const services = [
    { icon: '📊', text: 'Mahasiswa dapat menggunakan Microsoft Excel untuk menghitung dengan rumus dasar, membuat tabel untuk mengorganisir data, dan membuat grafik sederhana untuk visualisasi informasi.' },
    { icon: '📚', text: 'Mahasiswa memiliki pemahaman dasar tentang proses akuntansi, seperti pencatatan transaksi keuangan, pengelolaan buku kas, dan menyusun laporan keuangan sederhana.' },
    { icon: '📝', text: 'Mahasiswa memiliki kemampuan untuk mengelola dan menganalisis data menggunakan software seperti Excel atau Google Sheets, serta menghasilkan laporan yang berguna dari data tersebut.' },
    { icon: '💻', text: 'Mahasiswa memahami konsep-konsep dasar dalam pemrograman komputer, termasuk penggunaan variabel, struktur pengkondisian, dan perulangan dalam bahasa pemrograman sederhana.' },
    { icon: '🧾', text: 'Mahasiswa dapat menggunakan software akuntansi dasar untuk mencatat transaksi, membuat laporan keuangan, serta mengelola data keuangan secara efektif.' }
  ];

  return (
    <div className="h-screen w-full flex items-center justify-center px-6 pt-24 bg-gradient-to-b from-white to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-2xl text-center"
      >
        <h1 className="text-4xl font-bold mb-4 text-slate-800 dark:text-white">Layanan</h1>
        <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
          Saya menawarkan layanan teknologi inovatif, termasuk:
        </p>
        <ul className="space-y-4">
          {services.map((service, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="bg-white/80 dark:bg-slate-700/60 shadow-md rounded-2xl px-6 py-6 text-lg flex flex-col items-center justify-center text-center backdrop-blur-sm"
            >
              <span className="text-3xl mb-2">{service.icon}</span>
              <span>{service.text}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}

/* Portfolio */
function Portfolio() {
  const project = {
    title: "Sebagai pemain futsal Universitas Ma'soem",
    description:
      "",
    images: ["/20231.jpeg", "/2023.jpeg", "/2024.jpeg"],
  };

  return (
    <div
      style={{
        textAlign: "center",
        padding: "100px 20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <h1 style={{ marginBottom: "20px" }}>Portfolio</h1>
      <div
        className="grid-item"
        style={{
          maxWidth: "900px",
          border: "1px solid #ddd",
          borderRadius: "10px",
          padding: "20px",
          boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.1)",
          backgroundColor: "#fff",
        }}
      >
        <h2>{project.title}</h2>
        <p style={{ margin: "15px 0", color: "#555" }}>{project.description}</p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          {project.images.map((img, i) => (
            <div
              key={i}
              style={{
                width: "280px",
                height: "200px",
                borderRadius: "10px",
                overflow: "hidden",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s, box-shadow 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.03)";
                e.currentTarget.style.boxShadow = "0 6px 16px rgba(0,0,0,0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.1)";
              }}
            >
              <img
                src={img}
                alt={`Foto Carl Johnson ${i + 1}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}



/* Contact */
function Contact() {
  return (
    <div 
      style={{ 
        display: "flex", 
        flexDirection: "column", 
        justifyContent: "center", 
        alignItems: "center", 
        height: "100vh",  
        textAlign: "center", 
        padding: "20px"
      }}
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ fontWeight: "bold", fontSize: "2.5rem", marginBottom: "10px" }}
      >
        Contact
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        style={{ marginBottom: "30px", fontSize: "1.1rem" }}
      >
        Hubungi saya di:
      </motion.p>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        style={{ 
          display: "flex", 
          justifyContent: "center", 
          alignItems: "center",
          gap: "20px", 
          flexWrap: "wrap" 
        }}
      >
        {/* WhatsApp */}
        <motion.div 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{ 
            display: "flex", 
            alignItems: "center", 
            gap: "10px",
            backgroundColor: "#fff",
            padding: "10px 16px",
            borderRadius: "10px",
            boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
          }}
        >
          <FaWhatsapp size={24} color="#25D366" />
          <span>082118661931</span>
        </motion.div>

        {/* Instagram */}
        <motion.div 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{ 
            display: "flex", 
            alignItems: "center", 
            gap: "10px",
            backgroundColor: "#fff",
            padding: "10px 16px",
            borderRadius: "10px",
            boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
          }}
        >
          <FaInstagram size={24} color="#C21807" />
          <a 
            href="https://www.instagram.com/rendyymr_" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{ textDecoration: "none", color: "#030406" }}
          >
            @rendyymr_  
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
}




/*Rating*/
function Rating() {
  const [rating, setRating] = useState(null);
  const [savedRating, setSavedRating] = useState(null);

  const icons = [
    "😢", "😟", "😕", "😐", "🙂", "😊", "😀", "😄", "😁", "🤩"
  ];

  useEffect(() => {
    const stored = localStorage.getItem("userRating");
    if (stored) setSavedRating(parseInt(stored));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rating !== null) {
      localStorage.setItem("userRating", rating);
      setSavedRating(rating);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        paddingTop: "100px", // offset dari navbar
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: "50px",
        textAlign: "center",
      }}
    >
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-bold mb-4"
      >
        Ayo Kasih Rating
      </motion.h2>

      <form onSubmit={handleSubmit}>
        <div style={{ display: "flex", justifyContent: "center", gap: "10px", flexWrap: "wrap" }}>
          {[...Array(10)].map((_, i) => (
            <motion.button
              key={i}
              type="button"
              onClick={() => setRating(i + 1)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              style={{
                padding: "10px",
                fontSize: "24px",
                borderRadius: "10px",
                border: rating === i + 1 ? "2px solid #0070f3" : "1px solid #ccc",
                background: rating === i + 1 ? "#e0f0ff" : "#fff",
                cursor: "pointer",
              }}
            >
              {icons[i]}
              <div style={{ fontSize: "12px" }}>{i + 1}</div>
            </motion.button>
          ))}
        </div>

        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            backgroundColor: "#0070f3",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
          disabled={rating === null}
        >
          Simpan Rating
        </motion.button>
      </form>

      {savedRating && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ marginTop: "30px", fontSize: "20px" }}
        >
          <p>
            Rating yang kamu pilih: <strong>{savedRating}</strong> {icons[savedRating - 1]}
          </p>
        </motion.div>
      )}
    </div>
  );
}


/*mini game*/
const images = [
  { src: '/ls1.jpg', answer: 'ls1' },
  { src: '/ls2.jpg', answer: 'ls2' },
  { src: '/ls20.jpg', answer: 'ls20' },
];

function MiniGame() {
  const [index, setIndex] = useState(0);
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');

  const handleGuess = () => {
    if (guess.toLowerCase().trim() === images[index].answer) {
      setMessage('Benar!');
      setTimeout(() => {
        setIndex((index + 1) % images.length);
        setGuess('');
        setMessage('');
      }, 1000);
    } else {
      setMessage('Salah, coba lagi!');
    }
  };

  return (
    <div className="container">
      <h1>Mini Game: Tebak Gambar</h1>
      <div className="image-container">
        <img src={images[index].src} alt="tebak" className="guess-image" />
      </div>
      <input
        type="text"
        placeholder="Tebakan kamu..."
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        className="input"
      />
      <button className="button" onClick={handleGuess}>Tebak</button>
      {message && <p className="message">{message}</p>}
    </div>
  );
}


/* Home Page */
function HomePage() {
  return (
    <div style={{ 
      textAlign: "center", 
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center", 
      justifyContent: "center",
      minHeight: "100vh", 
      paddingTop: "100px"
    }}>
      <motion.div 
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        whileHover={{ scale: 1.05 }}
        style={{ 
          width: "150px", 
          height: "150px", 
          borderRadius: "50%", 
          overflow: "hidden", 
          marginBottom: "20px",
          border: "3px solid #333" 
        }}
      >
        <Image 
          src="/rendy.jpeg" 
          alt="Rendi Maryandi" 
          width={150} 
          height={150} 
          style={{ objectFit: "cover", width: "100%", height: "100%" }} 
        />
      </motion.div>
      
      <h1>Hai, Saya Rendi Maryandi!</h1>
      <p>Mahasiswa Fakultas Komputer dengan fokus pada Komputerisasi Akuntansi.</p>
    </div>
  );
}