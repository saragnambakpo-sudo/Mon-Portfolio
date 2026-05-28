import { useState } from "react"; 
import { FaGithub, FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa";
import { BiMessageRounded } from "react-icons/bi";
import { FiMenu, FiX } from "react-icons/fi"; 

function App() {
 
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#050816] text-white overflow-x-hidden">

      {/* BACKGROUND EFFECTS */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-purple-700 opacity-20 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[-100px] right-[-100px] w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-violet-500 opacity-20 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,119,198,0.15),transparent_60%)] pointer-events-none"></div>

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 md:px-20 py-4 bg-[#050816]/80 backdrop-blur-xl border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="bg-purple-600 p-2 md:p-3 rounded-xl">
            <span className="text-white font-bold text-sm md:text-base">{`</>`}</span>
          </div>
          <h1 className="text-xl md:text-2xl font-bold">
            Phos<span className="text-purple-500">.dev</span>
          </h1>
        </div>

        {/* MENU DESKTOP (Inchangé, masqué sur mobile) */}
        <ul className="hidden md:flex items-center gap-8 text-gray-300">
          <li className="bg-purple-600/20 px-5 py-2 rounded-xl text-purple-400 cursor-pointer">Accueil</li>
          <li className="hover:text-purple-400 transition cursor-pointer">Projets</li>
          <li className="hover:text-purple-400 transition cursor-pointer">Blog</li>
          <li className="hover:text-purple-400 transition cursor-pointer">CV</li>
          <li className="hover:text-purple-400 transition cursor-pointer">Contact</li>
        </ul>

        {/* BOUTON LANGUE ET MENU BURGER */}
        <div className="flex items-center gap-4">
          <button className="border border-gray-700 px-3 py-1.5 md:px-4 md:py-2 rounded-xl text-xs md:text-sm hover:border-purple-500 transition">
            EN
          </button>

          {/* Icone Menu Burger : Visible uniquement sur mobile et tablette (md:hidden) */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="md:hidden text-2xl text-gray-300 hover:text-purple-500 transition focus:outline-none"
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* MENU MOBILE OVERLAY : S'affiche uniquement quand isMenuOpen est vrai */}
        <div className={`absolute top-full left-0 w-full bg-[#050816]/95 backdrop-blur-2xl border-b border-white/10 transition-all duration-300 md:hidden flex flex-col items-center gap-6 py-8 text-gray-300 ${isMenuOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-4"}`}>
          <li onClick={() => setIsMenuOpen(false)} className="list-none bg-purple-600/20 px-6 py-2 rounded-xl text-purple-400 cursor-pointer w-[80%] text-center">Accueil</li>
          <li onClick={() => setIsMenuOpen(false)} className="list-none hover:text-purple-400 transition cursor-pointer w-[80%] text-center">Projets</li>
          <li onClick={() => setIsMenuOpen(false)} className="list-none hover:text-purple-400 transition cursor-pointer w-[80%] text-center">Blog</li>
          <li onClick={() => setIsMenuOpen(false)} className="list-none hover:text-purple-400 transition cursor-pointer w-[80%] text-center">CV</li>
          <li onClick={() => setIsMenuOpen(false)} className="list-none hover:text-purple-400 transition cursor-pointer w-[80%] text-center">Contact</li>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative z-10 flex flex-col md:flex-row items-center justify-center md:justify-between px-6 sm:px-12 md:px-20 pt-28 sm:pt-32 md:pt-40 pb-16 gap-10 md:gap-20 text-center md:text-left max-w-7xl mx-auto">
        
        {/* IMAGE CONTENEUR */}
        <div className="relative order-1 md:order-2 flex justify-center w-full md:w-auto">
          <div className="absolute inset-0 bg-purple-600 blur-[80px] md:blur-[100px] opacity-40 rounded-full"></div>
          
          <div className="relative w-[260px] h-[260px] sm:w-[300px] sm:h-[300px] md:w-[410px] md:h-[410px] rounded-[40px] overflow-hidden border border-purple-500 shadow-2xl shadow-purple-900/40 animate-float hover:[animation-play-state:paused] transition duration-500">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop"
              alt="profile"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute bottom-3 right-[10%] md:-right-5 bg-[#111827] border border-gray-700 px-4 py-2 rounded-2xl z-20 text-xs sm:text-sm">
            <p className="text-purple-400 font-bold">{"<dev />"}</p>
          </div>
        </div>

        {/* TEXTE CONTENEUR */}
        <div className="max-w-2xl order-2 md:order-1 flex flex-col items-center md:items-start w-full">
          
          <div className="inline-flex items-center gap-3 border border-gray-700 bg-white/5 px-4 py-1.5 rounded-full mb-6 text-xs sm:text-sm max-w-full">
            <div className="w-2.5 h-2.5 bg-green-400 rounded-full shrink-0"></div>
            <p className="text-gray-300 truncate">Étudiante en Informatique de Gestion</p>
          </div>

          <p className="text-gray-400 text-base sm:text-xl mb-1">Hello, moi c'est</p>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4">
            <span className="text-white">Phoebe </span>
            <span className="text-purple-500">Sara</span>
          </h1>

          <h2 className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-4 max-w-xl font-medium px-2 md:px-0">
            Développeuse Fullstack +UX Designer. Je traduis des idées de design en applications web modernes, interactives et performantes.
          </h2>

          <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed mb-8 max-w-xl px-4 md:px-0">
            Étudiante passionnée et développeuse rigoureuse, j'aime concevoir 
            des solutions numériques de bout en bout. Mon terrain de jeu ? 
            Le frontend avec React.js et Tailwind CSS, combiné à la puissance de Laravel pour le backend.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-6 sm:px-0">
            <button className="bg-purple-600 hover:bg-purple-700 transition px-8 py-4 rounded-2xl font-medium shadow-lg shadow-purple-900/40 text-sm sm:text-base whitespace-nowrap">
              Voir mes projets
            </button>
            <button className="border border-gray-600 hover:border-purple-500 hover:bg-purple-500/10 transition px-8 py-4 rounded-2xl font-medium text-sm sm:text-base whitespace-nowrap">
              Télécharger mon CV
            </button>
          </div>

          {/* SOCIALS */}
          <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 mt-10 w-full">
            {[
              { icon: <FaGithub />, url: "https://github.com/saragnambakpo-sudo" },
              { icon: <FaLinkedinIn />, url: "https://www.linkedin.com/in/phoebe-sara-gnambakpo-234871349" },
              { icon: <FaInstagram />, url: "#" },
              { icon: <FaFacebookF />, url: "https://www.facebook.com/sara.gnambakpo" },
              { icon: <BiMessageRounded />, url: "#" }
            ].map((social, index) => (
              <a key={index} href={social.url} target="_blank" rel="noreferrer" className="w-12 h-12 border border-white/10 rounded-2xl flex items-center justify-center hover:border-purple-500 hover:bg-purple-500/10 transition text-lg text-gray-300">
                {social.icon}
              </a>
            ))}
          </div>

          {/* STATS */}
          <div className="grid grid-cols-3 gap-4 sm:gap-16 mt-12 w-full max-w-md md:max-w-none border-t border-white/5 pt-8 md:border-0 md:pt-0">
            <div>
              <h2 className="text-2xl sm:text-4xl font-bold text-purple-500">6+</h2>
              <p className="text-gray-400 text-xs sm:text-sm mt-1">Projets</p>
            </div>
            <div>
              <h2 className="text-2xl sm:text-4xl font-bold text-purple-500">18+</h2>
              <p className="text-gray-400 text-xs sm:text-sm mt-1">Mois d'exp.</p>
            </div>
            <div>
              <h2 className="text-2xl sm:text-4xl font-bold text-purple-500">12+</h2>
              <p className="text-gray-400 text-xs sm:text-sm mt-1">Techs</p>
            </div>
          </div>

        </div>

      </section>
    </div>
  );
}

export default App;