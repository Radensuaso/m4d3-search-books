import { Button, Card, Col, Container, Row } from "react-bootstrap"
import fantasyBooks from "../data/fantasy.json"

const SingleBook = () => (
  <>
    <Container>
      <h1 className="text-center my-5">{fantasyBooks[0].title}</h1>
      <Row className="justify-content-center">
        <Col xs={12} sm={10} md={8} lg={6}>
          <Card>
            <Card.Img variant="top" src={fantasyBooks[0].img} />
            <Card.Body>
              <Card.Title>
                <strong>Category: </strong>
                {fantasyBooks[0].category}
              </Card.Title>
              <Button variant="success">€{fantasyBooks[0].price}</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  </>
)

export default SingleBook
