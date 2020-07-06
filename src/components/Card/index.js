import React from 'react'

class Card extends React.Component {
  render() {
    console.log(this.props.product);
    return (
      <div>
      <p>Titulo: {this.props.product.title}</p>  
      <p>Titulo: {this.props.product.title}</p>  
      <img src={this.props.product.thumbnail}/>
      </div>
    )
  }
}

export default Card 