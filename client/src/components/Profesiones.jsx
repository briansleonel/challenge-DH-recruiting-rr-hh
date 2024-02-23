import React from "react";

function Profesiones(){
    return(
        <>
            <section class="content profesiones">
				<h2 class="mt-3">Profesiones</h2>
				<div class="list-group shadow-sm p-3 mb-5 rounded">
					<h4 class="list-group-item list-group-item-action active text-center"
						aria-current="true">
						Listado de Profesiones
					</h4>
					<button type="button" class="list-group-item list-group-item-action text-center">Abogado</button>
					<button type="button" class="list-group-item list-group-item-action text-center">Arquitecto</button>
					<button type="button" class="list-group-item list-group-item-action text-center">Botánico</button>
					<button type="button"
						class="list-group-item list-group-item-action text-center">Computista</button>
					<button type="button" class="list-group-item list-group-item-action text-center">Economista</button>
					<button type="button" class="list-group-item list-group-item-action text-center">Técnico de sonido</button>
					<button type="button" class="list-group-item list-group-item-action text-center">Profesor</button>
					<button type="button" class="list-group-item list-group-item-action text-center">Linguista</button>
				</div>
			</section>
        </>
    )
}
export default Profesiones;