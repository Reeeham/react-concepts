import React from "react";

export default class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState((state) => ({
      isToggleOn: !state.isToggleOn,
    }));
  }

  render() {
    return (
      <button
        style={{ width: "80px", height: "50px" }}
        onClick={this.handleClick}
      >
        {this.state.isToggleOn ? "ON" : "OFF"}
      </button>
    );
  }
}
export class LoggingButton extends React.Component {
    constructor(props){
        super(props);
        this.state = { 
            name : ''
        }
      //  this.handleInputChange= this.handleInputChange.bind(this);
    }
    handleInputChange (e )
    {
        this.setState({name : e.target.value })
        console.log('name changed' + e.target.value)
    }
  /***
   * The problem with this syntax is that a different callback is created each time the LoggingButton renders.
   * In most cases, this is fine. However, if this callback is passed as a prop to lower components,
   * those components might do an extra re-rendering. We generally recommend binding in the constructor or using the
   * class fields syntax, to avoid this sort of performance problem.
   */
  handleClick() {
    console.log("this is:", this);
  }
  deleteRow(id,e){

  }

  /**
   * 
   *  This syntax ensures `this` is bound within handleClick.
  // Warning: this is *experimental* syntax.
  handleClick = () => {
    console.log('this is:', this);
  }

   */
  render() {
    // This syntax ensures `this` is bound within handleClick
    return (
      <div>
        <button onClick={() => this.handleClick()}>Click me</button>
        <br/>
        <button onClick={(e) => this.deleteRow(1,e)}>Delete me</button>
        <br/>
        <button onClick={this.deleteRow.bind(this, 1)}>Delete Row</button>
        <br/>
        <input type="text" value={this.state.name} onChange={this.handleInputChange.bind(this)}/>
        {this.state.name}
      </div>
    );
  }
}
export function ActionLink() {
  function handleClick(e) {
    e.preventDefault();
    console.log("The link was clicked.");
  }
  return (
    <a href="#" onClick={handleClick}>
      Click me
    </a>
  );
}
