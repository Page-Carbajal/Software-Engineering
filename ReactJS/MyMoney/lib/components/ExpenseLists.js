import React from 'react';
import EnumeratedList from './EnumeratedList.js';

class ExpenseLists extends React.Component
{
    render()
    {
        return(
            <div className="row">
                <div className="col-md-8 col-md-offset-2 text-center">
                    <h3 className="expenseListsHeading">Lastets Expenses and Categories</h3>
                </div>
                <div className="col-md-4 col-md-offset-2">
                    <EnumeratedList listTitle="Latest Expenses" />
                </div>
                <div className="col-md-4">
                    <EnumeratedList listTitle="Expense Categories" />
                </div>
            </div>
        );
    }
}

export default ExpenseLists;