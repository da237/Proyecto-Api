import { getCharacters } from '../services/app'
import { createCard } from './components/card'

export async function renderHome(container, user) {
  container.innerHTML = `
    <div class="min-h-screen bg-slate-900 text-white p-6">
      <h1 class="text-2xl mb-6">Bienvenido ${user.email}</h1>

      <div id="grid" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"></div>

      <button id="logout" class="mt-6 bg-red-500 px-4 py-2 rounded">
        Cerrar sesión
      </button>
    </div>
  `

  const grid = document.querySelector('#grid')

  // 🔥 consumir API
  const characters = await getCharacters()

  // 🔁 recorrer y pintar
  characters.forEach(character => {
    grid.innerHTML += createCard(character)
  })

  // logout
  document.querySelector('#logout').addEventListener('click', () => {
    localStorage.removeItem('session')
    location.reload()
  })
}