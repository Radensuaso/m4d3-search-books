import { Card } from "react-bootstrap"
import MyBadge from "./MyBadge"

const SingleBook = (props) => (
  <Card>
    <Card.Img className="img-fluid" variant="top" src={props.book.img} />
    <Card.Body>
      <Card.Title>{props.book.title}</Card.Title>
      <Card.Text>
        <strong>Category: </strong>
        {props.book.category}
      </Card.Text>
      <MyBadge color={"success"} text={"€ " + props.book.price} />
    </Card.Body>
  </Card>
)

export default SingleBook
