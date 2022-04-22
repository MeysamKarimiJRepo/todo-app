import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import FirstComponent from './components/learning-examples/FirstComponent'
import SecondComponent from './components/learning-examples/SecondComponent'
import ThirdComponent, {ForthComponent} from './components/learning-examples/ThirdComponent'
function App() {
  return (
    <div className='LearningComponent'>
      <LearningComponent></LearningComponent>
    </div>
  );
}

class LearningComponent extends Component{
  render(){
    return (
    <div className="App">
      <FirstComponent></FirstComponent>
      <SecondComponent></SecondComponent>
      <ThirdComponent></ThirdComponent>
       <ForthComponent></ForthComponent>
    </div>
    )
    }
}


export default App;
