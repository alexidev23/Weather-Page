import { MapPin, Sun } from "lucide-react"

function InfoClima () {
  return (
    <div className="w-[400px] px-6 py-4 bg-[#023b493f] rounded-lg flex justify-between">
      <div className="flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-1">
            <MapPin size={22} />
            <p className="font-bold text-3xl">Cordoba</p>
          </div>
          
          <div className="font-light px-1 text-sm">
            <span>Mon,</span><span>12:22hs</span>
          </div>
        </div>
        
        <p className="text-7xl text-center font-semibold py-1">26°</p>

        <div className="flex font-light text-sm gap-2">
          <p>min: 1°</p>
          <p>max: 34°</p>
        </div>
      </div>
      <div>
        <div className="border text-center py-0.5 px-1.5 w-12 m-auto flex items-center justify-center">
          C | F
        </div>
        <div className="py-4">
          <Sun size={100}/>
        </div>
        <p className="text-center text-xl">Soleado</p>
      </div>
    </div>
  );
}

export default InfoClima;