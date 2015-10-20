import React from 'react';
import MainNavigation from './components/MainNavigation.js';
import AddExpense from './components/AddExpense.js';
import ExpenseLists from './components/ExpenseLists.js';
import _ from 'lodash';

class App extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {source: {categories: categories, latest: latest}};
    }

    registerExpense(name, amount, date, category)
    {
        // TODO: Validate
        if( name.toString().trim() == '' || date.toString().trim() == '' || category.toString().trim() == '' ){
            console.log('Invalid Data');
            return false;
        }

        var latestExpense = {name: name, amount: parseFloat(amount), count: 1};
        var latestCategory = {name: category, amount: parseFloat(amount), count: 1};

        // TODO: Post data to server

        console.log('Latest Expense: ', latestExpense, '. Latest Category: ', latestCategory);

        var valueAdded = false;
        categories = _.each(categories, function(c){
            if( c.name == latestCategory.name ){
                c.amount = parseFloat(c.amount) + parseFloat(latestCategory.amount);
                c.count = parseFloat(c.count) + 1;
                valueAdded = true;
            }
        });

        if(!valueAdded){
            categories.push(latestCategory);
        }

        console.log('Updated Categories: ', categories);
        latest.push(latestExpense);
        console.log('Updated expenses: ', latest);
        this.setState({source: {categories: categories, latest: latest}});
    }

    updateDataSource()
    {
        // TODO: Actually get data from server
        this.setState( {source: {categories: categories, latest: latest} });

        // This function will run every 2 seconds
        setTimeout(function(){
            this.updateDataSource();
        }.bind(this), 2000);

    }

    componentDidMount()
    {
        setTimeout(function(){
            this.updateDataSource();
        }.bind(this), 2000);
    }

    render()
    {
        return (
            <section className="reactApp">
                <MainNavigation />
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h1>Where is my money?</h1>
                        <hr />
                    </div>
                </div>
                <AddExpense onExpenseSubmit={this.registerExpense.bind(this)} />
                <ExpenseLists source={this.state.source} />
            </section>
        );
    }
}

export default App;