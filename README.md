# 🚀 Proyecto SPA con Vite + Vanilla JS

Aplicación web desarrollada con **JavaScript Vanilla** usando **Vite** como entorno de desarrollo.
Permite autenticación básica, consumo de API externa y gestión de favoritos por usuario.

---

## 🧠 Descripción

Este proyecto es una **Single Page Application (SPA)** que incluye:

* 🔐 Registro e inicio de sesión (usando `localStorage`)
* 🏠 Vista Home con listado de personajes
* 🌐 Consumo de API (Rick & Morty)
* ⭐ Sistema de favoritos por usuario
* 📊 Modal dinámico con detalles y favoritos
* 🎨 Estilos con Tailwind CSS
* 🔔 Alertas con SweetAlert2 (Toast)

---

## 🛠️ Tecnologías utilizadas

* ⚡ Vite
* 🟨 JavaScript (ES Modules)
* 🎨 Tailwind CSS
* 🔔 SweetAlert2
* 🌐 API: https://rickandmortyapi.com/
* 💾 LocalStorage

---

## 📁 Estructura del proyecto

```
src/
│
├── main.js                 # Punto de entrada
├── style.css               # Estilos globales (Tailwind)
│
├── services/               # Lógica de negocio
│   ├── auth.js             # Login / Registro
│   ├── app.js              # Consumo de API
│   └── storage.js          # Manejo de favoritos
│
├── views/                  # Vistas
│   ├── home.js             # Home principal
│   ├── loginViews.js       # Vista login
│   └── components/
│       └── card.js         # Componente de card
│
├── utils/
│   └── alerts.js           # Toast (SweetAlert)
```

---

## ⚙️ Instalación y ejecución

### 1. Clonar el repositorio

```bash
git clone <URL_DEL_REPO>
cd nombre-del-proyecto
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Ejecutar el proyecto

```bash
npm run dev
```

### 4. Abrir en el navegador

```
http://localhost:5173
```

---

## 🔐 Funcionalidades principales

### ✔️ Autenticación

* Registro de usuario
* Login validado
* Persistencia de sesión con `localStorage`

---

### ✔️ Home

* Muestra personajes desde una API
* Render dinámico de cards
* Diseño responsive con Tailwind

---

### ✔️ Favoritos ⭐

* Agregar personajes a favoritos
* Evita duplicados
* Favoritos independientes por usuario
* Contador dinámico

---

### ✔️ Modal

* Ver detalle de personaje
* Ver lista de favoritos en tabla

---

### ✔️ Alertas

* Notificaciones tipo toast
* Éxito / error / advertencia

---

## 💾 Manejo de datos

Los datos se almacenan en `localStorage`:

* `users` → usuarios registrados
* `session` → usuario activo
* `favorites_<email>` → favoritos por usuario

---

## 🧠 Arquitectura

Separación por capas:

```
services → lógica (datos)
views    → interfaz (UI)
main     → flujo principal
utils    → helpers
```

---

## 🚀 Posibles mejoras

* 🔎 Buscador en tiempo real
* 📄 Paginación de API
* ⭐ Eliminar favoritos
* ❤️ Marcar favoritos en las cards
* 🎬 Animaciones UI
* 🔐 Backend real (Node + DB)

---

## 👨‍💻 Autor

Daniel Esteban Osorio David

---

## 📄 Licencia

Este proyecto es de uso educativo.
