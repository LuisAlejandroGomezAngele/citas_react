import Header from "./Componentes/Header"
import Formulario from "./Componentes/Formulario"
import ListadoPacientes from "./Componentes/ListadoPacientes"
import { useState, useEffect } from "react"
function App() {

  const [Pacientes, setPacientes] = useState([])
  const [Paciente, setPaciente] = useState({})

  useEffect (() =>{
    const obtenerLS = () => {
      const pacientesLS = JSON.parse(localStorage.getItem('Pacientes')) ?? []
      console.log(pacientesLS)
      setPacientes(pacientesLS)
    }
    obtenerLS()
  }, [])

  useEffect (() => {

    localStorage.setItem('Pacientes', JSON.stringify( Pacientes ))

  }, [Pacientes])

  const eliminarPaciente = id => {
      const pacientesActualizados = Pacientes.filter(paciente => paciente.Id !== id)
      setPacientes(pacientesActualizados)
  }

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Formulario
          Pacientes={Pacientes}
          setPacientes={setPacientes} //Se envia props al componente formulario
          Paciente={Paciente}
          setPaciente={setPaciente}
        />
        <ListadoPacientes
          Pacientes={Pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>

    </div>
  )
}

export default App
