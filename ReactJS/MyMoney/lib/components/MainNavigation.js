import React from 'react';

class MainNavigation extends React.Component
{
    render()
    {
        return(
            <div className="row">
                <div className="col-md-12">
                    <nav className="navbar navbar-default" role="navigation" id="mainNavigation">
                        <div className="navbar-header">
                            <h3>Where's My Money?</h3>
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                                <span className="sr-only">Toggle navigation</span><span className="icon-bar"></span><span className="icon-bar"></span><span className="icon-bar"></span>
                            </button>
                        </div>

                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav navbar-right">
                                <li>
                                    <a href="#">View All Expenses</a>
                                </li>
                                <li>
                                    <a href="#">Montly Expense Overview</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        );
    }
}

export default MainNavigation;