import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Footer from './Footer';

import IngredientForm from './IngredientForm';

function App() {
    return (
        <div className="container">
            <Header />
            <IngredientForm />
            <Footer />
        </div>
    );
}

export default App;

if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}
