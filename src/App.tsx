import ClimaHora from "./components/climaHora/ClimaHora"
import ClimaSemana from "./components/climaSemana/ClimaSemana"
import DescripcionClima from "./components/descripcionClima/DescripcionClima"
import Header from "./components/header/Header"
import InfoClima from "./components/infoClima/InfoClima"

function App() {
  return (
    <>
      <Header />
      <main className="border w-[1150px] m-auto flex justify-around">
        <div className="flex flex-col">
          <InfoClima />
          <ClimaSemana />
        </div>
        <div className="flex flex-col">
          <DescripcionClima />
          <ClimaHora />
        </div>
      </main>
    </>
  )
}

export default App
