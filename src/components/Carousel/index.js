import React from 'react'
import InnerCarousel from '../InnerCarousel'


class Carousel extends React.Component {
  render() {
     return (
      <div>
        <h2>{this.props.title}</h2>
        <InnerCarousel products={this.props.products} />
      </div>
    )
  }
}

export default Carousel