import React, { Component } from 'react'
import Button from 'reactstrap/lib/Button'

class DogPics extends Component {
    constructor(props){
        super(props)
        this.state = {
            loaded: false,
            results: []
        }
        this.dogPhotos = this.dogPhotos.bind(this)
    }

    async dogPhotos() {
        try {
            let res = await fetch ("https://dog.ceo/api/breeds/image/random")
            let json = await res.json()

            this.setState({
                loaded: true,
                results: json.message
            })
        } catch (err) {
            console.log(err)
        }
    }

    componentDidMount(){
        //this.dogPhoto()
        this.dogPhotos()
    }

    render(){
        // let { dog } = this.props.dogPhoto
        return(
            <div>
                {this.state.loaded ?
                <img src={this.state.results} /> :
                <p>"Loading Doggos..."</p>}
                <br/>
                <Button type='button' onClick={this.dogPhotos}>New Photo</Button>
            </div>
        )
    }
}

export default DogPics