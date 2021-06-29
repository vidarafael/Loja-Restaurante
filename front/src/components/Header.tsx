import React from "react";

function Header(props: any) {

  return (
    <>
      <header>
        {props.children}
      </header>
    </>
  )

}

export { Header }