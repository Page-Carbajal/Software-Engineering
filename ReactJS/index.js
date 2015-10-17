//var React = require('react');
//var ReactDOM = require('react-dom');
import * as React from 'react';
import ReactDOM from 'react-dom';

class CustomYourFather extends React.Component
{
    render()
    {
        return React.DOM.h1(null, this.props.name + ', I am your father!' )
    }
}

class YourFather extends React.Component
{
    render()
    {
        return React.createElement('h1', null, 'Luk, I am your father!' )
    }
}

ReactDOM.render(

    <CustomYourFather name="Luk" />,

    document.getElementById('example')

);
