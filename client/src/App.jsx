import { useState } from 'react'
import './assets/css/style.css'
import Aspirantes from './components/aspirantes'
import Profesiones from './components/Profesiones'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  {/*Dashboard*/}
  <div className="dashboard">
    {/*Sección de acceso*/}
    <section className="search-wrap">
      <div className="search">
        <label htmlFor="search">
          <i
            className="bi bi-search"
            style={{ fontSize: "1.5rem", color: "cornflowerblue" }}
          />
          <input type="text" id="search" />
        </label>
      </div>
      <div className="user-actions">
        <button>
          <a href="#">
            <i
              className="bi bi-person-add"
              style={{ fontSize: "1.5rem", color: "cornflowerblue" }}
            />
          </a>
        </button>
        <button>
          <a href="#">
            <i
              className="bi bi-person"
              style={{ fontSize: "1.5rem", color: "cornflowerblue" }}
            />
          </a>
        </button>
        <button>
          <a href="#">
            <i
              className="bi bi-box-arrow-right"
              style={{ fontSize: "1.5rem", color: "cornflowerblue" }}
            />
          </a>
        </button>
      </div>
    </section>
    {/*Fin Sección de acceso*/}
    {/*Sección menu*/}
    <header className="menu-wrap">
      <figure className="user">
        <div className="user-avatar">
          <img src="./src/assets/img/logo-dh.png" alt="Logo Digital House	" />
        </div>
        <figcaption>Digital House</figcaption>
      </figure>
      <nav>
        <section className="menu">
          <h3>Opciones</h3>
          <ul>
            <li>
              <a href="#">
                <i
                  className="bi bi-building"
                  style={{ fontSize: "1.2rem", color: "cornflowerblue" }}
                />
                - Empresas
              </a>
            </li>
            <li>
              <a href="#">
                <i
                  className="bi bi-person"
                  style={{ fontSize: "1.2rem", color: "cornflowerblue" }}
                />
                - Aspirantes
              </a>
            </li>
            <li>
              <a href="#">
                <i className="bi bi-list-check" />- Profesiones
              </a>
            </li>
            <li>
              <a href="#">
                <i
                  className="bi bi-person-vcard"
                  style={{ fontSize: "1.2rem", color: "cornflowerblue" }}
                />
                - Postulate aquí
              </a>
            </li>
            <li>
              <a href="#">
                <i className="bi bi-chat-left-text" />- Contacto
              </a>
            </li>
          </ul>
        </section>
      </nav>
    </header>
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
