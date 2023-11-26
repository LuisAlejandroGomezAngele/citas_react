import React from 'react'
import { useState, useEffect } from 'react'
import Error from './Error'

function Formulario({ Pacientes, setPacientes, Paciente, setPaciente }) {

  const [Nombre, setNombre] = useState('')
  const [Propietario, setPropietario] = useState('')
  const [Email, setEmail] = useState('')
  const [Fecha, setFecha] = useState('')
  const [Sintomas, setSintomas] = useState('')
  const [error, setError] = useState(false)

  useEffect(() => {
    if (Object.keys(Paciente).length > 0) {
      setNombre(Paciente.Nombre)
      setPropietario(Paciente.Propietario)
      setEmail(Paciente.Email)
      setFecha(Paciente.Fecha)
      setSintomas(Paciente.Sintomas)

    }

  }, [Paciente])




  const GenerarID = () => {
    const random = Math.random().toString(36).substr(2)

    const fecha = Date.now().toString(36)

    return random + fecha

  }

  const handleSubmit = (e) => {
    e.preventDefault()

    //Validacion del formulario
    if ([Nombre, Propietario, Email, Fecha, Sintomas].includes('')) {
      setError(true)
      return
    }
    setError(false)

    //Objeto de paciente para mandarlo al app
    const ObjetoPaciente = {
      Nombre,
      Propietario,
      Email,
      Fecha,
      Sintomas
    }
    
    if (Paciente.Id){
       //Editando el registro
       ObjetoPaciente.Id = Paciente.Id

       const pacientesActualizados = Pacientes.map( pacienteState => pacienteState.Id === Paciente.Id ? ObjetoPaciente : pacienteState)

       setPacientes(pacientesActualizados)
    } else {
      //Nuevo registro
      ObjetoPaciente.Id = GenerarID()
      setPacientes([...Pacientes, ObjetoPaciente]) ///Se toma una copia del arreglo original Pacientes, y se le agrega ObjetoPaciente
      setPaciente({})
    }


    //Reiniciar el formulario
    setNombre('')
    setPropietario('')
    setEmail('')
    setFecha('')
    setSintomas('')

  }

  return (
    <div className='md:w-1/2 lg:w-3/5 mx-5'>
      <h2 className='font-black text-3xl text-center'>Seguimiento Pacientes</h2>
      <p className='text-lg mt-5 text-center mb-10'>
        Anade Pacientes y {''}
        <span className='text-indigo-600 font-bold'>Administralos</span>
      </p>
      <form className='bg-white shadow-md rounded-lg py-10 px-5 mb-10' onSubmit={handleSubmit}>
        {error && <Error><p>Todos los campos son Obligatorios</p></Error>}
        <div className='mb-5'>
          <label className='block text-gray-700 uppercase' htmlFor='mascota'>
            Nombre Mascota
          </label>
          <input id='mascota'
            type='text'
            placeholder='Nombre de la mascota'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            value={Nombre}
            onChange={(e) => setNombre(e.target.value)}>
          </input>
        </div>
        <div className='mb-5'>
          <label className='block text-gray-700 uppercase' htmlFor='propietario'>
            Nombre Propietario
          </label>
          <input id='propietario'
            type='text'
            placeholder='Nombre del propietario'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            value={Propietario}
            onChange={(e) => setPropietario(e.target.value)}>
          </input>
        </div>
        <div className='mb-5'>
          <label className='block text-gray-700 uppercase' htmlFor='email'>
            Email
          </label>
          <input id='email'
            type='email'
            placeholder='Email Contacto propietario'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            value={Email}
            onChange={(e) => setEmail(e.target.value)}>
          </input>
        </div>
        <div className='mb-5'>
          <label className='block text-gray-700 uppercase' htmlFor='alta'>
            Alta
          </label>
          <input id='alta'
            type='date'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            value={Fecha}
            onChange={(e) => setFecha(e.target.value)}>
          </input>
        </div>
        <div className='mb-5'>
          <label className='block text-gray-700 uppercase' htmlFor='sintomas'>
            Sintomas
          </label>
          <textarea
            id='sintomas'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            placeholder='Describe los sintomas'
            value={Sintomas}
            onChange={(e) => setSintomas(e.target.value)}>

          </textarea>
        </div>
        <input
          type='submit'
          className='bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors'
          value={Paciente.Id ? 'Editar Paciente' : 'Agregar Paciente'}>
        </input>
      </form>
    </div>
  )
}

export default Formulario
