import React from 'react';

class EnumeratedList extends React.Component
{
    constructor(props)
    {
        super(props);
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
                {this.props.source.map( function(item){
                    return(
                        <div className="list-group-item">
                            <span className="badge">{item.count}</span>{item.name}
                        </div>
                    );
                })}
            </div>
        );
    }

}

export default EnumeratedList;