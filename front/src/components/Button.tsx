import React from 'react'
import '../styles/components/button.css'

export function Button(props: any) {
  return (
    <>
      <button className="btn-primary">
        {props.children}
      </button>
    </>
  )
}