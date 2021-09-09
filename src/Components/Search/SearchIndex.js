import React, { Component } from 'react'
import { Input } from 'reactstrap';

class SearchIndex extends Component {
  constructor(props){
    super(props)
    this.state = {
      thing: ['pen', 'marker', 'eraser', 'notebook', 'pencil', 'scissors', 'highlighter', 'stapler', 'paper clip', 'binder', 'hole punch', 'laminator', 'laminating sheets', 'protective sheets', 'index cards'],
      newThing: []
    }

    this.searchFunction = this.searchFunction.bind(this)
    //this.handleClick = this.handleClick.bind(this)
  }

  /*handleChange(e) {
    this.setState({
      thing: e.target.value
    })
  }

  handleClick(e) {
    this.searchFunction()
  }*/

    /*componentDidMount() {
      this.setState({
        thing: ['pen', 'marker', 'eraser', 'notebook', 'pencil', 'scissors', 'highlighter', 'stapler', 'paper clip', 'binder', 'hole punch', 'laminator', 'laminating sheets', 'protective sheets', 'index cards']
      })
    }*/

    searchFunction(value) {
      console.log(value);
      let newThing = this.state.thing.filter(result => result.includes(value.toLowerCase()))
        this.setState({
          newThing: newThing
        })
    }
  
    displaySearchItem = (newThing, thingId) => <li key={thingId}>{newThing}</li>



    render() {
      return(
        <div>
        <Input placeholder='Search' type='text' onChange={e => this.searchFunction(e.target.value)} />
        <h2>Results:</h2>
        {this.state.newThing && this.state.newThing.length > 0 ?
        this.state.newThing.map(this.displaySearchItem) :
        this.state.thing.map(this.displaySearchItem)}
        </div>
      )
    }
}

 
export default SearchIndex;
