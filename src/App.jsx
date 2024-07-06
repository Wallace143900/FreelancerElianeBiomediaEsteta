import { Header } from "./components/Header";
import { Section1 } from "./components/Section1";
import { ButtonConhecaMais } from "./components/ButtonConhecaMais";
import { UserProvider } from "./providers/UserContext";
import "./styles/index.scss";
import { OfCourse } from "./components/OfCourse";


function App() {

  return (
    <>
    <UserProvider>
      <Header />
      <Section1 />
      <ButtonConhecaMais />
      <OfCourse />
    </UserProvider>
    </>
  )
}

export default App
