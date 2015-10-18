import React from 'react'

class AddExpense extends React.Component
{
    render()
    {
        return(
            <div className="row">
                <div className="col-md-8 col-md-offset-2">
                    <h3>New Expense</h3>
                    <form role="form">
                        <div className="form-group">
                            <label for="name">Expense</label>
                            <input type="text" className="form-control" id="name" name="name" ref="name" />
                        </div>
                        <div className="form-group">
                            <label for="date">Date</label>
                            <input type="text" className="form-control" id="date" name="date" ref="date" />
                        </div>
                        <div className="form-group">
                            <label for="name">Category</label>
                            <select id="category" name="category" ref="category" className="form-control">
                                <option>Transportation</option>
                                <option>Food</option>
                                <option>Entertainment</option>
                            </select>
                        </div>
                    </form>
                </div>
            </div> );
    }
}

export default AddExpense;