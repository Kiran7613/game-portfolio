import React from "react";

const scenes = [
  {
    id: 1,
    title: "Villain’s Revelation",
    description: "A tense pre-mid scene where the villain reveals his face to the protagonist — the turning point of loyalty and deception.",
    image: "/src/assets/storyboards/preMidScene.png",
  },
  {
    id: 2,
    title: "Bomb Blast",
    description: "The catastrophic explosion leaves the protagonist injured, marking the chaos of betrayal and awakening.",
    image: "/src/assets/storyboards/midBombBlast.png",
  },
  {
    id: 3,
    title: "Pre-Climax",
    description: "The protagonist investigates the aftermath, piecing together fragments of truth amid destruction.",
    image: "/src/assets/cinematic/preClimax.png",
  },
  {
    id: 4,
    title: "Climax",
    description: "The final battle — intense, emotional, and cinematic — the protagonist faces his ultimate foe.",
    image: "/src/assets/cinematic/climax.png",
  },
];

export default function Storyboard() {
  return (
    <section className="bg-gradient-to-b from-gray-900 to-black py-20 text-white">
      <h2 className="text-center text-4xl font-extrabold mb-12 tracking-wide">
        Cinematic Storyboard
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-6xl mx-auto px-6">
        {scenes.map((scene) => (
          <div
            key={scene.id}
            className="relative group overflow-hidden rounded-2xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl"
          >
            <img
              src={scene.image}
              alt={scene.title}
              className="w-full h-80 object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
              <h3 className="text-2xl font-semibold mb-2">{scene.title}</h3>
              <p className="text-sm text-gray-300">{scene.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
