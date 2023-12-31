import React from 'react'
import Paciente from './Paciente'



function ListadoPacientes({ Pacientes, setPaciente, eliminarPaciente }) {




  return (
    <div className='md:w-1/2 lg:w-3/5 '>

      {Pacientes && Pacientes.length ? (
        <>
          <h2 className='font-black text-3xl text-center'>Listado Pacientes</h2>
          <p className='text-xl mt-5 mb-10 text-center'>
            Administra tus {''}
            <span className='text-indigo-600 font-bold'>Pacientes y Citas</span>
          </p>
          <div className='md:h-screen overflow-y-scroll'>

            {Pacientes.map((paciente) => (
              <Paciente
                key={paciente.Id}
                paciente={paciente}
                setPaciente={setPaciente}
                eliminarPaciente={eliminarPaciente}

              />
            ))}


          </div>
        </>
      ) : (
        <>
          <h2 className='font-black text-3xl text-center'>No hay Pacientes</h2>
          <p className='text-xl mt-5 mb-10 text-center'>
            Comienza agregando pacientes {''}
            <span className='text-indigo-600 font-bold'>y apareceran en este lugar</span>
          </p>
        </>
      )}


    </div>
  )
}

export default ListadoPacientes
