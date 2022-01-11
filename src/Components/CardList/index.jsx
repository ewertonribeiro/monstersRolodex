import {Component} from "react";
import './style.scss'
import Card from '../Card'

export default class CardList extends Component{

render(){
return(
<div className='CardList'>

    {
        this.props.monsters.map(monster=>(
        <Card key={monster.id} name={monster.name}/>
        ))
    }
</div>
)
}


}
