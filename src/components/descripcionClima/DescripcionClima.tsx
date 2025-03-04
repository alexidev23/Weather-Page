import { Cloud, CloudRain, Compass, Droplet, Eye, Gauge, Mountain, SunDim, Thermometer, Waves, Wind } from "lucide-react"
import ItemDescripcion from "./ItemDescripcion"

const itemsInfo = [
  { titulo: "feels like", icono: <Thermometer size={15}/>, data: "20°C" },
  { titulo: "pressure", icono: <Gauge size={15}/>, data: "1013 hPa" },
  { titulo: "humidity", icono: <Droplet size={15}/>, data: "50%" },
  { titulo: "sea level", icono: <Waves size={15}/>, data: "1013 hPa" },
  { titulo: "ground level", icono: <Mountain size={15}/>, data: "1013 hPa" },
  { titulo: "visibility", icono: <Eye size={15}/>, data: "10000 m" },
  { titulo: "wind speed", icono: <Wind size={15}/>, data: "3.6 m/s" },
  { titulo: "wind deg", icono: <Compass size={15}/>, data: "N" },
  { titulo: "rain", icono: <CloudRain size={15}/>, data: "0 mm" },
  { titulo: "clouds", icono: <Cloud size={15}/>, data: "few clouds" },
  { titulo: "uv index", icono: <SunDim size={15}/>, data: "6" },
  { titulo: "air pollution", icono: <Wind size={15}/>, data: "0 mm" },
]

function DescripcionClima () {
  return (
    <div className="w-[550px]">
      <h2 className="pb-4 font-medium text-lg">Today's highlight:</h2>
      <div className="flex flex-wrap justify-between items-center gap-2">
        {itemsInfo.map((item, index) => (
          <ItemDescripcion key={index} titulo={item.titulo} icono={item.icono} data={item.data} />
        ))}
      </div>
    </div>
  )
}

export default DescripcionClima