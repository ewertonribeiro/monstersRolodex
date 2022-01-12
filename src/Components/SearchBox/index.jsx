import {Component} from 'react';
import './style.scss';



export default class SearchBox extends Component{

render(){
return(
<div className="SearchBox">

    <input type="search" placeholder={this.props.placeholder} onChange={this.props.handleChange}/>

</div>
);
}

}
