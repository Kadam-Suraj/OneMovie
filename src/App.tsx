import Header from "./components/Header/Header"
import { Outlet } from "react-router-dom";

function App() {

  return (
    <>
      <div className="selection:bg-[#0000004d] dark:selection:bg-[#ffffff4d]">
        <div className="md:px-10 md:pt-5">
          <Header></Header>
        </div>
        <Outlet />
      </div>
    </>
  )
}

export default App
