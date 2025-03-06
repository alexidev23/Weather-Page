import { Cloud, CloudHail, CloudLightning, CloudRain, CloudSun, Sun } from "lucide-react"
import ItemSemana from "./ItemSemana"

const climaSemana = [
  { dia: "martes", icono: <Sun size={20}/>, temperatura: "32/12"},
  { dia: "miercoles", icono: <Cloud size={20}/>, temperatura: "32/12"},
  { dia: "jueves", icono: <CloudRain size={20}/>, temperatura: "32/12"},
  { dia: "viernes", icono: <CloudLightning size={20}/>, temperatura: "32/12"},
  { dia: "sabado", icono: <CloudSun size={20}/>, temperatura: "32/12"},
  { dia: "domingo", icono: <CloudHail size={20}/>, temperatura: "32/12"},
]

function ClimaSemana () {
  return (
    <div className="w-[400px] my-4">
      <h2 className="font-medium text-xl">Week:</h2>
      <div className="py-2.5">
        {climaSemana.map((info, index) => (
          <ItemSemana 
            key={index}
            dia={info.dia}
            icono={info.icono}
            temp={info.temperatura}
          />
        ))}
      </div>
    </div>
  )
}

export default ClimaSemana