import React from 'react'
import { useState } from 'react'

function Error({children}) { //children es palabra reservada de react y hace referencia a todo lo que les pases al componente
    return (

        <div className='bg-red-800 text-white text-center p-3 uppercase font-bold mb-3 rounded-md'>
            {children}
        </div>

    )
}

export default Error
