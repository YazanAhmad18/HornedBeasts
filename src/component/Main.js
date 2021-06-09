import React from "react";
import HornedBeasts from "./HornedBeasts";
import datahorns from './data.json';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      HornsNum: 0,
      choseHornsNum: this.props.hornedBeasts,
    };
  }

  choseHorns = (e) => {
    this.setState = {
      HornsNum: e.target.value,

    };
    console.log(this.setState.HornsNum);
    let choseHornsNum = datahorns.filter((num) => {
        if (Number(this.setState.HornsNum) >100) {
            return num.horns > 0;
        }
      else{
        return num.horns === Number(this.setState.HornsNum);
      }      
    
    });
this.props.displayFilteredImages(choseHornsNum)
  };

  render() {
    return (
      <div>
        <Container>
          <Row>
            <select
              style={{ margin: "2rem" }}
              onChange={(e) => this.choseHorns(e)}
            >
              <option value="101">all</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
              <option value="100">100</option>
            </select>
          </Row>

          <Row>
            {this.props.dataHorn.map((beast) => { 
              return (
                <HornedBeasts
                  imageUrl={beast.image_url}
                  title={beast.title}
                  description={beast.description}
                  keyword={beast.keyword}
                  horns={beast.horns}
                />
              );
            })}
          </Row>
        </Container>
      </div>
    );
  }
}
export default Main;
