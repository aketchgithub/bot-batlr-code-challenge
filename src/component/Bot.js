// this component should accept bot data as props and render the bots' information on the UI
import React from "react";
class Bot extends React.Component {
    render() {
        const {bot} = this.props;
        return(
            <div>
                <h2>
                    {bot.name}
                </h2>
                <p>{bot.catchphrase}</p>
                <img src={bot.avatar_url} alt="Bot Name" />
            </div>
        );
    }
}

export default Bot;