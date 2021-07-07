import { Col, Container, Form, Row } from "react-bootstrap"
import SingleBook from "./SingleBook"
import React, { Component } from "react"

export default class BookList extends Component {
  state = {
    search: "",
  }

  handleSearch = (e) => {
    this.setState({ search: e.target.value })
  }

  render() {
    return (
      <div>
        <Container>
          <h1 className="my-4">List of Our Scifi Books</h1>
          <Row className="mb-4">
            <Col xm={12} sm={10} md={8} lg={6}>
              <Form.Control
                type="text"
                placeholder="Normal text"
                value={this.state.search}
                onChange={(e) => this.handleSearch(e)}
              />
            </Col>
          </Row>
          <Row>
            {this.props.books.map(
              (book) =>
                book.title
                  .toLowerCase()
                  .includes(this.state.search.toLowerCase()) && (
                  <Col
                    className="mb-4"
                    xm={12}
                    sm={6}
                    md={4}
                    lg={3}
                    key={book.asin}
                  >
                    <SingleBook book={book} />
                  </Col>
                )
            )}
          </Row>
        </Container>
      </div>
    )
  }
}
