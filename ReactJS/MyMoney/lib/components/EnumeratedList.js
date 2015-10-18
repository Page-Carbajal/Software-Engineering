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
                <div className="list-group-item">
                    <span className="badge">14</span>Category Name
                </div>
            </div>
        );
    }

}

export default EnumeratedList;