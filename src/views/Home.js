import React, { useState } from 'react';

const Home = props => {

    /* Para utilizar el hook de estado (useState) debo importarlo en la línea de importación de
    React, encerrandolo entre llaves y separándolo de la palabra React mediante una coma */
    const [value, setValue] = useState(true)
    const [pokemon, setPokemon] = useState([
        { name: "bolbasor", type: "hoja" },
        { name: "charmileon", type: "fuego" },
        { name: "pikachu", type: "trueno" }
    ])

    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-4"></div>
                    <div className="col-4 bg-danger rounded-lg">
                        <div id="indicators" className="row">
                            <div className="col-3 text-center">
                                {/* En este botón se utiliza un evento onClick para cambiar el estado de "value", el elemento
                                "!value" me permite cambiar siempre al valor de "value" a su contrario, siendo posible solo 2 
                                estados en booleanos (Verdadero o Falso) */}
                                {/* El if ternario se utiliza para dimplificar la estructura de un if convernsional y sus partes se definen:
                                condición ? valor verdadero (if) : valor falso (else) */}
                                {/* En el caso de className se utiliza el valor de "value" para darle al botón  un color azul o negro.
                                Dependiendo si el valor es "true" o "false", se mostrarán las clases de bootstrap "btn-dark" o 
                                "btn-primary", según corresponda. */}
                                {/* cuando estoy trabando con booleanos y en un if ternario escribo el nombre de la variable solamente,
                                estoy preguntando si ese valor es verdadero, en caso de querer preguntar si el valor es falso, debo anteponer
                                el signo "!" al dicho nombre. EJ: !value */}
                                <button onClick={()=> setValue(!value)} className={`btn ${value?"btn-dark":"btn-primary"} rounded-circle principal_indicator my-2`}></button>
                            </div>
                            <div className="col-3">
                                <button className="small_indicator bg-danger"></button>
                                <button className="small_indicator bg-warning"></button>
                                <button className="small_indicator bg-success"></button>
                            </div>
                            <div className="col-6"></div>
                        </div>
                        <div id="screen" className="row py-4">
                            <div className="col-1"></div>
                            <div className="col-10 bg-white p-4 rounded-lg">
                                <div id="black_screen" className="black_screen bg-dark rounded-lg text-white p-2">
                                    {/* Uso de Map 1 */}
                                    {/* Cuando tengo que renderizar un solo componente de "HTML" y no necesito definir lógica de 
                                    javascript entre mi función de flecha anónima "(item,i)=>" y mi código de "HTML", puedo utilizar
                                    esta vía para escribir mi map */}
                                    {/* La condición antes del signo "&&" me permite no ejecutar la función map si el array mapeado
                                    no contiene elementos, con esto evito usar recursos del sistema */}
                                    {/* El símbolo "&&" me permite escribir un if sin else en una línea, con ello ahorro líneas de 
                                    código. Su estructura es la siguiente: condición && valor verdadero */}
                                    {
                                        pokemon.length > 0 && pokemon.map((item, i) => <div key={i} className="test">{item.type}</div>)
                                    }
                                    {/* Uso de Map 2 */}
                                    {/* Cuando tengo que renderizar más de un componente de "HTML" y no necesito definir lógica de 
                                    javascript entre mi función de flecha anónima "(item,i)=>" y mi código de "HTML", puedo utilizar
                                    esta vía para escribir mi map */}
                                    {
                                        pokemon.length > 0 && pokemon.map((item, i) => (
                                            <div key={i} className="test">{item.type}</div>
                                        ))
                                    }
                                    {/* Uso de Map 3 */}
                                    {/* Cuando tengo que renderizar más de un componente de "HTML" y necesito definir lógica de 
                                    javascript entre mi función de flecha anónima "(item,i)=>" y mi código de "HTML", puedo utilizar
                                    esta vía para escribir mi map */}
                                    {
                                        pokemon.length > 0 && pokemon.map((item, i) => {
                                            /* Aquí iría mi lógica de javascript */
                                            return (
                                                <div key={i} className="test">{item.type}</div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            <div className="col-1"></div>
                        </div>
                        <div id="buttons" className="row py-4">
                            <div className="col-2">
                                <button className="btn btn-dark rounded-circle black_button mx-auto"></button>
                            </div>
                            <div className="col-6">
                                <div className="topbuttons d-flex justify-content-around">
                                    <div className="topbuttons-item bg-danger"></div>
                                    <div className="topbuttons-item bg-primary"></div>
                                </div>
                                <div className="littlescreen mt-3 mx-auto p-1">
                                    info
                             </div>
                            </div>
                            <div className="col-4">
                                <div className="row">
                                    <div className="col-5"></div>
                                    <div className="col-2 cross bg-dark text-dark">a</div>
                                </div>
                                <div className="row">
                                    <div className="col-3"></div>
                                    <div className="col-3 cross bg-dark text-dark">a</div>
                                    <div className="col-4 cross bg-dark text-dark">a</div>
                                </div>
                                <div className="row">
                                    <div className="col-5"></div>
                                    <div className="col-2 cross bg-dark text-dark">a</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4"></div>
                </div>

            </div>
        </>
    )
}
export default Home;