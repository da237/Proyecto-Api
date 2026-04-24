export function renderLogin(container, onLogin, onRegister) {
    container.innerHTML = `
    <div class="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-slate-900 to-slate-700">

      <div class="
        w-full 
        max-w-md 
        sm:max-w-lg 
        bg-white/10 
        backdrop-blur-lg 
        p-6 sm:p-8 
        rounded-2xl 
        shadow-2xl 
        border border-white/20
      ">

        <h2 class="text-2xl sm:text-3xl font-bold text-white text-center mb-2">
          Bienvenido
        </h2>

        <p class="text-gray-300 text-center mb-6 text-sm sm:text-base">
          Ingresa a tu cuenta
        </p>

        <div class="space-y-4 sm:space-y-5">

          <!-- Email -->
          <div class="relative">
            <span class="absolute left-3 top-2.5 text-gray-400">📧</span>
            <input 
              id="email"
              type="email"
              placeholder="Correo electrónico"
              class="w-full pl-10 pr-4 py-2.5 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
            >
          </div>

          <!-- Password -->
          <div class="relative">
            <span class="absolute left-3 top-2.5 text-gray-400">🔒</span>
            <input 
              id="password"
              type="password"
              placeholder="Contraseña"
              class="w-full pl-10 pr-10 py-2.5 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
            >
            <button id="togglePass" class="absolute right-3 top-2.5 text-gray-300">👁️</button>
          </div>

          <!-- Error -->
          <p id="error" class="text-red-400 text-sm hidden"></p>

          <!-- Login -->
          <button 
            id="btnLogin"
            class="w-full bg-blue-500 hover:bg-blue-600 transition text-white py-2.5 rounded-lg font-semibold shadow-lg text-sm sm:text-base"
          >
            Ingresar
          </button>

          <!-- Register -->
          <p class="text-center text-gray-300 text-xs sm:text-sm">
            ¿No tienes cuenta?
            <button id="btnRegister" class="text-blue-400 hover:underline ml-1">
              Crear una
            </button>
          </p>

        </div>
      </div>
    </div>
  `

    const emailInput = document.querySelector('#email')
    const passInput = document.querySelector('#password')
    const error = document.querySelector('#error')

    // 👁️ Mostrar contraseña
    document.querySelector('#togglePass').addEventListener('click', () => {
        passInput.type = passInput.type === 'password' ? 'text' : 'password'
    })

    // 🔐 Login
    document.querySelector('#btnLogin').addEventListener('click', () => {
        const email = emailInput.value.trim()
        const password = passInput.value.trim()

        if (!email || !password) {
            error.textContent = 'Todos los campos son obligatorios'
            error.classList.remove('hidden')
            return
        }

        error.classList.add('hidden')
        onLogin(email, password)
    })

    // 📝 Registro
    document.querySelector('#btnRegister').addEventListener('click', () => {
        const email = emailInput.value.trim()
        const password = passInput.value.trim()

        if (!email || !password) {
            error.textContent = 'Completa los campos'
            error.classList.remove('hidden')
            return
        }

        error.classList.add('hidden')
        onRegister(email, password)
    })
}