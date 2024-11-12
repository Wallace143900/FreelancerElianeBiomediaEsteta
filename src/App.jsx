import { UserProvider } from "./providers/UserContext";
import "./styles/index.scss";
import { OfCourse } from "./components/OfCourse";
import { EleveAutoestima } from "./components/EleSuaAutoestima";
import { Especialista } from "./components/Especialista";


function App() {

  return (
    <>
    <UserProvider>
      <EleveAutoestima />
      <Especialista />
      <OfCourse />
    </UserProvider>
    </>
  )
}

export default App
