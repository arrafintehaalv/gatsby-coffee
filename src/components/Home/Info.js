import React from "react"
import { Link } from "gatsby"
import Title from "../Globals/Title"
export default function Info() {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="our story" />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              For us, it's not just about bringing good foods from our
              restaurant, it's about making a connection, which is why we sit
              down with the chefs, dreaming up menus that will arrive fresh and
              full of flavor. Try us!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
