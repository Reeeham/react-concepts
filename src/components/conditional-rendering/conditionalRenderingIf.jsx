function Greetings(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  } else {
    return <GuestGreetings />;
  }
}

function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreetings(props) {
  return <h1>Please sign up.</h1>;
}

export default Greetings;
