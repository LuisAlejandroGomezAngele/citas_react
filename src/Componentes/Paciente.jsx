import React from 'react'

function Paciente({ paciente, setPaciente, eliminarPaciente }) {



  const { Nombre, Propietario, Email, Fecha, Sintomas, Id } = paciente //Se extraen los datos del arreglo y se memten en variables

  const handleEliminar = () => {
    const respuesta = confirm('Deseas eliminar este paciente?')
    if(respuesta){
      eliminarPaciente(Id)
    }
  }

  return (
    <div className='mx-5 bg-white shadow-mb px-5 py-10 rounded-xl'>
      <p className='font-bold mb-3 text-gray-700 uppercase'>
        Nombre Mascota: {''}
        <span className='font-normal normal-case'>{Nombre}</span>
      </p>
      <p className='font-bold mb-3 text-gray-700 uppercase'>
        Nombre Propietario: {''}
        <span className='font-normal normal-case'>{Propietario}</span>
      </p>
      <p className='font-bold mb-3 text-gray-700 uppercase'>
        Email: {''}
        <span className='font-normal normal-case'>{Email}</span>
      </p>
      <p className='font-bold mb-3 text-gray-700 uppercase'>
        Fecha Alta: {''}
        <span className='font-normal normal-case'>{Fecha}</span>
      </p>
      <p className='font-bold mb-3 text-gray-700 uppercase'>
        Sintomas: {''}
        <span className='font-normal normal-case'>{Sintomas}</span>
      </p>
      <div className='flex justify-between mt-10'>
        <button type='button'
        className='py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg'
        onClick={() => setPaciente(paciente)}
        >Editar</button>

        <button type='button'
        className='py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg'
        onClick={handleEliminar}
        >Eliminar</button>
      </div>
    </div>
  )
}

export default Paciente
