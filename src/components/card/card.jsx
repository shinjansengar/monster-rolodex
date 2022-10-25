import { Component } from "react";
import "./card.css";

class Card extends Component {

  render() {
    const { id, name, email } = this.props.item;
    return (
      <div className="card-container" key={id}>
        <img
          src={`https://robohash.org/${id}?set=set2&size=240x240`}
          alt={`monster ${name}`}
        />
        <h1>{name}</h1>
        <p>{email}</p>
      </div>
    )
  }
}

export default Card;