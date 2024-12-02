import { Component } from 'react'
import { Button, Form } from 'react-bootstrap'

class AddComment extends Component {
  state = {
    comment: {
      comment: '',
      rate: 1,
      elementId: this.props.asin,
    },
  }

  sendComment = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch(
        'https://striveschool-api.herokuapp.com/api/comments',
        {
          method: 'POST',
          body: JSON.stringify(this.state.comment),
          headers: {
            'Content-Type': 'application/json',
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzRkZDAxNWM5MjI4ZDAwMTVmYWQzNGMiLCJpYXQiOjE3MzMxNTI3ODksImV4cCI6MTczNDM2MjM4OX0.vXOJ19J8XPg2hGpiw3wp1F-TQg2Pdg7sJW_vpiZvOfU', // Sostituisci con il tuo token
          },
        }
      )
      if (response.ok) {
        alert('Recensione inviata!')
        this.props.onCommentAdded() // Avvisa il componente padre di aggiornare la lista
        this.setState({
          comment: {
            comment: '',
            rate: 1,
            elementId: this.props.asin,
          },
        })
      } else {
        throw new Error("Errore durante l'invio del commento")
      }
    } catch (error) {
      alert(error.message)
    }
  }

  render() {
    return (
      <div className="my-3">
        <Form onSubmit={this.sendComment}>
          <Form.Group className="mb-2">
            <Form.Label>Recensione</Form.Label>
            <Form.Control
              type="text"
              placeholder="Inserisci qui il testo"
              value={this.state.comment.comment}
              onChange={(e) =>
                this.setState({
                  comment: { ...this.state.comment, comment: e.target.value },
                })
              }
            />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>Valutazione</Form.Label>
            <Form.Control
              as="select"
              value={this.state.comment.rate}
              onChange={(e) =>
                this.setState({
                  comment: { ...this.state.comment, rate: e.target.value },
                })
              }
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </Form.Control>
          </Form.Group>
          <Button variant="primary" type="submit">
            Invia
          </Button>
        </Form>
      </div>
    )
  }
}

export default AddComment
