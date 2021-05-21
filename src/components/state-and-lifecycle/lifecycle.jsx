import React from 'react';


export default class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        };

    }

    componentDidMount() {
        // method runs after the component output has been rendered to the DOM.
        // This is a good place to set up a timer:
        // When the Clock output is inserted in the DOM, React calls the componentDidMount() lifecycle method.
        //  Inside it, the Clock component asks the browser to set up a timer to call the component’s tick() method 
        //  once a second.Every second the browser calls the tick() method. Inside it, the Clock component schedules a
        //UI update by calling setState() with an object containing the current time. Thanks to the setState() call,
        // React knows the state has changed, and calls the render() method again to learn what should be on the screen.
        //   This time, this.state.date in the render() method will be different, 
        //and so the render output will include the updated time. React updates the DOM accordingly.
        this.timerID = setInterval(() => this.tick(), 1000)
    }
    componentWillUnmount() {

        // If the Clock component is ever removed from the DOM, React calls the componentWillUnmount()
        //  lifecycle method so the timer is stopped.

        clearInterval(this.timerID);
    }

    tick() {
        /**
         * this.props and this.state may be updated asynchronously,
         *  you should not rely on their values for calculating the next state.
         * To fix it, use a second form of setState() that accepts a function rather than an object.
         *  That function will receive the previous state as the first argument,
         *  and the props at the time the update is applied as the second argument:
         */
        // Wrong
        // this.setState({
        //     counter: this.state.counter + this.props.increment,
        //   });
        /**
         * We used an arrow function above, but it also works with regular functions:
         * // Correct
         * this.setState(function(state, props) {
         * return {
         *  counter: state.counter + props.increment };
         * });
         */

        this.setState({ date: new Date() },() => {
            //it's callback function runs every time a state change
        });
    }
    render() {
        return (
            <div>
                <h1>Hello World!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}</h2>
            </div>
        );
    }
}