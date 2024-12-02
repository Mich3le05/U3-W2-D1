import { Component } from 'react'
import { Card, Button } from 'react-bootstrap'

class SingleBook extends Component {
  render() {
    return (
      <Card
        onClick={this.props.onSelectBook}
        style={{ border: this.props.isSelected ? '3px solid black' : 'none' }}
        className="d-flex flex-column text-black"
      >
        <Card.Img
          variant="top"
          src={this.props.book.img}
          alt={this.props.book.title}
        />
        <Card.Body>
          <Card.Title>{this.props.book.title}</Card.Title>
          <Card.Text>${this.props.book.price}</Card.Text>
          <Button variant="success">Read</Button>
        </Card.Body>
      </Card>
    )
  }
}

export default SingleBook
