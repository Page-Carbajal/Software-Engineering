import React from 'react';
import EnumeratedList from './EnumeratedList.js';

var categories = [
    {name: "Transportation", count: 5, amount: 100},
    {name: "Food", count: 20, amount: 150},
    {name: "Entertainment", count: 2, amount: 80}
];

var latest = [
    {name: "Subway", count: 1, amount: 10},
    {name: "Movies", count: 1, amount: 14},
    {name: "Pizza", count: 1, amount: 7 }
];

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
                    <EnumeratedList listTitle="Latest Expenses" source={latest} enumProperty="amount" />
                </div>
                <div className="col-md-4">
                    <EnumeratedList listTitle="Expense Categories" source={categories} />
                </div>
            </div>
        );
    }
}

export default ExpenseLists;