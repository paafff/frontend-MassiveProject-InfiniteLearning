import React from 'react'
import { Link } from 'react-router-dom'

const DropdownCategory = (props) => {
    return (
        <div className={`z-30 border-2 py-3 px-4 w-fit h-fit ${props.display} transition-all bg-white rounded-md absolute top-72 lg:right-48 lg:top-20  shadow-md`}>
            <ul className='flex flex-col gap-3'>

                <Link
                    to="/barbershop"
                    className='transition-all text-sm hover:bg-slate-200 rounded-sm py-2 px-4'>
                    Barbershop
                </Link>
                <Link
                    to="/salon"
                    className='transition-all text-sm hover:bg-slate-200 rounded-sm py-2 px-4'>
                    Salon
                </Link>

            </ul>
        </div>

    )
}

export default DropdownCategory