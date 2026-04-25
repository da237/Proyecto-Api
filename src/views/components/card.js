// views/components/card.js

export function createCard(character) {
  return `
    <div class="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20 shadow-lg">
      
      <img src="${character.image}" alt="${character.name}" 
        class="w-full h-40 object-cover rounded-lg mb-3" />

      <h3 class="text-lg font-bold">${character.name}</h3>
      
      <p class="text-sm text-gray-300">
        ${character.species}
      </p>

    </div>
  `
}