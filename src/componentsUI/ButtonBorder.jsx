import React from 'react'

export default function Button({ children, onClick, type, id, className }) {
  const classButton = "bg-primary-red text-gray w-fit h-12 border-none px-3 rounded-md font-semibold text-lg cursor-pointer"

  return (
    <button id={id} onClick={onClick} type={type || 'button'} className={className ? `${classButton} ${className} btn` : classButton}>
      {children}
    </button>
  )
}
