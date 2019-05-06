import React from "react"
import Title from "../Globals/Title"
import uploadcare from "uploadcare-widget"

{
  /* <script>UPLOADCARE_PUBLIC_KEY = "dc3d824e4b7f20a09682"</script> */
}

export default function Career() {
  return (
    <section className="contact py-5">
      <Title title="Send Your Details" />
      <div className="row">
        <div className="col-10 col-sm-8 col-md-6 mx-auto">
          <form
            action="https://formspree.io/arrafinteha@gmail.com"
            method="POST"
          >
            {/* name */}
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                id="name"
                placeholder="abc"
              />
            </div>
            {/* email */}
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                className="form-control"
                name="email"
                id="email"
                placeholder="abc@email"
              />
            </div>

            {/* Position */}
            <div className="form-group">
              <label htmlFor="position">Position</label>
              <select
                className="form-control"
                type="text"
                name="position"
                id="position"
              >
                <option />
                <option value="Manager">Manager</option>
                <option value="Shelf">Shelf</option>
                <option value="Waiter">Waiter</option>
                <option value="Guard">Guard</option>
              </select>
            </div>
            {/* CV */}
            <div className="form-group">
              <label htmlFor="CV">
                Put Your CV as a pdf, doc, jpg, png file
              </label>
              <input
                type="hidden"
                name="CV"
                role="uploadcare-uploader"
                className="form-control"
                id="CV"
              />
            </div>
            {/* <div>
              <input type="hidden" name="cv" role="uploadcare-uploader" />
            </div> */}
            {/* description */}
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                name="description"
                id="description"
                cols="30"
                rows="5"
                className="form-control"
                placeholder="your description goes here..."
              />
            </div>
            {/* submit */}
            <button
              type="submit"
              className="btn b btn-block text-capitalize mt-5"
            >
              submit
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

// componentDidMount() {
//     const script = document.createElement("script");

//     script.src = "https://ucarecdn.com/libs/widget/3.x/uploadcare.full.min.js";
//     script.async = true;

//     document.body.appendChild(script);
// }
