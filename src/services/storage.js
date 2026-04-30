import { getCharacters } from '../services/app'

// export async function addCharacter(id) {
//   const characters = await getCharacters()
//   const character = characters.find(c => c.id == id)

//   const favorites = JSON.parse(localStorage.getItem('favorites')) || []

//   // 🚫 evitar duplicados
//   const exists = favorites.some(f => f.id == id)
//   if (exists) {
//     alert('Ya está en favoritos ⚠️')
//     return
//   }

//   favorites.push(character)

//   localStorage.setItem('favorites', JSON.stringify(favorites))
// }

import { success, error } from '../utils/alerts'

export function addCharacter(id, userEmail) {
  const key = `favorites_${userEmail}`

  const favorites = JSON.parse(localStorage.getItem(key)) || []

  if (favorites.includes(String(id))) {
    error('Ya está en favoritos ⚠️')
    return false 
  }

  favorites.push(String(id))
  localStorage.setItem(key, JSON.stringify(favorites))

  success('Agregado a favoritos ⭐')
  return true 
}

export function getFavorites(userEmail) {
  const key = `favorites_${userEmail}`
  return JSON.parse(localStorage.getItem(key)) || []
}