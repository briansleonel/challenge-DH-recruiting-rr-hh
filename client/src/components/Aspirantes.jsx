import React, { useEffect, useState } from "react";

function Aspirantes (){
  const[aspirantes, setAspirantes]=useState([]);

	useEffect(()=>{
		const getAspirantes=async()=>{
			try{
				const response=await fetch('http://localhost:3004/api/aspirantes');
				const data=await response.json();
				setAspirantes(data.data);
			}catch(error){
				console.log("error")
			}
		};
		getAspirantes();
	}, ([]));
  
    return(
        <>
        <section className="content aspirantes">
        <h2>Aspirantes</h2>
          {aspirantes && aspirantes.map((aspirante)=>{
            return(
              <article key={aspirante.id} className="person-boxes">
                <div className="person-box shadow p-3 mb-5 bg-body-tertiary rounded">
                  <div className="box-avatar">
                    <img src={aspirante.imagen} alt="" />
                  </div>
                  <div className="box-bio">
                    <h2 className="bio-name">{aspirante.nombre}</h2>
                    <p className="bio-position">{aspirante.profesion.nombre}</p>
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
            )
          })}
          
       
      </section>
        </>
    )
}
export default Aspirantes;