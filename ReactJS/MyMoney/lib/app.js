import React from 'react';
import MainNavigation from './components/MainNavigation.js';
import AddExpense from './components/AddExpense.js';
import ExpenseLists from './components/ExpenseLists.js';

class App extends React.Component
{
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
                <AddExpense />
                <ExpenseLists />
            </section>
        );
    }
}

export default App;