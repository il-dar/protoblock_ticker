import React from 'react';

class LandingPage extends React.Component {
  constructor(){
    super();
    this.state = {
      week: "n/a",
    };
  }

  componentDidMount(){
    console.log("request being made to API")
    var requestWeek = new Request('https://158.222.102.83:4545/week',{
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/plain'
      })
    })
    fetch(requestWeek)
      .then(results =>{
        return results.json();
      }).then(weekFetch =>{
        console.log("weekFetch")
      })
  }
  render() {
    return(
      <div>
        <h1>Welcome to Protoblock</h1>
      </div>

    )
  }
}

export default LandingPage
