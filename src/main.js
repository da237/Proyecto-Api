import './style.css'
import { register, login } from './services/auth'
import { renderLogin } from './views/loginViews'

// (cuando hagas el home lo importas)
// import { renderHome } from './views/homeView'

const app = document.querySelector('#app')

function init() {
  renderLogin(app, handleLogin, handleRegister)
}

// 🔐 LOGIN
function handleLogin(email, password) {
  const user = login(email, password)

  if (!user) {
    alert('Credenciales incorrectas')
    return
  }

  // guardas sesión
  localStorage.setItem('session', JSON.stringify(user))

  console.log('Login exitoso', user)

  // 👉 aquí luego cambias a home
  // renderHome(app, ...)
}

// 📝 REGISTRO
function handleRegister(email, password) {
  if (!email || !password) {
    alert('Completa todos los campos')
    return
  }

  register({ email, password })
  alert('Usuario creado correctamente')
}

init()