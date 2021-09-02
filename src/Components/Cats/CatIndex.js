import React, { Component } from 'react';
import CatList from './CatList';
 
class CatIndex extends Component {
  constructor(props) {
    super(props)
    this.state = {
      breeds: ['persian', 'siamese', 'maine coon', 'ragdoll', 'scottish fold', 'sphynx', 'british shorthair', 'bengal', 'american shorthair']
    }
  }

  render() {
    /*let { breeds } = this.state.breeds*/
    return(
      <div>
      <CatList breeds={this.state.breeds} />
     </div>
    )
  }

}

//in the future use react documentation from the react manual. 
export default CatIndex