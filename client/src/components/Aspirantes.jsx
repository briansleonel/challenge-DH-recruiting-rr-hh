import React from "react";

function Aspirantes (){
    return(
        <>
        <section className="content aspirantes">
        <h2>Aspirantes</h2>
        <article className="person-boxes">
          <div className="person-box shadow p-3 mb-5 bg-body-tertiary rounded">
            <div className="box-avatar">
              <img src="./src/assets/img/foto1.jpg" alt="Gloria" />
            </div>
            <div className="box-bio">
              <h2 className="bio-name">Gloria Medina</h2>
              <p className="bio-position">Administrador</p>
            </div>
            <div className="box-actions">
              <button>
                <i className="bi bi-star" />
              </button>
              <button>
                <i className="bi bi-chat" />
              </button>
              <button>
                <i className="bi bi-envelope" />
              </button>
            </div>
          </div>
        </article>
      </section>
        </>
    )
}
export default Aspirantes;