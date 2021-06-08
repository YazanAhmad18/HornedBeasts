import React from 'react';
import SelectedBeast from './SelectedBeast';

import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'




class HornedBeasts extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      Votes: 0,
      showmodal: false
    }
  }

  Voting = () => {
    let numVotes = this.state.Votes;
    this.setState({
      Votes: numVotes += 1
    })
    this.openshow();
  }

  openshow = () => {
    this.setState({ showmodal: true });
  };

  closeshow = () => {
    this.setState({ showmodal: false });
  };

  render() {

    return (
      <>
        <Card style={{ width: '18rem', margin: '1rem' }}>
          <Card.Img variant="top" onClick={this.Voting} src={this.props.imageUrl} alt={this.props.keyword} />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>
              {this.props.description}
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>Horns : {this.props.horns}</ListGroupItem>
            <ListGroupItem>⭐Votes : {this.state.Votes}</ListGroupItem>
          </ListGroup>
        </Card>

        <SelectedBeast
          showmodal={this.state.showmodal}
          closeshow={this.closeshow}
          title={this.props.title}
          description={this.props.description}
          imageUrl={this.props.imageUrl}
          horns={this.props.horns}
        />
      </>
    );
  }
}
export default HornedBeasts;