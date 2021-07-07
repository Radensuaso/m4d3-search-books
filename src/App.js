import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import MyNavbar from "./components/MyNavbar"
import WarningSign from "./components/WarningSign"
import MyBadge from "./components/MyBadge"
/* import BookList from "./components/BookList" */

const App = () => (
  <>
    <MyNavbar />

    <WarningSign text="I'm a Warning" />
    <MyBadge text="I'm a Badge" color="danger" />

    {/* <BookList /> */}
  </>
)

export default App
