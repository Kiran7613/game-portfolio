import Storyboard from "./components/Storyboard";

export default function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-b from-black to-gray-900 text-center">
        <h1 className="text-6xl font-extrabold mb-6 tracking-widest">Veil of Fate</h1>
        <p className="text-lg text-gray-300 max-w-2xl mb-8">
          A story-driven crime thriller where fate and loyalty intertwine.
        </p>
        <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full text-lg shadow-lg transition-all">
          Watch Teaser
        </button>
      </section>

      {/* Storyboard Section */}
      <Storyboard />

      {/* About Section */}
      <section className="mt-20 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4">About the Game</h2>
        <p className="text-gray-400 text-lg leading-relaxed">
          “Veil of Fate” is a cinematic action-thriller built on betrayal, secrets, and redemption.
          Through twenty missions, players uncover the truth behind a global conspiracy.
        </p>
      </section>

      {/* Footer */}
      <footer className="mt-16 py-10 text-center text-gray-500 text-sm">
        <p>© 2025 Veil of Fate | Portfolio by Vamsi Kiran Kuchibhatla</p>
      </footer>
    </div>
  );
}
