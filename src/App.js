import './all.css'
import {data} from './data'
import Hello from './Book'


const Movies = ()=>{

return(
  data.map((i)=>{
    return(
      <Hello key={i.id} {...i}/>
    )
  })
)

}
export{
  show,
}

 function show(n){
  alert(`happy learning all this ${n}`);
 
}

function App(){

return(
  <>
  <center>
 <Movies/>
 </center>
 </>
)

}





export default App