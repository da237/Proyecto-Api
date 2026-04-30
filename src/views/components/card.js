import { addCharacter } from "../../services/storage"

export function createCard(character) {
  return `
    <div 
      class="card bg-white/10 p-4 rounded-xl cursor-pointer hover:scale-105 transition"
      data-id="${character.id}"
    >
      <img src="${character.image}" class="w-full h-40 object-cover rounded-lg mb-3" />

      <h3 class="text-lg font-bold">${character.name}</h3>
      <p class="text-sm text-gray-300">${character.species}</p>
      boton para añadir a favoritos
      <button class="add-favorite mt-2 px-3 py-1 bg-blue-500 text-white rounded" data-id="${character.id}">
        Añadir a favoritos
      </button>
    </div>
  `
}