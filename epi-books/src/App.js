import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import MyNav from './components/MyNav'
import MyFooter from './components/MyFooter'
import Welcome from './components/Welcome'
import { Container } from 'react-bootstrap'
import BookList from './components/BookList'
// import AllTheBooks from './components/AllTheBooks'
import fantasy from './data/fantasy.json'

function App() {
  return (
    <div>
      <header>
        <MyNav />
      </header>
      <main className="backGround">
        <Container>
          <Welcome />
          {/* <AllTheBooks />  */}
          <BookList books={fantasy} />
        </Container>
      </main>
      <footer>
        <MyFooter />
      </footer>
    </div>
  )
}

export default App
