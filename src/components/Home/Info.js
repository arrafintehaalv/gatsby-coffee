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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              nemo nam eos? Ea, culpa perferendis itaque ipsam necessitatibus
              soluta, ullam reiciendis sed pariatur nam hic alias minus ab.
              Voluptates adipisci aperiam voluptate, mollitia laudantium aliquid
              animi facilis, odio quasi dolorem pariatur soluta laborum, ullam
              officiis officia perspiciatis praesentium totam dignissimos.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
