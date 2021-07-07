import { Col, Container, Row } from "react-bootstrap"

import SingleBook from "./SingleBook"

import React, { Component } from "react"

export default class BookList extends Component {
  render() {
    return (
      <div>
        <Container>
          <h1 className="my-4">List of Our Scifi Books</h1>
          <Row>
            {this.props.books.map((book) => (
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
            ))}
          </Row>
        </Container>
      </div>
    )
  }
}
