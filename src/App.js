import React ,{Component} from 'react';
import Button from './component/Button';
import './css/style.css'
class App extends Component {

constructor(props)
{
  super(props);
  

  //can be changed by setState .. 
  //the values needed in the view stage 
  // btw : props ...> only read   + can't be modified  .. 
  this.state = {
    current:'0' ,
    previous: [], 
    nextIsReset : false
  }


}
//the function of the C button .... 
reset = () =>
{
  this.setState({ current : '0' , previous: [] , nextIsReset: false});
}

//merge the num with the operation sign .. ..  . . . 
addToCurrent =(symbol) =>
{
  if (["/","-","+","*"].indexOf(symbol)> -1){
    //store the pre chars in a variable
    let {previous} = this.state; 
    //add it to an array
    previous.push(this.state.current + symbol); 
    //update the state .. new chars+ old stored in the array.
    this.setState({previous , nextIsReset:true} ); 


  }
  else {
    if ((this.state.current ==="0" && symbol !== ".")  ||  this.state.nextIsReset){
  this.setState({current : symbol , nextIsReset:false});
  }
    else{
    //this.state.current +
    this.setState({current : this.state.current +symbol});

  }
}
}


calculate = ( ) =>{

  let {current , previous, nextIsReset} = this.state; 
  if (previous.length > 0 )
  {
    current = eval(String (previous[previous.length-1] +current)); 
   this.setState({current,previous:[] ,nextIsReset:true});
  }


}



render() {
  //array of buttons ,, css style 
  const buttons = [
    {symbol: 'C' , cols:3 , action : this.reset },
    {symbol:' /' , cols:1  ,action : this.addToCurrent},
    {symbol:'7' , cols:1  ,action : this.addToCurrent},
    {symbol:'8' , cols:1  ,action : this.addToCurrent},
    {symbol:'9' , cols:1  ,action : this.addToCurrent},
    {symbol:'*' , cols:1  ,action : this.addToCurrent},
    {symbol:'4' , cols:1  ,action : this.addToCurrent},
    {symbol:' 5' , cols:1  ,action : this.addToCurrent},
    {symbol:' 6' , cols:1  ,action : this.addToCurrent},
    {symbol:'-' , cols:1  ,action : this.addToCurrent},
    {symbol:'1' , cols:1  ,action : this.addToCurrent}, 
    {symbol:'2' , cols:1  ,action : this.addToCurrent}, 
    {symbol:'3' , cols:1  ,action : this.addToCurrent},
    {symbol:'+' , cols:1  ,action : this.addToCurrent},
    {symbol:'0' , cols:2 ,action : this.addToCurrent},
    {symbol:'.' , cols:1  ,action : this.addToCurrent},
    {symbol:'=' , cols:1  ,action : this.calculate}


   ];
  

   // how to map an element in REACT.. 
   //retrieve the last element in the array .  
   

  return (
    <div className="App">

     
    {this.state.previous.length > 0 
    ? 
    <div className="explain-last" > {this.state.previous[this.state.previous.length-1]} </div>
    : null
    }
      
      
    <input className="result" type="text" value={this.state.current}/>
    
     
    { buttons.map((btn,i) =>  
      {
// note that the Button is the class we make and not <button>
// the rendered component needs to have a unique key  ..
//the stuffs are the props for the class Button ,, so nice ..  

         return (<Button
         key ={i} 
         symbol={btn.symbol} 
         cols={btn.cols}
         action ={(symbol) => btn.action(symbol)}
         
         />);


      }
    
      )}

    </div>
  );
}

}
export default App;
