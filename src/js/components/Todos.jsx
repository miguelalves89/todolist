
import { useState } from "react";



const Todos = () => {
    const [tasks, settasks] = useState([])
    const [inputValue, setInputValue] = useState("");

    const saveTask = (e) => {
        if (inputValue.trim() !== "" && e.key === "Enter") {
            settasks([...tasks, inputValue])
            setInputValue("")
        }
    }

    const eliminarItem = (i) => {
        settasks(tasks.filter((_, index) => i !== index))
    }




    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-12 col-md-8 text-center">
                    <h1 className="display-1 text-center">Todos</h1>

                    <input className="w-100 form-control todo-input" type="text" placeholder="¿Qué necesitas hacer?" onChange={(e) => { setInputValue(e.target.value) }} value={inputValue} onKeyDown={(e) => saveTask(e)} />

                    <ul className="list-unstyled text-start">
                        {tasks.map((item, index) => (
                            <li className="nuevosItems" key={index}>{item}<i className="fa fa-trash delete-icon" onClick={() => eliminarItem(index)}></i></li>
                        ))}
                        <li className="sombraBottonLista nuevosItems">{tasks.length} items left</li>

                    </ul>
                </div>


            </div>

        </div>

    )

}

export default Todos;