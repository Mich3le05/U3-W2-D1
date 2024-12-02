import { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import MyNav from './components/MyNav'
import MyFooter from './components/MyFooter'
import BookList from './components/BookList'
import CommentArea from './components/CommentArea'
import fantasy from './data/fantasy.json'

function App() {
  const [selectedBook, setSelectedBook] = useState(null)

  return (
    <div>
      <header>
        <MyNav />
      </header>
      <main className="backGround">
        <Container>
          <Row>
            <Col md={8}>
              <BookList
                books={fantasy}
                onSelectBook={(asin) => setSelectedBook(asin)}
              />
            </Col>
            <Col md={4}>
              <CommentArea asin={selectedBook} />
            </Col>
          </Row>
        </Container>
      </main>
      <footer>
        <MyFooter />
      </footer>
    </div>
  )
}

export default App
