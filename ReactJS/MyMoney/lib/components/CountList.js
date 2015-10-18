import React from 'react'

class CountList extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return(
            <div class="list-group">
                <a href="#" class="list-group-item active">Home</a>
                <div class="list-group-item">
                    List header
                </div>
                <div class="list-group-item">
                    <h4 class="list-group-item-heading">
                        List group item heading
                    </h4>
                    <p class="list-group-item-text">
                        Some content
                    </p>
                </div>
                <div class="list-group-item">
                    <span class="badge">14</span>Help
                </div>
                <a class="list-group-item active"><span class="badge">14</span>Help</a>
            </div>
        );
    }

}

export default CountList;