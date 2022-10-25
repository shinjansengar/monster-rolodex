import { Component } from "react";
import "./card-list.css";
import Card from "../card/card";

class CardList extends Component {

  render() {
    const { list } = this.props;
    return (
      <div className="card-list">
        {list.map(item => {
          return <Card item={item}/>
        })}
      </div>
    )
    return <h1>Card</h1>
  }
}

export default CardList;