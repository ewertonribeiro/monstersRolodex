import React, {Component} from 'react';
import './Styles/App.scss'

import CardList from './Components/CardList';

class App extends Component{
constructor(){
super();

this.state={
monsters:[]
}
}



componentDidMount(){
    const url = "https://jsonplaceholder.typicode.com/users"


      fetch(url)
        .then(res=>res.json())
        .then(data=>this.setState({monsters:data}))
        .then(data=>console.log(this.state.monsters))
}

render(){
return(

<div className="App">
    <header>

    <h1>Monster Rolodex</h1>

</header>

<div className='SearchBox'>

    <input type="text" placeholder = "search monsters"/>

</div>

<CardList monsters={this.state.monsters} />


</div>

)
}
}


export default App

