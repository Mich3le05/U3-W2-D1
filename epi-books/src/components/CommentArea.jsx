import { Component } from 'react'
import CommentList from './CommentList'
import AddComment from './AddComment'
import Loading from './Loading'
import Error from './Error'

class CommentArea extends Component {
  state = {
    comments: [],
    isLoading: true,
    isError: false,
  }

  fetchComments = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${this.props.asin}`,
        {
          headers: {
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzRkZDAxNWM5MjI4ZDAwMTVmYWQzNGMiLCJpYXQiOjE3MzMxNTI3ODksImV4cCI6MTczNDM2MjM4OX0.vXOJ19J8XPg2hGpiw3wp1F-TQg2Pdg7sJW_vpiZvOfU', // Sostituisci con il tuo token
          },
        }
      )
      if (response.ok) {
        const comments = await response.json()
        this.setState({ comments, isLoading: false, isError: false })
      } else {
        throw new Error('Errore nel caricamento dei commenti')
      }
    } catch (error) {
      console.error(error)
      this.setState({ isLoading: false, isError: true })
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.asin !== this.props.asin) {
      this.setState({ isLoading: true })
      this.fetchComments()
    }
  }

  render() {
    return (
      <div className="bg-light p-3">
        {this.state.isLoading && <Loading />}
        {this.state.isError && <Error />}
        {!this.state.isLoading && !this.state.isError && (
          <>
            <AddComment
              asin={this.props.asin}
              onCommentAdded={this.fetchComments}
            />
            <CommentList commentsToShow={this.state.comments} />
          </>
        )}
      </div>
    )
  }
}

export default CommentArea
