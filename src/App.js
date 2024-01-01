
import './App.css';

function App(props) {
  var no1=parseInt(props.n1);
  var no2=parseInt(props.n2);
  return (
    <div className="App">
     <h1>sum example</h1>
     no1:{no1}<br></br>
     no2:{no2}<br></br> 
     sum is:{no1+no2}  

    </div>
  );
}


export default App;
