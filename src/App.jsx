import { BrowserRouter } from "react-router-dom"
import AppRoutes from "./routes/AppRoutes"
import Main from "./components/layouts/Main/Main"
import { NavBar } from "./components/organisms/NavBar/NavBar"

function App() {
  return (      
    <BrowserRouter>
      <NavBar/>
      <Main>
        <AppRoutes/>
      </Main>
      <footer className="bg-gray-800 text-white px-6 py-4">
  <div className="container mx-auto flex flex-wrap justify-between items-center">
    <ul className="w-full sm:w-auto flex flex-col sm:flex-row sm:space-x-12 justify-center">
      <li><a href="/" className="hover:underline">Inicio</a></li>
      <li><a href="/about" className="hover:underline">Sobre nosotros</a></li>
      <li><a href="/services" className="hover:underline">Servicios</a></li>
      <li><a href="/contact" className="hover:underline">Contacto</a></li>
    </ul>
    <div className="mt-4 sm:mt-0 flex space-x-6 justify-center">
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
        <img src="/path/to/facebook-icon.svg" alt="Facebook" className="w-6 h-6" />
      </a>
      <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
        <img src="/path/to/twitter-icon.svg" alt="Twitter" className="w-6 h-6" />
      </a>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        <img src="/path/to/instagram-icon.svg" alt="Instagram" className="w-6 h-6" />
      </a>
    </div>
  </div>
</footer>
    </BrowserRouter>
  )
}

export default App
