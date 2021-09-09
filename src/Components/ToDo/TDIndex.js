import React, { Component } from 'react';
import { Input, Button, Form } from 'reactstrap';

class TDIndex extends Component {
    constructor(props){
        super(props)
        this.state = {
            task: '',
            newTask: '',
            taskList: []
        }
        this.handleChange = this.handleChange.bind(this)
    }

    toDoTask(taskz, taskId){
        return(
            <li key={taskId}>{taskz}</li>
        )
    }

    handleChange(e) {
        this.setState({
            newTask: e.target.value
        })
    }

      handleSubmit(value) {
        this.toDoTask(value) 
    }

    /*  componentDidMount(){

    }*/

    render(){
        return(
            <Form>
            <h1>Task List:</h1><br/>
            <Input type='text' value={this.state.newTask} onChange={this.handleChange} /> <br/>
             <Button onSubmit={this.handleSubmit}>Submit</Button>
            </Form>
        )
    }
}

export default TDIndex