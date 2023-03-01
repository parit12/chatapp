import react,{useState} from 'react';
import './chatInterface.css';
const ChatInterface =() =>{
  const viewportWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
  const widthInPixels = viewportWidth * 0.01;
  const [position ,setPosition] = react.useState(350);
  const [net,setNet] =react.useState(400);
  const handleMouseMove =(e) =>{
    console.log("working")
      if(e.clientX===0){
        setPosition(...e.clientX)
      }
      let y=e.clientX;
     
      setPosition(e.clientX);
      if(y>450){
        setPosition(450);
      }
  }
 
  return(<>
    <div className='Chat_Interaface'>
      <div className='Names' style={{width:position}}></div>
      <div onDrag={handleMouseMove}  className='Vertical_line' style={{position :'absolute', backgroundColor:'red',left:position,width:'10px'}}>
      </div>
      <div className='chatting' style={{left:position}}></div>
    </div>
  </>)  
}
export default ChatInterface;