import React, { useEffect, useState } from "react";

function Profesiones(){
	const[profesiones, setProfesiones]=useState([]);

	useEffect(()=>{
		const getProfesiones=async()=>{
			try{
				const response=await fetch('http://localhost:3004/api/profesiones');
				const data=await response.json();
				setProfesiones(data.data);
			}catch(error){
				console.log("error")
			}
		};
		getProfesiones();
	}, ([])); 
    return(
        <>
            <section className="content profesiones">
				<h2 className="mt-3">Profesiones</h2>
				<div className="list-group shadow-sm p-3 mb-5 rounded">
					<h4 className="list-group-item list-group-item-action active text-center"
						aria-current="true">
						Listado de Profesiones
					</h4>
					{profesiones && profesiones.map((profesion, i)=>(
							<button key={i} type="button" className="list-group-item list-group-item-action text-center">{profesion.nombre}</button>
					))
					}
					{/*  <button type="button" class="list-group-item list-group-item-action text-center">Arquitecto</button>
					<button type="button" class="list-group-item list-group-item-action text-center">Botánico</button>
					<button type="button"
						class="list-group-item list-group-item-action text-center">Computista</button>
					<button type="button" class="list-group-item list-group-item-action text-center">Economista</button>
					<button type="button" class="list-group-item list-group-item-action text-center">Técnico de sonido</button>
					<button type="button" class="list-group-item list-group-item-action text-center">Profesor</button>
					<button type="button" class="list-group-item list-group-item-action text-center">Linguista</button>  */}
				</div>
			</section>
        </>
    )
}
export default Profesiones;