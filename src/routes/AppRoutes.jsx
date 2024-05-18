import { useRoutes } from "react-router-dom"
import { Home } from "../pages/Home/Home"
import { AboutUs } from "../pages/AboutUs/AboutUs"
import { Contact } from "../pages/Contact/Contact"
import { FAQ } from "../pages/FAQ/FAQ"
import { Treatment } from "../pages/Treatment/Treatment"
import { NotFound } from "../pages/NotFound/NotFound"
import { Rinoplastia } from "../pages/Rinoplastia/Rinoplastia"

const AppRoutes = () => {
    let routes = useRoutes([
      { path: "/", element: <Home/> },
      { path: "/rinoplastia", element: <Rinoplastia/> },
      { path: "/sobre-mi", element: <AboutUs></AboutUs>},
      { path: "/contacto", element: <Contact></Contact>},
      { path: "/preguntas", element: <FAQ></FAQ>},
      { path: "/tratamientos", element: <Treatment></Treatment>},
      { path: "*", element: <NotFound/>}
    ])
    return routes
}

export default AppRoutes