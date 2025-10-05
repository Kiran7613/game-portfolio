import React from "react";
import PreMid from "./assets/storyboards/preMidScene.png";
import MidBomb from "./assets/storyboards/midBombBlast.png";
import PreClimax from "./assets/cinematic/preClimax.png";
import Climax from "./assets/cinematic/climax.png";

export default function App() {
  return (
    <><div className="h-screen flex flex-col justify-center items-center bg-gradient-to-b from-black to-gray-900 text-center">
      <h1 className="text-6xl font-extrabold mb-6 text-white tracking-widest">
        Veil of Fate
      </h1>
      <p className="text-lg text-gray-300 max-w-2xl mb-8">
        A story-driven crime thriller that blurs the line between loyalty and deception.
      </p>
      <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full text-lg shadow-lg transition-all">
        Watch Teaser
      </button>
    </div><div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center gap-6 p-10">
        <h1 className="text-4xl font-bold mb-4">🎮 Veil of Fate: Scene Preview</h1>
        <p className="text-lg text-gray-300 mb-6 text-center max-w-xl">
          A cinematic journey through the story of “Veil of Fate”. Below are key storyboards and
          cinematic frames from the upcoming game.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
          <div className="flex flex-col items-center">
            <img src={PreMid} alt="Pre Mid Scene" className="rounded-2xl shadow-lg w-full h-auto" />
            <p className="mt-2 text-gray-400">Pre-Mid Scene</p>
          </div>

          <div className="flex flex-col items-center">
            <img src={MidBomb} alt="Mid Bomb Blast" className="rounded-2xl shadow-lg w-full h-auto" />
            <p className="mt-2 text-gray-400">Mid Bomb Blast</p>
          </div>

          <div className="flex flex-col items-center">
            <img src={PreClimax} alt="Pre Climax" className="rounded-2xl shadow-lg w-full h-auto" />
            <p className="mt-2 text-gray-400">Pre Climax Scene</p>
          </div>

          <div className="flex flex-col items-center">
            <img src={Climax} alt="Climax" className="rounded-2xl shadow-lg w-full h-auto" />
            <p className="mt-2 text-gray-400">Climax Scene</p>
          </div>
        </div>
        <section className="mt-20 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4">About the Game</h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            “Veil of Fate” is a cinematic story-driven action-thriller game. The player takes on
            the role of an undercover agent navigating betrayal, espionage, and moral choices in a world
            torn by power and corruption. Each mission reveals a deeper layer of conspiracy — until a 
            catastrophic bomb blast changes everything.
          </p>
      </section>


        <section className="mt-20 text-center">
      <h2 className="text-3xl font-semibold mb-4">About the Developer</h2>
      <p className="text-gray-400 max-w-3xl mx-auto text-lg">
        Developed by <span className="text-white font-bold">Vamsi Kiran Kuchibhatla</span>, 
        a passionate game developer specializing in story-based interactive experiences.
        This portfolio highlights cinematic storytelling, scene design, and character-driven narratives.
      </p>
    </section>

    <footer className="mt-16 text-gray-600 text-sm">
      <p>© 2025 Veil of Fate | Portfolio by Vamsi Kiran Kuchibhatla</p>
      <a href="mailto:vamsikirankuchibhatla8093@gmail.com" className="text-red-500 hover:text-red-400">
        Contact Me
      </a>
    </footer>

      </div></>
  );
}
