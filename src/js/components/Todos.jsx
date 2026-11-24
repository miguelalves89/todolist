
//import { useState, useEffect} from "react";



const Todos = () => {
    // const [tasks, settasks]= useState([])
    //const [inputValue, setInputValue] = useState("");

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-12 col-md-8">
                    <h1>Todos</h1>

                    <input type="text" placeholder="¿Qué necesitas hacer?" />

                    <ul>
                        <li>No hay tareas, añadir tareas</li>
                    </ul>
                </div>


            </div>

        </div>

    )

}

export default Todos;