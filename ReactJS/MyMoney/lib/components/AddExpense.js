import React from 'react';

class AddExpense extends React.Component
{
    addExpenseClick(e)
    {
        e.preventDefault();

        var name = this.refs.name.value.trim();
        var amount = this.refs.amount.value.trim();
        var date = this.refs.date.value.trim();
        var category = this.refs.category.value.trim();

        // Call App Event
        this.props.onExpenseSubmit(name, amount, date, category);

        // Clean the form
        //console.log('Name: ', this.refs.name);
        this.refs.name.value = '';
        //console.log('Amount: ', this.refs.amount);
        this.refs.amount.value = '';
        //console.log('Date: ', this.refs.date);
        this.refs.date.value = '';
    }

    render()
    {
        return(
            <div className="row">
                <div className="col-md-8 col-md-offset-2">
                    <h3>New Expense</h3>
                    <form role="form" onSubmit={this.addExpenseClick.bind(this)}>
                        <div className="form-group">
                            <label for="name">Expense</label>
                            <input type="text" className="form-control" id="name" name="name" ref="name" />
                        </div>
                        <div className="form-group">
                            <div className="row">
                                <div className="col-sm-6">
                                    <label for="amount">Amount</label>
                                    <input type="text" className="form-control" id="amount" name="amount" ref="amount" />
                                </div>
                                <div className="col-sm-6">
                                    <label for="date">Date</label>
                                    <input type="text" className="form-control" id="date" name="date" ref="date" />
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <label for="name">Category</label>
                            <select id="category" name="category" ref="category" className="form-control">
                                <option value="Transportation">Transportation</option>
                                <option value="Food">Food</option>
                                <option value="Entertainment">Entertainment</option>
                            </select>
                        </div>
                        <p className="form-group">
                            <input type="submit" value="Add Expense" />
                        </p>
                    </form>
                </div>
            </div> );
    }
}

export default AddExpense;