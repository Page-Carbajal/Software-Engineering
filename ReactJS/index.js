//var React = require('react');
//var ReactDOM = require('react-dom');
import * as React from 'react';
import ReactDOM from 'react-dom';

class CustomYourFather extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {name: 'John Connor'}
    }

    render()
    {
        //return React.DOM.h1(null, this.props.name + ', I am your father!' )
        return(
            <div>
                <h1>Hello {this.state.name}</h1>
                <h2>{this.state.name}, Im your father!</h2>
                <input type="text" ref='name' />
                <input type="button" value="Update state" onClick={this.updateMessage.bind(this)} />
            </div>
        );
    }

    updateMessage()
    {
        this.setState({ name: this.refs.name.value });
    }

    componentWillMount()
    {
        console.log('Before mounting!');
    }

    componentDidMount()
    {
        console.log('After mounting!');
    }

    shouldComponentMount(nextProps, nextState)
    {
        var reRndr = nextState.name != this.state.name;
        console.log('Should Re-render: ', reRndr);
        return reRndr;
    }

}

class YourFather extends React.Component
{
    render()
    {
        return React.createElement('h1', null, 'Luk, I am your father!' )
    }
}

ReactDOM.render( <CustomYourFather name="John Connor" />, document.getElementById('example') );
