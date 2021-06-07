import React from 'react';

class HornedBeasts extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      countVotes : 0 
    }
  }

 Voting = () => {
    let numVotes = this.state.countVotes;
    this.setState({
        countVotes : numVotes += 1
    })
 }

  render() {
    return (
      <div>
        <div>
          <h2>{this.props.title}</h2>
          <img onClick={this.Voting} src={this.props.imageUrl} alt={this.props.keyword}></img>
          <p>Description : {this.props.description}</p>
          <p>Votes : {this.state.countVotes}</p>
        </div>
      </div>
    );
  }
}
export default HornedBeasts;