import { getCharacters } from '../services/app'
import { createCard } from './components/card'
import { addCharacter,getFavorites  } from '../services/storage'

export async function renderHome(container, user) {
  container.innerHTML = `
    <div class="min-h-screen bg-gradient-to-br from-slate-900 to-slate-700 text-white p-6">
      
      <!-- HEADER -->
      <div class="flex justify-between items-center mb-6">
        <h1 class="text-xl font-bold">Bienvenido ${user.email}</h1>

        <div class="flex items-center gap-4">
          <div id="favCounter" class="bg-yellow-400 text-black px-3 py-1 rounded-full font-bold">
            ⭐ 0
          </div>

          <button id="showFavorites" class="bg-yellow-400 text-black px-4 py-2 rounded-lg">
            Ver favoritos
          </button>

          <button id="logout" class="bg-red-500 px-4 py-2 rounded-lg">
            Cerrar sesión
          </button>
        </div>
      </div>

      <!-- GRID -->
      <div id="grid" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"></div>

      <!-- MODAL -->
      <div id="modal" class="fixed inset-0 bg-black/70 hidden items-center justify-center">
        <div class="bg-white text-black p-6 rounded-xl max-w-md w-full relative">
          
          <button id="closeModal" class="absolute top-2 right-3 text-xl">✖</button>

          <div id="modalContent"></div>

        </div>
      </div>

    </div>
  `

  const grid = document.querySelector('#grid')

  // 🔥 consumir API
  const characters = await getCharacters()

  // 🎴 pintar cards
  grid.innerHTML = characters.map(c => createCard(c)).join('')

  // ⭐ contador inicial
  updateFavoritesCounter(user.email)

  // 🔥 EVENT DELEGATION
  grid.addEventListener('click', (e) => {

    // ⭐ agregar a favoritos
    if (e.target.classList.contains('add-favorite')) {
      e.stopPropagation()

      const card = e.target.closest('.card')
      const id = card.dataset.id

      const added = addCharacter(id, user.email)

      if (added) {
        updateFavoritesCounter(user.email)
      }

      return
    }

    // 📦 click en card (detalle)
    const card = e.target.closest('.card')
    if (!card) return

    const id = card.dataset.id
    const character = characters.find(c => c.id == id)

    openDetailModal(character)
  })

  // 👁️ ver favoritos
  document.querySelector('#showFavorites').addEventListener('click', () => {
    openFavoritesModal(characters, user.email)
  })

  // 🔓 LOGOUT
  document.querySelector('#logout').addEventListener('click', () => {
    localStorage.removeItem('session')
    location.reload()
  })

  // ❌ cerrar modal
  document.addEventListener('click', (e) => {
    if (e.target.id === 'closeModal' || e.target.id === 'modal') {
      const modal = document.querySelector('#modal')
      modal.classList.add('hidden')
      modal.classList.remove('flex')
    }
  })
}


// ⭐ contador favoritos
function updateFavoritesCounter(userEmail) {
  const favorites = getFavorites(userEmail)
  const counter = document.querySelector('#favCounter')
  counter.textContent = `⭐ ${favorites.length}`
}


// 🔥 MODAL DETALLE
function openDetailModal(character) {
  const modal = document.querySelector('#modal')
  const content = document.querySelector('#modalContent')

  content.innerHTML = `
    <img src="${character.image}" class="w-full rounded mb-4" />

    <h2 class="text-xl font-bold mb-2">${character.name}</h2>

    <p><strong>Especie:</strong> ${character.species}</p>
    <p><strong>Estado:</strong> ${character.status}</p>
    <p><strong>Género:</strong> ${character.gender}</p>
    <p><strong>Origen:</strong> ${character.origin.name}</p>
  `

  modal.classList.remove('hidden')
  modal.classList.add('flex')
}


// ⭐ MODAL FAVORITOS
function openFavoritesModal(characters, userEmail) {
  const modal = document.querySelector('#modal')
  const content = document.querySelector('#modalContent')

  const favorites = getFavorites(userEmail)

  const favCharacters = characters.filter(c =>
    favorites.includes(String(c.id))
  )

  if (favCharacters.length === 0) {
    content.innerHTML = `<p class="text-center">No tienes favoritos aún</p>`
  } else {
    content.innerHTML = `
      <h2 class="text-xl font-bold mb-4">Favoritos ⭐</h2>

      <table class="w-full border border-gray-300">
        <thead>
          <tr class="bg-gray-200">
            <th class="p-2 border">Nombre</th>
          </tr>
        </thead>
        <tbody>
          ${favCharacters.map(c => `
            <tr>
              <td class="p-2 border">${c.name}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    `
  }

  modal.classList.remove('hidden')
  modal.classList.add('flex')
}