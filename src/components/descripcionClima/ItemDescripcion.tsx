interface ItemDescripcionProps {
  titulo: string
  icono: React.ReactNode
  data: string
}

function ItemDescripcion ({ titulo, icono, data}: ItemDescripcionProps) {
  return (
    <div className="border w-[8rem] h-[4rem] px-1.5 py-0.5 rounded-lg flex flex-col justify-center items-center">
      <div className="flex gap-1 items-center">
        {icono}
        <p>{titulo}</p>
      </div>
      <p>{data}</p>
    </div>
  )
}

export default ItemDescripcion