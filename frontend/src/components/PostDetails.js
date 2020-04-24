import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import axios from 'axios';

class PostDetails extends Component {
  state = { 
    data: [],

   }

  componentDidMount() {
    axios
      .get(`http://localhost:3001/api/v1/post/${this.props.postId}`)
      .then((res) => {this.setState({data: res.data});
        console.log(res.data);
      })
      .catch(error => console.log("Error fetching and parsing data", error));
  }
  render() { 
    return ( 
      <h1>Testing!</h1>
     );
  }
}
 
export default PostDetails;

// function Details({ location: { state } }) {
//   const { title, body, city, image } = state;
//   return (
//     <div>
//       <p>{title}</p>
//       <img src={image} alt={title} />
//       <p>{city}</p>
//       <p>{body}</p>
//     </div>
//   );
// }

// export default withRouter(Details);
