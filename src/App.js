import { Component, useEffect, useState } from 'react';
import './App.css';
import CardList from './components/card-list/card-list';
import SearchBox from './components/search-box/search-box';

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState('');
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  console.log('render');

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setMonsters(data));
  },[]);

  useEffect(()=>{
    const newFilteredMonsters = monsters.filter(monster => {
      return monster.name.toLocaleLowerCase().includes(searchField)
    });

    setFilteredMonsters(newFilteredMonsters);

  },[monsters,searchField]);

  const onSearchChange = (event) => {
    const searchString = event.target.value.toLocaleLowerCase();
    setSearchField(searchString);
  }

  return (
    <div className="App">
      <h1 className='app-title'>Monster Rolodex</h1>
      <SearchBox
        className={'search-box'}
        placeholder={'Search monsters'}
        onChangeHandler={onSearchChange}
      />
      <CardList
        list={filteredMonsters}
      />
    </div>
  );
}


// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchField: "",
//     }
//   }

//   componentDidMount() {
    // fetch('https://jsonplaceholder.typicode.com/users')
    //   .then(res => res.json())
    //   .then(data => {
    //     this.setState(() => {
    //       return {
    //         monsters: data,
    //       }
    //     },
    //     )
    //   });
//   }

// onSearchChange = (event) => {
//   const searchField = event.target.value.toLocaleLowerCase();
//   this.setState(() => {
//     return { searchField }
//   })
// }

//   render() {
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;

    // const filteredMonsters = monsters.filter(monster => {
    //   return monster.name.toLocaleLowerCase().includes(searchField)
    // });

//     return (
//       <div className="App">
//         <h1 className='app-title'>Monster Rolodex</h1>
//         <SearchBox
//           className={'search-box'}
//           placeholder={'Search monsters'}
//           onChangeHandler={onSearchChange}
//         />
//         <CardList
//           list={filteredMonsters}
//         />
//       </div>
//     );
//   }
// }

export default App;
