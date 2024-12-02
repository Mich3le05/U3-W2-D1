import { Component } from 'react'
import SingleBook from './SingleBook'
import CommentArea from './CommentArea'
import { Col, Form, Row } from 'react-bootstrap'

class BookList extends Component {
  state = {
    searchQuery: '',
    selectedBook: null,
  }

  render() {
    return (
      <Row>
        <Col md={8}>
          <Form.Group className="my-3">
            <Form.Control
              type="search"
              placeholder="Cerca un libro"
              value={this.state.searchQuery}
              onChange={(e) => this.setState({ searchQuery: e.target.value })}
            />
          </Form.Group>
          <Row>
            {this.props.books
              .filter((b) =>
                b.title.toLowerCase().includes(this.state.searchQuery)
              )
              .map((b) => (
                <Col key={b.asin} xs={12} md={4}>
                  <SingleBook
                    book={b}
                    onSelectBook={() => this.setState({ selectedBook: b.asin })}
                    isSelected={this.state.selectedBook === b.asin}
                  />
                </Col>
              ))}
          </Row>
        </Col>
        <Col md={4}>
          {this.state.selectedBook && (
            <CommentArea asin={this.state.selectedBook} />
          )}
        </Col>
      </Row>
    )
  }
}

export default BookList
