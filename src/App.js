import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import MyNavbar from "./components/MyNavbar"
import WarningSign from "./components/WarningSign"
import scifiBooks from "./data/scifi.json"
import BookList from "./components/BookList"

const App = () => (
  <>
    <MyNavbar />
    <WarningSign text="I'm a Warning" />
    <BookList books={scifiBooks} />
  </>
)

export default App
