import './App.css';
import Clock from './components/state-and-lifecycle/lifecycle'
import Props from './components/props/props'
import Toggle, { LoggingButton } from './components/handling-events/events'
import EventsWithHooks from './components/handling-events/events-with-hooks'
const user =  { 
      name : "Reham",
      hobbies: ["reading","cooking", "coding", "walking"]
}
function App() {
  return (
    
    <div className="App">
      <header className="App-header">
       
          <Props user={user}>
            <p>children from props component</p>
          </Props>
          <Clock/>
           <Toggle />
           <LoggingButton/>
           <EventsWithHooks/>
      </header>
    </div>
  );
}

export default App;
