import React from "react";
import '../styles/components/header.css'

function Header(props: any) {

  return (
    <>
      <header className="header-component">
        {props.children}
      </header>
    </>
  )

}

export { Header }