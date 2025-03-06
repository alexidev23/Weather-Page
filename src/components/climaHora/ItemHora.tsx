interface ItemHoraProps {
  hora: string,
  icono: React.ReactNode,
  temp: string,
  rain: string,
  wind: string
}

function ItemHora ({ hora, icono, temp, rain, wind }: ItemHoraProps) { 
  return (
    <div className="w-full py-4 px-6 flex items-center justify-between gap-1.5">
      <p>{hora}</p>
      {icono}
      <p>{temp}°C</p>
      <p>{rain}%</p>
      <p>{wind}km/h</p>
    </div>
  );
}

export default ItemHora
