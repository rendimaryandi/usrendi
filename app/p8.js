import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-800 to-blue-600 flex flex-col items-center text-gray-100">

      {/* Navbar dengan Rounded dan Highlight Aktif */}
      <nav className="w-full max-w-4xl bg-gray-900 bg-opacity-70 backdrop-blur-md rounded-full shadow-lg flex justify-center space-x-6 p-4 mt-8">
        <a href="#home" className="px-6 py-2 rounded-full bg-blue-500 text-white font-semibold transition transform hover:scale-105">
          Home
        </a>
        <a href="#about" className="px-6 py-2 rounded-full text-gray-100 hover:bg-blue-400 hover:text-white transition duration-300">
          About
        </a>
        <a href="#projects" className="px-6 py-2 rounded-full text-gray-100 hover:bg-blue-400 hover:text-white transition duration-300">
          Projects
        </a>
        <a href="#skills" className="px-6 py-2 rounded-full text-gray-100 hover:bg-blue-400 hover:text-white transition duration-300">
          Skills
        </a>
        <a href="#experience" className="px-6 py-2 rounded-full text-gray-100 hover:bg-blue-400 hover:text-white transition duration-300">
          Experience
        </a>
        <a href="#contact" className="px-6 py-2 rounded-full text-gray-100 hover:bg-blue-400 hover:text-white transition duration-300">
          Contact
        </a>
      </nav>

      {/* Hero Section */}
      <div id="home" className="text-center mt-12">
        <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">
          Hello, I'm Rendi!
        </h2>

        {/* Gambar Profil */}
        <div className="flex justify-center items-center mt-6">
          <Image
            src="/rendi.jpeg"
            alt="Profile"
            width={180}
            height={180}
            className="rounded-full border-4 border-white shadow-xl"
          />
        </div>

        <p className="mt-6 text-lg max-w-xl mx-auto text-gray-200 font-medium">
          Saya seorang mahasiswa Komputerisasi Akuntansi dengan minat dalam pengembangan web dan analisis data. Saya suka menciptakan solusi teknologi yang dapat membantu memecahkan masalah dunia nyata.
        </p>

        {/* Button Action */}
        <div className="mt-8">
          <a href="#contact" className="px-8 py-3 bg-orange-500 text-white font-semibold rounded-full text-lg hover:bg-orange-600 transition duration-300">
            Get In Touch
          </a>
        </div>
      </div>
    </div>
  );
}
