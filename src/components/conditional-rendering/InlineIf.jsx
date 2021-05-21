
function Mailbox(props) {

    const unreadMessages = props.unreadMessages;

    const isLoggedIn = true;

    // inline if : if unreadMessages.length = 0 It won't be rendered
    return (<div>
        <h1>Hello!</h1>
        {unreadMessages.length > 0 && <h2>You have {unreadMessages.length} unread messages.</h2>}
        <br />
          The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.
        <div>

            {/* {isLoggedIn
        ? <LogoutButton onClick={this.handleLogoutClick} />
        : <LoginButton onClick={this.handleLoginClick} />
      } */}
        </div>
    </div>);



}
export default Mailbox;