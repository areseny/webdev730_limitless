import React from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'
// import SingleProduct from './SingleProduct' import { addStory } from // (this is for importing other components into this one)
// '../../redux/stories'

/* -----------------    COMPONENT     ------------------ */

class ProductList extends React.Component {
  render() {
    const {products} = this.props
    console.log('props', this.props)
    return (
      <div>
        <h1>ProductList Page!</h1>
        <ul>
        {
          products.map(product => {
            return (<li key={product.id}>{product.title}</li>)
          })
        }
        </ul>
      </div>

    )
  }
}

/* -----------------    CONTAINER     ------------------ */

const mapStateToProps = ({ products }) => ({ products })

// const mapDispatch = { // (for later, if we need to mapDispatch)
//   addStory
// }

export default connect(mapStateToProps, null)(ProductList)