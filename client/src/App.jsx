import { useState } from 'react'
import Aspirantes from './components/aspirantes'
import Profesiones from './components/Profesiones'
import AccesNav from './components/AcessNav'
import Menu from './components/Menu'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  {/*Dashboard*/}
  <div className="dashboard">

    {/*Sección de acceso*/}
    <AccesNav/>
    {/*Fin Sección de acceso*/}

    {/*Sección menu*/}
    <Menu/>
    {/*Fin Sección menu*/}

    {/*Sección contenido*/}
    <main className="content-wrap">

      {/*Preventa*/}
      <header className="preventa">
        <h2>Búsqueda y selección</h2>
        <p className="text-center h5">
          Encontramos talento para tu empresa, en todos los cargos
          administrativos, profesionales y técnicos.
        </p>
        <div>
          <img src="./src/assets/img/banner.jpg" alt="Rcursos Humanos" />
        </div>
        {/*Fin Encabezado*/}
      </header>
      {/*Fin Preventa*/}

      {/*Sección aspirantes*/}
      <Aspirantes/>
      {/*Fin sección aspirantes*/}

      {/*Sección de profesiones*/}
			<Profesiones/>
			{/*Fin sección profesiones*/}

    </main>
    {/*Fin Sección contenido*/}
    
  </div>
  {/*Fin Dashboard*/}
</>
  )
}

export default App
