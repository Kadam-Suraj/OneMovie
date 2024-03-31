import Header from "./components/Header/Header"
import { Outlet } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

function App() {

  return (
    <>
      <div className="selection:bg-[#0000004d] dark:selection:bg-[#ffffff4d]">
        <div className="md:px-10 md:pt-5">
          <Header></Header>
        </div>
        <Outlet />
        <div className="hidden">
        <ScrollToTop />
        </div>
      </div>
    </>
  )
}

export default App
