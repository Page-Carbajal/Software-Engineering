import React from 'react';
import MainNavigation from './components/MainNavigation.js'

class App extends React.Component
{
    render()
    {
        return (
            <section className="reactApp">
                <MainNavigation />
                <h1>Where is my money?</h1>
            </section>
        );
    }
}

export default App;