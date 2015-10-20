import React from 'react';
import EnumeratedList from './EnumeratedList.js';

class ExpenseLists extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {categories: this.props.source.categories, latest: this.props.source.latest};
    }

    render()
    {
        return(
            <div className="row">
                <div className="col-md-8 col-md-offset-2 text-center">
                    <h3 className="expenseListsHeading">Lastets Expenses and Categories</h3>
                </div>
                <div className="col-md-4 col-md-offset-2">
                    <EnumeratedList id="lastExpenses" listTitle="Latest Expenses" source={this.state.latest} />
                </div>
                <div className="col-md-4">
                    <EnumeratedList id="topCategories" listTitle="Expense Categories" source={this.state.categories} enumProperty="count" />
                </div>
            </div>
        );
    }
}

export default ExpenseLists;