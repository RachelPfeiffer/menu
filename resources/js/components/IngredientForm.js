import React from 'react';
import ReactDOM from 'react-dom';

class IngredientForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            ingredients: []
        };

        // This binding is necessary to make `this` work in the callback
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.renderIngredients = this.renderIngredients.bind(this);
    }

    // handle change
    handleChange(e) {
        this.setState({
            name: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        axios.post('/ingredients', {
            name: this.state.name
        })
        .then(response => {
            this.setState({
                ingredients: [response.data, ...this.state.ingredients]
            })
            this.setState({
                name: ''
            })
        })
    }

    handleDelete(id) {
        const isNotId = ingredient => ingredient.id !== id;
        const updatedIngredients = this.state.ingredients.filter(isNotId);
        this.setState({ ingredients: updatedIngredients });
        axios.delete(`/ingredients/${id}`);
    }

    renderIngredients() {
        return this.state.ingredients.map( ingredient => (
            <div key={ingredient.id} className="media">
                <div className="media-body">
                    <p>
                        {ingredient.name}{' '}
                        <button 
                            onClick={() => this.handleDelete(ingredient.id)} 
                            className="btn btn-sm btn-warning float-right">Delete</button>
                    </p>
                </div>
            </div>
        ))
    }

    getIngredients() {
        axios.get('/ingredients').then((
            response
        ) => 
            this.setState({
                ingredients: [...response.data.ingredients]
            }))
    }

    componentWillMount() {
        this.getIngredients();
    }

    render() {
        return (
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Add Ingredient</div>
    
                        <div className="card-body"> 
                            <form onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <textarea
                                        onChange={this.handleChange}
                                        value={this.state.name}
                                        className="form-control"
                                        rows="5"
                                        maxLength="255"
                                        placeholder="Create a new ingredient"
                                        required
                                        />
                                </div>
                                <button type="submit" className="btn btn-primary mt-2">
                                    Create Ingredient
                                </button>
                            </form>
                            {this.renderIngredients()}
                        </div>
                    </div>
                </div>
            </div>
        )} 
}

export default IngredientForm;