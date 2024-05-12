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
    </BrowserRouter>
  )
}

export default App
