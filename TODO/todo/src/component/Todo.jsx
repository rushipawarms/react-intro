import React, { Component } from 'react'
//import Tasklst from './Tasklst';

export default class Todo extends Component {
    constructor(){
        super();
        this.state={
            tasks:[{task:"check mail",id:1},{task:"please do HW",id:2}],
            
        }
    }
   

    sumbitTask=(currentTask)=>{
        this.setState({
            tasks:[...this.state.tasks,{task:currentTask,id:this.state.tasks.length+2}],
            
        })
    }
    deleteTask=(id)=>{
        //console.log(this);
        //console.log("delete");
        //console.log(this.tasks);
        let narr=this.state.tasks.filter((taskObj)=>{
            return taskObj.id!==id
        })
        //console.log(narr);
        this.setState({
            tasks:narr
        })
    }
    render() {
        return (
            <div>
            {/* <input type="text"value={this.state.currentTask} onChange={this.handleInpute}/>
            <button onClick={this.sumbitTask}>Submit</button> */}
            <Inputecont sumbitTask={this.sumbitTask}/>
          <Tasklist  tasks={this.state.tasks} dl={this.deleteTask}/>
         
            </div>
             
        )
    }
    }
   class Inputecont extends Component{
       state={
           currentTask:""
       }
       handleInpute=(e)=>{
        //console.log(e.target);
        this.setState({
            currentTask:e.target.value
        });
  
      }
      sendtoparent=()=>{
          this.props.sumbitTask(this.state.currentTask)
          this.setState({
            currentTask:""
          })

      }
       render(){
           return(
        <div>
            <input type="text"value={this.state.currentTask} onChange={this.handleInpute}/>
            {console.log(this.state.currentTask)}
            <button onClick={this.sendtoparent}>Submit</button>
        </div>
           )
        }
   }
    
 class Tasklist extends Component {
        render() {
            return (
                <div>
                {
              this.props.tasks.map((taskObj)=>{
                  return(
                  <div key={taskObj.id}>
                      <p>{taskObj.task}</p>
                      <button onClick={()=>{this.props.dl(taskObj.id)}}>Delete</button>
                  </div>
              )})
                  }
          </div>
            )
        }
    }
    