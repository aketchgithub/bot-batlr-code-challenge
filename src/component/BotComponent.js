
// function YourBotArmy() {
//     return (
//       <div>
//         <h1>Your Bot Army</h1>
//         <Route path='/bots/:id' render={props => {
//           const bot = bots.find(bot => bot.id === props.match.params.id);
//           return (
//             <div>
//               {selectedBot ? (
//                 <div>
//                   <h2>{selectedBot.name}</h2>
//                   <p>{selectedBot.description}</p>
//                   <button onClick={handleReleaseBot}>Release Bot</button>
//                 </div>
//               ) : (
//                 <div>
//                   <h2>{bot.name}</h2>
//                   <p>{bot.description}</p>
//                   <button onClick={() => handleSelectBot(bot)}>Enlist Bot</button>
//                 </div>
//               )}
//             </div>
//           );
//         }} />
//       </div>
//     );
//   }


// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import axios from 'axios';

// function BotList() {
//   const [bots, setBots] = useState([]);
//   const [selectedBot, setSelectedBot] = useState(null);

//   useEffect(() => {
//     axios.get('http://localhost:3000/bots')
//       .then(res => setBots(res.data))
//       .catch(err => console.log(err));
//   }, []);

//   function handleSelectBot(bot) {
//     if (selectedBot && selectedBot.id === bot.id) {
//       alert('Bot already enlisted');
//     } else {
//       setSelectedBot(bot);
//     }
//   }

//   function handleReleaseBot() {
//     setSelectedBot(null);
//   }

//   return (
//     <div>
//       <h1>Bot List</h1>
//       <ul>
//         {bots.map(bot => (
//           <li key={bot.id}>
//             <Link to={`/bots/${bot.id}`}>{bot.name}</Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// function YourBotArmy() {
//   return (
//     <div>
//       <h1>Your Bot Army</h1>
//       <Route path='/bots/:id' render={props => {
//         const bot = bots.find(bot => bot.id === props.match.params.id);
//         return (
//           <div>
//             {selectedBot ? (
//               <div>
//                 <h2>{selectedBot.name}</h2>
//                 <p>{selectedBot.description}</p>
//                 <button onClick={handleReleaseBot}>Release Bot</button>
//               </div>
//             ) : (
//               <div>
//                 <h2>{bot.name}</h2>
//                 <p>{bot.description}</p>
//                 <button onClick={() => handleSelectBot(bot)}>Enlist Bot</button>
//               </div>
//             )}
//           </div>
//         );
//       }} />
//     </div>
//   );
// }

// function App() {
//   return (
//     <Router>
//       <div>
//         <Route exact path='/' component={BotList} />
//         <Route path='/your-bot-army' component={YourBotArmy} />
//       </div>
//     </Router>
//   );
// }

// export default App;
