import {Component} from "react";
import "./style.scss"



export default class Card extends Component{


render(){
return(
<div className="CardSingle">
    <div className='img'>
        <img alt="Monster" src={`https://robohash.org/${this.props.id}?set=set2&size=180x180`}/>
    </div>
    <div className='MonsterInfo'>
        <strong>{this.props.name}</strong>
        <span>{this.props.email}</span>

    </div>

</div>

)
}

}
