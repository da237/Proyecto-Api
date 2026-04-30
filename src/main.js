import './style.css'
import { register, login } from './services/auth'
import { renderLogin } from './views/loginViews'
import { renderHome } from './views/home'
import { success, error } from './utils/alerts'



const app = document.querySelector('#app')

function init() {
  const session = JSON.parse(localStorage.getItem('session'))

  if (session) {
    renderHome(app, session)
  } else {
    renderLogin(app, handleLogin, handleRegister)
  }
}

// 🔐 LOGIN
function handleLogin(email, password) {
  const user = login(email, password)

  if (!user) {
    error('Credenciales incorrectas')
    return
  }

  // guardas sesión
  localStorage.setItem('session', JSON.stringify(user))

  console.log('Login exitoso', user)
  success('Bienvenido 🚀') // 👈 aquí

  // 👉 aquí luego cambias a home
  // renderHome(app, ...)
  renderHome(app, user)
  
}

// 📝 REGISTRO
function handleRegister(email, password) {
  if (!email || !password) {
    alert('Completa todos los campos')
    return
  }

  register({ email, password })
  success('Usuario creado correctamente 🎉')
}

init()