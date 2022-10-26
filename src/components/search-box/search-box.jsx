import { Component } from "react";
import "./search-box.css";

const SearchBox = (props) => {
  const { onChangeHandler, placeholder, className } = props;

  return (
    <input
      className={className}
      type='search'
      placeholder={placeholder}
      onChange={onChangeHandler}
    />
  );
}

// class SearchBox extends Component {

//   render() {

//     const { onChangeHandler, placeholder, className } = this.props;

//     return(
//       <input
//         className={className}
//         type='search'
//         placeholder={placeholder}
//         onChange={onChangeHandler}
//       />
//     );
//   }

// }

export default SearchBox;