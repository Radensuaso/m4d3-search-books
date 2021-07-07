/* import Component from "react"
import { Col, Container, Row } from "react-bootstrap"
import scifiBooks from "../data/scifi.json"
import SingleBook from "./SingleBook"

class BookList extends Component {
  render() {
    return (
      <Container>
        <h1 className="my-4">List of Our Scifi Books</h1>
        <Row>
          {scifiBooks.map((scifiBook) => (
            <Col key={scifiBook.asin}>
              <SingleBook book={scifiBook} />
            </Col>
          ))}
        </Row>
      </Container>
    )
  }
}

export default BookList */
