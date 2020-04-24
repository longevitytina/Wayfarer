import React, { Component } from 'react';
import axios from 'axios';

class PostDetails extends Component {
  state = { 
    data: [],
    city: {},
    author: {}
   }

  componentDidMount() {
    axios
      .get(`http://localhost:3001/api/v1/posts/${this.props.match.params.id}`)
      .then((res) => {this.setState({
        data: res.data,
        city: res.data.city,
        author: res.data.author,
        });
        console.log(res.data);
        console.log(this.state);
        
        // console.log(this.state.data.city['name']);
      })
      .catch(error => console.log("Error fetching and parsing data", error));
  }
  render() { 
    return ( 
      <div>
        <p>{this.state.data.title}</p>
        <img src={this.state.data.image} alt={this.state.data.title} />
        <p>{this.state.city.name}</p>
        <p>{this.state.author.name}</p>
        <p>{this.state.data.body}</p>
      </div>
     );
  }
}



export default PostDetails;