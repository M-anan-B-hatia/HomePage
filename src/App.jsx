import Body from "./Components/Body"
import Header from "./Components/Header"
import Footer1 from "./Components/Footer1"

function App() {

  return (
    <>
      <div className="bg-amber-50 min-h-screen px-6 py-3 flex flex-col gap-16 md:px-10 md:py-7 md:justify-between lg:px-16 lg:py-10">

        <Header/>
        <Body/>
        <Footer1/>
        
      </div>
    </>
  )
}

export default App
