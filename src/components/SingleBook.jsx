import { Button, Card } from "react-bootstrap"

const SingleBook = (props) => (
  <Card>
    <Card.Img variant="top" src={props.book.img} />
    <Card.Body>
      <Card.Title>{props.book.title}</Card.Title>
      <Card.Text>
        <strong>Category: </strong>
        {props.book.category}
      </Card.Text>
      <Button variant="success">€{props.book.price}</Button>
    </Card.Body>
  </Card>
)

export default SingleBook
