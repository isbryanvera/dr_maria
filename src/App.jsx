import { BrowserRouter } from "react-router-dom"
import AppRoutes from "./routes/AppRoutes"
import Main from "./components/layouts/Main/Main"
import { NavBar } from "./components/organisms/NavBar/NavBar"
import { Foot } from "./components/Foot/Foot"

function App() {
  return (    
    <BrowserRouter>
      <NavBar/>
      <Main>
        <AppRoutes/>
      </Main>
      <Foot/>
    </BrowserRouter>
  )
}

export default App
