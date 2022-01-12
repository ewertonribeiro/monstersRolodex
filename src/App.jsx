import React, {Component} from 'react';
import './Styles/App.scss'

import CardList from './Components/CardList';
import SearchBox from './Components/SearchBox';


class App extends Component{
constructor(){
super();

this.state={
monsters:[],
searchField:""
}



}



componentDidMount(){
    const url = "https://jsonplaceholder.typicode.com/users"


      fetch(url)
        .then(res=>res.json())
        .then(data=>this.setState({monsters:data}))

}


handleChange = e => {

this.setState({searchField:e.target.value})
console.log("HandleChange")
}

render(){

const {monsters , searchField} = this.state
const filtered = monsters.filter(monster=>monster.name.toLowerCase().includes(searchField.toLowerCase()))

return(

<div className="App">
<header>

    <h1>Monster Rolodex</h1>

</header>

<SearchBox
placeholder="search monster"
handleChange={this.handleChange}
/>

<CardList monsters={filtered}  />


</div>

)
}
}


export default App

