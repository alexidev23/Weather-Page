import { Sun } from "lucide-react"
import ItemHora from "./ItemHora"

const climaHora = [
  {
    hora: '12:00',
    icono: <Sun size={20} />,
    temperatura: '20',
    rain: '34',
    wind: '12'
  },
  {
    hora: '12:00',
    icono: <Sun size={20} />,
    temperatura: '20',
    rain: '34',
    wind: '12'
  },
  {
    hora: '12:00',
    icono: <Sun size={20} />,
    temperatura: '20',
    rain: '34',
    wind: '12'
  },
  {
    hora: '12:00',
    icono: <Sun size={20} />,
    temperatura: '20',
    rain: '34',
    wind: '12'
  },
  {
    hora: '12:00',
    icono: <Sun size={20} />,
    temperatura: '20',
    rain: '34',
    wind: '12'
  },
  {
    hora: '12:00',
    icono: <Sun size={20} />,
    temperatura: '20',
    rain: '34',
    wind: '12'
  },
  {
    hora: '12:00',
    icono: <Sun size={20} />,
    temperatura: '20',
    rain: '34',
    wind: '12'
  },
  {
    hora: '12:00',
    icono: <Sun size={20} />,
    temperatura: '20',
    rain: '34',
    wind: '12'
  },
  {
    hora: '12:00',
    icono: <Sun size={20} />,
    temperatura: '20',
    rain: '34',
    wind: '12'
  },
  {
    hora: '12:00',
    icono: <Sun size={20} />,
    temperatura: '20',
    rain: '34',
    wind: '12'
  },
  {
    hora: '12:00',
    icono: <Sun size={20} />,
    temperatura: '20',
    rain: '34',
    wind: '12'
  },
]

function ClimaHora () {
  return (
    <div className="w-[550px] h-[200px] my-3.5 overflow-hidden">
      <h2 className="font-medium text-lg">Today:</h2>
      <div className="w-full h-full scroll-clima flex flex-col items-center justify-around overflow-scroll">
        {climaHora.map((info, index) => (
          <ItemHora 
            key={index}
            hora={info.hora}
            icono={info.icono}
            temp={info.temperatura}
            rain={info.rain}
            wind={info.wind}
          />
        ))}
      </div>
    </div>
  )
}

export default ClimaHora