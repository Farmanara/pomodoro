import React from 'react';
import ReactDOM, { render } from 'react-dom';
import './index.css';
import alarm from '/home/fighter/mp/fccProjects/pomodoro/src/guitar.mp3'

class Clock extends React.Component{
  constructor(props){
    super(props);

    this.state={
      timer:1500,
      sessionLength:25,
      breakLength:5,
      timerCounting:'OFF',
      timerName:'Session',
      minutes:25, 
      seconds:'00'
        }

    this.handleChange=this.handleChange.bind(this);
    this.sessionDecrement=this.sessionDecrement.bind(this);
    this.sessionIncrement=this.sessionIncrement.bind(this);
    this.breakDecrement=this.breakDecrement.bind(this);
    this.breakIncrement=this.breakIncrement.bind(this);
    this.reset=this.reset.bind(this);
    this.startStop=this.startStop.bind(this);
  }






  sessionDecrement(){
    if(this.state.sessionLength>1)
    this.setState({
      sessionLength:this.state.sessionLength-1,
      minutes:this.state.minutes-1
    })
  }

  sessionIncrement(){
    if(this.state.sessionLength<60){
      this.setState({

        sessionLength:this.state.sessionLength+1,
        minutes:this.state.minutes+1

         })

    }
  }


  breakDecrement(){
    if(this.state.breakLength>1){
      this.setState({
        breakLength:this.state.breakLength-1,
      })
    }
  }

  breakIncrement(){
    if(this.state.breakLength<60){
      this.setState({
        breakLength:this.state.breakLength+1
      })
    }
  }



  handleChange(e){

    //need to review regex topic
    const re = /^[0-9\b]+$/
    if (e.target.value === '' || re.test(e.target.value) &&e.target.value>0 && e.target.value<=60) {
if(e.target.id=="session-length"){
  this.setState({
    sessionLength:e.target.value
  },()=>{this.setState({timer:(this.state.sessionLength*60)})})
}
if(e.target.id=="break-length"){
  this.setState({breakLength:e.target.value})
}
  }
  }


  reset(){
    this.setState({
      timer:1500,
      sessionLength:25,
      breakLength:5,
      timerCounting:"OFF",
     minutes:25,
     seconds:'00',
     timerName:'Session'
    })

  
    let beep=document.getElementById('beep');
    beep.pause();
    beep.currentTime=0;
    clearInterval(this.interval)
  }

startStop(){
  switch (this.state.timerCounting){
    case 'OFF': 
      this.setState({
        timerCounting:"ON",
        timer:this.state.minutes*60
      });
      this.interval=setInterval(()=> this.counter(),1000);
      break;

    case 'ON':
      this.setState({
        timerCounting:'PAUSE'
      });
      break;

    case 'PAUSE':
      this.setState({timerCounting:'ON'});
      default:
        break;  
  }
}


counter(){
  let beep= document.getElementById('beep')
    if (this.state.timerCounting==='ON') {
      const countDown = this.state.timer-1;
      if (countDown>=0) {
        const min =Math.floor(countDown/60);
        const sec =countDown-min*60;

        this.setState({
          timer:countDown,
          minutes:min<10? '0' +min:min,
          seconds: sec<10? '0'+sec:sec
        });
        if (countDown===0){
          beep.play()
        
        }
      }
          else {
                
            let ntimerName,ntimerLength,ntimer,nSec;
            if (this.state.timerName==='Session'){          
    ntimerName='Break';ntimerLength=this.state.breakLength

            }
          else{
            ntimerName='Session';
            ntimerLength=this.state.sessionLength
          }
            ntimer=ntimerLength*60;
              //why?
              ntimerLength=ntimerLength;
              nSec='00'

            this.setState({

              timerName:ntimerName,
              timer:ntimer,
              minutes:ntimerLength<10?'0'+ntimerLength:ntimerLength,
              seconds:nSec,

            });

          }
      
    }


}



render(){

      return(
    <div className="container" >
      <label id="session-label">Session Length</label>
      <button id="session-decrement" onClick={this.sessionDecrement}>-</button>
      <input id="session-length" pattern="[0-9]*" type="text"  value={this.state.sessionLength} onChange={this.handleChange} ></input>
      <button id="session-increment" onClick={this.sessionIncrement}>+</button>
      <label  id="break-label">Break Length</label>
      <button id="break-decrement" onClick={this.breakDecrement}>-</button>
      <input id="break-length" type="text" value={this.state.breakLength} onChange={this.handleChange} ></input>
      <button id="break-increment" onClick={this.breakIncrement}>+</button>
      <div id="timer-label" >{this.state.timerName}</div>
      <p id="time-left"  >{this.state.minutes}:{this.state.seconds} </p>
      <div className="start-stop-reset-buttons">
      <button id="reset" onClick={this.reset}>Reset</button>
      <button id ="start_stop"onClick={this.startStop}>Start-Stop</button>
      </div>
      <audio id="beep" src={alarm}></audio>
    </div>

  );
}
}

ReactDOM.render(<Clock/>,document.getElementById("root"))