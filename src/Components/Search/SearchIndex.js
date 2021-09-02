import React, { Component } from 'react'
import { Input, Button } from 'reactstrap';

class SearchIndex extends Component {
  constructor(props){
    super(props)
    this.state = {
      things: [],
      thing: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleChange(e) {
    this.setState({
      thing: e.target.value
    })
  }

  handleClick(e) {
    this.searchFunction()
  }

    componentDidMount() {
      this.setState({
        things: ['pen', 'marker', 'eraser', 'notebook', 'pencil', 'scissors', 'highlighter', 'stapler', 'paper clip', 'binder', 'hole punch', 'laminator', 'laminating sheets', 'protective sheets', 'index cards']
      })
    }

    searchFunction(){
      //removed 
      console.log(this.state.things.filter(result => result == this.state.thing.value))
      console.log(this.state.thing)
    }

    render() {
      return(
        <div>
          <Input placeholder ='Search Here' thing={this.state.value} onChange={this.handleChange} />
          <Button onClick={this.handleClick}>Submit</Button>
          <h3>Results:</h3>
          {this.state.things}
        </div>
      )
    }
}

 
export default SearchIndex;
