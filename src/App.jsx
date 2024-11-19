import { UserProvider } from "./providers/UserContext";
import "./styles/index.scss";
import { EleveAutoestima } from "./components/EleSuaAutoestima";
import { Especialista } from "./components/Especialista";
import { AntesEDepoisResults } from "./components/AntesEDepois";
import OfCourse from "./components/OfCourse";
import { AboutMe } from "./components/AboutMe";


function App() {

  return (
    <>
    <UserProvider>
      <EleveAutoestima />
      <Especialista />
      <AntesEDepoisResults />
      <OfCourse />
      <AboutMe />
    </UserProvider>
    </>
  )
}

export default App
