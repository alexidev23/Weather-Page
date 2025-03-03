import Header from "./components/header/Header"
import InfoClima from "./components/infoClima/InfoClima"


function App() {
  return (
    <>
      <Header />
      <main className="border w-[1150px] m-auto">
        <InfoClima />
      </main>
    </>
  )
}

export default App
