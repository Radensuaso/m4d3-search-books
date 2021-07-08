import { Card } from "react-bootstrap"
import MyBadge from "./MyBadge"

import React, { Component } from "react"

class SingleBook extends Component {
  state = {
    selected: false,
  }

  render() {
    return (
      <Card
        className={this.state.selected ? "bg-primary text-white" : ""}
        onClick={(e) =>
          this.setState((e) => ({
            selected: !this.state.selected,
          }))
        }
      >
        <Card.Img
          className="img-fluid"
          variant="top"
          src={this.props.book.img}
        />
        <Card.Body>
          <Card.Title>{this.props.book.title}</Card.Title>
          <Card.Text>
            <strong>Category: </strong>
            {this.props.book.category}
          </Card.Text>
          <MyBadge color={"success"} text={"€ " + this.props.book.price} />
        </Card.Body>
      </Card>
    )
  }
}

export default SingleBook
