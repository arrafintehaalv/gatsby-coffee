// import React from "react"
// import Img from "gatsby-image"

// export default function Product({ product }) {
//   return (
//     <div className="col-10 col-sm-8 col-md-6 col-lg-4 mx-auto my-3">
//       <div className="card" style={{ minHeight: "100%" }}>
//         <Img fluid={product.image.fluid} className="card-img-top" />
//         <div className="card-body text-center">
//           <h6>{product.title}</h6>
//           <h6>BDT{product.price}</h6>
//           <button
//             className="b btn mt-3 text-capitalize snipcart-add-item"
//             data-item-id={product.id}
//             data-item-name={product.title}
//             data-item-price={product.price}
//             data-item-image={product.image.fluid.src}
//             data-item-url="https://gaabcoffee.netlify.com/"
//           >
//             add to cart
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }

const getCategories = product => {
  let tempProducts = product.map(products => {
    return products.node.category
  })
  let tempCategories = new Set(tempProducts)
  let categories = Array.from(tempCategories)
  categories = ["all", ...categories]
  return categories
}
export default class Product extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: props.product.edges,
      coffeeProducts: props.product.edges,
      categories: getCategories(props.product.edges),
    }
  }
  handleProducts = category => {
    let tempProducts = [...this.state.products]
    if (category === "all") {
      this.setState(() => {
        return {
          coffeeProducts: tempProducts,
        }
      })
    } else {
      let products = tempProducts.filter(
        ({ node }) => node.category === category
      )
      this.setState(() => {
        return { coffeeProducts: products }
      })
    }
  }
  render() {
    if (this.state.products.length > 0) {
      return (
        <div className="row">
          <div className="row mb-5">
            <div className="col-10 mx-auto text-center">
              {this.state.categories.map((category, index) => {
                return (
                  <button
                    type="button"
                    key={index}
                    className="btn b text-capitalize m-3"
                    onClick={() => {
                      this.handleProducts(category)
                    }}
                  >
                    {category}
                  </button>
                )
              })}
            </div>
          </div>

          <div className="col-10 col-sm-8 col-md-6 col-lg-4 mx-auto my-3">
            <div className="card" style={{ minHeight: "100%" }}>
              <Img fluid={product.image.fluid} className="card-img-top" />
              <div className="card-body text-center">
                <h6>{product.title}</h6>
                <h6>BDT{product.price}</h6>
                <button
                  className="b btn mt-3 text-capitalize snipcart-add-item"
                  data-item-id={product.id}
                  data-item-name={product.title}
                  data-item-price={product.price}
                  data-item-image={product.image.fluid.src}
                  data-item-url="https://gaabcoffee.netlify.com/"
                >
                  add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div className="row">
          <div className="col-10 col-sm-6 mx-auto text-capitalize text-center">
            <h1>there are no products to display</h1>
          </div>
        </div>
      )
    }
  }
}
