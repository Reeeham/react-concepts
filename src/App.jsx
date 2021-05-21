import './App.css';
import Clock from './components/state-and-lifecycle/lifecycle'
import Props from './components/props/props'
import Toggle, { LoggingButton } from './components/handling-events/events'
import EventsWithHooks from './components/handling-events/events-with-hooks'
import LoginControl from './components/conditional-rendering/ElementVariables'
import Mailbox from './components/conditional-rendering/InlineIf';
import Page from './components/conditional-rendering/prevent-component-render';
const user =  { 
      name : "Reham",
      hobbies: ["reading","cooking", "coding", "walking"]
}
function App() {
  const messages = ['React', 'Re: React', 'Re:Re: React'];

  return (
    
    <div className="App">
      <header className="App-header">
       
          {/* start props */}
          <Props user={user}>
            <p>children from props component</p>
          </Props>
          {/* end props */}

          {/* start lifecycle */}
          <Clock/>
          {/* end lifecycle */}

          {/* start handling events */}
           <Toggle />
           <LoggingButton/>
           <EventsWithHooks/>
           {/* end handling events  */}

           {/* start conditional rendering */}
           <LoginControl />
           <Mailbox  unreadMessages={messages} />
           <Page/>
           {/* end  conditional rendering */}
      </header>
    </div>
  );
}

export default App;
