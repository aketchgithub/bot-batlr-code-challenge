//This component should handle displaying the bots that have been added to the 'army' by the user, as well as
// handling the logic for releasing and discharging bots

// import React, {useState, useEffect} from "react";
// import {BrowserRouter as Router, Route, Link} from 'react-router-dom'


// function Botlist() {
//     const [bots, setBots] = useState([]);
//     const [selectedBot, setSelectedBot] = useState(null);

//     useEffect(() =>{
//         fetch("http://localhost:3000/bots")
//         .then(response => setBots(response.data))
//         .catch(error =>console.log(error));
//     }, []);

// function handleSelectBot(bot) {
//     if (selectedBot && selectedBot.id === bot.id) {
//         alert("Bot is already enlisted");
//     }
//     else{
//         setSelectedBot(bot);
//     }
//   } 

//   const handleReleaseBot  = () => {
//     setSelectedBot ( null );
//   }
   
  
//   return(
//     <div>
//         <h1>Bot List</h1>
//         <ul>
//             {bots.map(bot =>(
//                 <li key = {bot.id}>
//                     <Link to= {`/bots/${bot.id}`}>{bot.name}</Link>
//                 </li>
//             ))}
//         </ul>
//     </div>
//   );


// }
// export default Botlist