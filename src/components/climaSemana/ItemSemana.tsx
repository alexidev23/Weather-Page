interface ItemSemanaProps {
  dia: string,
  icono: React.ReactNode,
  temp: string,
}

function ItemSemana ({ dia, icono, temp}: ItemSemanaProps) {
  return (
    <div className="flex justify-between items-center px-2.5 py-1.5 w-full">
      <div className="w-[150px]">
        <p>{dia}</p>
      </div>
      <div className="w-[100px] flex justify-center">
        {icono}
      </div>  
      <div className="w-[150px] text-end">
        <p>{temp}</p>
      </div>
    </div>
  )
}

export default ItemSemana