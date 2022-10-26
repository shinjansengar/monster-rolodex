import { Component } from "react";
import "./card-list.css";
import Card from "../card/card";

const CardList = (props) => {
  const { list } = props;
  return (
    <div className="card-list">
      {list.map(item => {
        return <Card key={item.id} item={item} />
      })}
    </div>
  )
};

// class CardList extends Component {

//   render() {
//     const { list } = this.props;
//     return (
//       <div className="card-list">
//         {list.map(item => {
//           return <Card key={item.id} item={item}/>
//         })}
//       </div>
//     )
//   }
// }

export default CardList;