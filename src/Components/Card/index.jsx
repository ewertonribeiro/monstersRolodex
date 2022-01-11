import {Component} from "react";
import "./style.scss"



export default class Card extends Component{


render(){
return(
<div className="CardSingle">
    <div className='img'>
        <img/>
    </div>
    <div className='MonsterInfo'>
        <strong>{this.props.name}</strong>
        <span>monster1@instagram</span>

    </div>

</div>

)
}

}
