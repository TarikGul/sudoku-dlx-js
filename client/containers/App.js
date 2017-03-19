import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Board from '../components/Board';
import * as actions from '../actions';

class App extends Component {
    render() {
        const props = this.props;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-offset-4 col-md-4">
                        <Board { ...props } />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-offset-4 col-md-4">
                        <button
                            className="btn btn-sm btn-primary"
                            onClick={() => props.onShowSolution(props.solution)}
                        >
                            Show Solution
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

App.propTypes = {
    initialValues: PropTypes.arrayOf(PropTypes.string).isRequired,
    currentValues: PropTypes.arrayOf(PropTypes.string).isRequired,
    solution: PropTypes.arrayOf(PropTypes.string).isRequired,
    onShowSolution: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    ...state
});

const mapDispatchToProps = dispatch => ({
    onShowSolution: solution => dispatch(actions.showSolution(solution))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
