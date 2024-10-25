import { useState } from "react"

export const Search = () => {

  const [value, setValue] = useState('')
  const buscar = e => setValue( e.target.value )
  const url = "/results/"

  return (
    <div>
      <center>
        <h1 className="mt-5">Buscador de películas</h1>
        <form action={ url + value } method="POST">
          <input type="search" className="form-control p-3" value={value} onChange={ buscar } placeholder="Buscar película" />
        </form>
      </center>
    </div>
  )
}
