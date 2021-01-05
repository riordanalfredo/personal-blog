import React from "react"
import { Link } from "gatsby"
import { scale } from "../utils/typography"

import { Toggler } from "./items/toggler"
import Footer from "./footer"
import "./global.css"

const Layout = ({ location, title, children }) => {
 
  const header = (
    <>
      <Toggler/>
      <h2
        style={{
          ...scale(1),
          marginBottom: 0,
          marginTop: 0,
          fontFamily: `Montserrat, sans-serif`,
        }}
        className="title"
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h2>
    </>
  )

  return (
    <div
      style={{
        backgroundColor: "var(--bg)",
        color: "var(--textNormal)",
        transition: "color 0.2s ease-out, background 0.2s ease-out",
        minHeight: "100vh",
      }}
    >
      <div className="sidebar">
        <div
          className="md:h-screen p-4 flex flex-col justify-center items-center"
          style={{ minHeight: 200 }}
        >
          {header}
          <Footer />
        </div>
      </div>

      <div className="main-content relative">
        <main>{children}</main>
      </div>
    </div>
  )
}

export default Layout
