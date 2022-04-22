
import {Component} from "react";

//Function component
function ThirdComponent(){
    return (<div className='thirdComponent'> Third Component</div>);
  }

export class ForthComponent extends Component{
    render(){
      return (<div className='forthComponent'> Forth Component</div>);
    }
}

export default ThirdComponent;