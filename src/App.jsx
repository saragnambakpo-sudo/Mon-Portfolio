import {FaGithub,FaLinkedinIn,FaInstagram,FaFacebookF
} from "react-icons/fa";

import { BiMessageRounded } from "react-icons/bi";

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050816] text-white">

      {/* BACKGROUND EFFECTS */}

      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-purple-700 opacity-20 blur-[140px] rounded-full"></div>

      <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-violet-500 opacity-20 blur-[140px] rounded-full"></div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,119,198,0.15),transparent_60%)]"></div>

      {/* NAVBAR */}

      <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 md:px-20 py-2 bg-[#050816]/70 backdrop-blur-xl border-b border-white/10">
        {/* LOGO */}
        <div className="flex items-center gap-3">

          <div className="bg-purple-600 p-3 rounded-xl">
            <span className="text-white font-bold">{`</>`}</span>
          </div>

          <h1 className="text-2xl font-bold">
            Phos<span className="text-purple-500">.dev</span>
          </h1>

        </div>

        {/* MENU */}

        <ul className="hidden md:flex items-center gap-8 text-gray-300">

          <li className="bg-purple-600/20 px-5 py-2 rounded-xl text-purple-400">
            Accueil
          </li>

          <li className="hover:text-purple-400 transition cursor-pointer">
            Projets
          </li>

          <li className="hover:text-purple-400 transition cursor-pointer">
            Blog
          </li>

          <li className="hover:text-purple-400 transition cursor-pointer">
            CV
          </li>

          <li className="hover:text-purple-400 transition cursor-pointer">
            Contact
          </li>

        </ul>

        {/* RIGHT */}

        <div className="flex items-center gap-4">

          <button className="border border-gray-700 px-4 py-2 rounded-xl text-sm hover:border-purple-500 transition">
            EN
          </button>

        </div>

      </nav>

      {/* HERO SECTION */}

      <section className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-between px-8 md:px-20 pt-10 md:pt-24 gap-20">

        {/* LEFT */}

        <div className="max-w-2xl">

          {/* BADGE */}

          <div className="inline-flex items-center gap-3 border border-gray-700 bg-white/5 px-5 py-2 rounded-full mb-8">

            <div className="w-3 h-3 bg-green-400 rounded-full"></div>

            <p className="text-gray-300 text-sm">
              Étudiante en Informatique de Gestion
            </p>

          </div>

          {/* TITLE */}

          <p className="text-gray-400 text-2xl mb-3">
            Hello, moi c'est 
          </p>

          <h1 className="text-6xl md:text-6xl font-bold leading-tight mb-3">

            <span className="text-white">
              Phoebe &nbsp;
            </span>

            <span className="text-purple-500">
               Sara
            </span>

          </h1>

          {/* SUBTITLE */}

          <h2 className="text-2xl text-gray-300 mb-6">
            Développeuse Fullstack +UX Designer. Je traduis des idées de design en applications web modernes, interactives et performantes.          </h2>

          {/* DESCRIPTION */}

          <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-xl">
            Étudiante passionnée et développeuse rigoureuse, j'aime concevoir 
            des solutions numériques de bout en bout. Mon terrain de jeu ? 
            Le frontend avec React.js et Tailwind CSS, combiné à la puissance de Laravel pour le backend. 
            Mon objectif est de créer des expériences utilisateurs 
            fluides sans jamais négliger la performance technique.
          </p>

          {/* BUTTONS */}

          <div className="flex flex-wrap gap-5">

            <button className="bg-purple-600 hover:bg-purple-700 transition px-8 py-4 rounded-2xl font-medium shadow-lg shadow-purple-900/40">

              Voir mes projets

            </button>

            <button className="border border-gray-600 hover:border-purple-500 hover:bg-purple-500/10 transition px-8 py-4 rounded-2xl font-medium">

              Télécharger mon CV

            </button>

          </div>

          {/* SOCIALS */}

          <div className="flex items-center gap-5 mt-12">

            <div className="w-14 h-14 border border-white/10 rounded-2xl flex items-center justify-center hover:border-purple-500 hover:bg-purple-500/10 transition cursor-pointer">

              <FaGithub className="text-xl text-gray-300" />

            </div>

            <div className="w-14 h-14 border border-white/10 rounded-2xl flex items-center justify-center hover:border-purple-500 hover:bg-purple-500/10 transition cursor-pointer">

              <a href="https://www.linkedin.com/in/phoebe-sara-gnambakpo-234871349">
                <FaLinkedinIn className="text-xl text-gray-300" />
              </a> 

            </div>

            <div className="w-14 h-14 border border-white/10 rounded-2xl flex items-center justify-center hover:border-purple-500 hover:bg-purple-500/10 transition cursor-pointer">

              <FaInstagram className="text-xl text-gray-300" />

            </div>

            <div className="w-14 h-14 border border-white/10 rounded-2xl flex items-center justify-center hover:border-purple-500 hover:bg-purple-500/10 transition cursor-pointer">

                <a href="https://www.facebook.com/sara.gnambakpo">
                  <FaFacebookF className="text-xl text-gray-300" />
                </a>

            </div>

            <div className="w-14 h-14 border border-white/10 rounded-2xl flex items-center justify-center hover:border-purple-500 hover:bg-purple-500/10 transition cursor-pointer">

              <BiMessageRounded className="text-xl text-gray-300" />

            </div>

          </div>

          {/* STATS */}

          <div className="flex flex-wrap gap-16 mt-10">

            <div>
              <h2 className="text-4xl font-bold text-purple-500">
                6+
              </h2>

              <p className="text-gray-400 mt-2">
                Projets
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-purple-500">
                18+
              </h2>

              <p className="text-gray-400 mt-2">
                Mois d'expérience
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-purple-500">
                12+
              </h2>

              <p className="text-gray-400 mt-2">
                Technologies
              </p>
            </div>
          </div>

        </div>

        {/* RIGHT */}

        <div className="relative">

          {/* GLOW */}

          <div className="absolute inset-0 bg-purple-600 blur-[100px] opacity-50 rounded-full"></div>

          {/* IMAGE */}

          <div className="relative w-[320px] h-[320px] md:w-[430px] md:h-[430px] rounded-[40px] overflow-hidden border border-purple-500 shadow-2xl shadow-purple-900/40 animate-float hover:[animation-play-state:paused] transition duration-500">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop"
              alt="profile"
              className="w-full h-full object-cover"
            />
          </div>

          {/* SMALL TAG */}
          <div className="absolute bottom-5 -right-5 bg-[#111827] border border-gray-700 px-5 py-3 rounded-2xl z-20">
            <p className="text-purple-400 font-bold">
              {"<dev />"}
            </p>
          </div>

        </div>
      
     

      </section>

    </div>
  )
}

export default App