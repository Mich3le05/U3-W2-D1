import { Button, ListGroup } from 'react-bootstrap'

const SingleComment = ({ comment, onDelete }) => {
  const deleteComment = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${comment._id}`,
        {
          method: 'DELETE',
          headers: {
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzRkZDAxNWM5MjI4ZDAwMTVmYWQzNGMiLCJpYXQiOjE3MzMxNTI3ODksImV4cCI6MTczNDM2MjM4OX0.vXOJ19J8XPg2hGpiw3wp1F-TQg2Pdg7sJW_vpiZvOfU', // Sostituisci con il tuo token
          },
        }
      )
      if (response.ok) {
        alert('Commento eliminato!')
        onDelete() // Chiamata al metodo del padre per aggiornare i commenti
      } else {
        throw new Error("Errore durante l'eliminazione")
      }
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <ListGroup.Item>
      {comment.comment}
      <Button variant="danger" className="ms-2" onClick={deleteComment}>
        Elimina
      </Button>
    </ListGroup.Item>
  )
}

export default SingleComment
