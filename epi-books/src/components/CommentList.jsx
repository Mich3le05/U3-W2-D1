import { ListGroup } from 'react-bootstrap'
import SingleComment from './SingleComment'

const CommentList = ({ commentsToShow, onDelete }) => (
  <ListGroup style={{ color: 'black' }} className="mt-2">
    {commentsToShow.map((comment) => (
      <SingleComment key={comment._id} comment={comment} onDelete={onDelete} />
    ))}
  </ListGroup>
)

export default CommentList
