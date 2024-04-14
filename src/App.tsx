import Header from "./components/Header/Header"
import { Outlet } from "react-router-dom";
import ScrollToTop from "./components/ScrollOnTop/ScrollToTop";

function App() {

  return (
    <>
      <div className="selection:bg-[#0000004d] dark:selection:bg-[#ffffff4d]">
        <div className="sticky top-0 md:top-5 left-0 right-0 md:px-10 z-10">
          <Header />
        </div>
        <Outlet />

        <ScrollToTop />
      </div>
    </>
  )
}

export default App
