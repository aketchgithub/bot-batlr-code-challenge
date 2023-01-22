import React from "react";
import Bot from "./Bot";
class BotCollection extends React.Component {
  state = {
    bots: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/bots')
    .then(response => response.json())
    .then(data => {
      this.setState({bots: data});
    })
    .catch(error =>{
      console.error('Error fetching data', error);
    });
  }

  render() {
    return(
      <div>
        {this.state.bots.map(bot =>(
          <Bot key = {bot.id} bot={bot}/>
        ))}
      </div>
    );
  }
}

export default BotCollection