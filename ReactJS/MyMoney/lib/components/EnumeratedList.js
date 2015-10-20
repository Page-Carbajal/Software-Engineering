import React from 'react';

class EnumeratedList extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {source: props.source};
    }

    componentWillMount()
    {
        console.log('Before mounting!');
    }

    componentDidMount()
    {
        console.log('After mounting!');
        //setTimeout(function(){
        //    this.updateDataSource();
        //}.bind(this), 1500);
    }

    updateDataSource()
    {
        // TODO: Actually build an API
        if(this.props.id == 'lastExpenses'){
            this.setState( {source: latest} );

        }
        else{
            this.setState( {source: categories} );
        }
        //setTimeout(function(){
        //    this.updateDataSource();
        //}.bind(this), 1500);
    }

    shouldComponentMount(nextProps, nextState)
    {
        // If there are no items do not render
        if(this.state.source == null){
            return false;
        }
        console.log( 'Enumerted list Source: ', this.state.source );
        return (this.props.source.length > 10)
    }

    render()
    {
        return(
            <div className="list-group">
                <div className="list-group-item active">
                    <h4 className="list-group-item-heading">
                        {this.props.listTitle}
                    </h4>
                </div>
                {this.state.source.map( function(item){
                    if(this.props.enumProperty == null || this.props.enumProperty != 'count'){
                        return(
                            <div className="list-group-item">
                                <span className="badge">{item.amount}</span>{item.name}
                            </div>
                        );
                    } else {
                        return(
                            <div className="list-group-item">
                                <span className="badge">{item.count}</span>{item.name}
                            </div>
                        );
                    }
                }.bind(this))}
            </div>
        );
    }

}

export default EnumeratedList;