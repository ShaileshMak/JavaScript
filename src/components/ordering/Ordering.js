import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { orderToDo } from '../../actions/todoActions';
import { orderingOptions } from '../../utilities/constants'
import Select from 'react-select'

class Ordering extends Component {
    handleChange = (orderingOptions) => {
        this.props.orderToDo(orderingOptions.value)
    }
    render() {
        const orderValue = this.props.todo.selectedOrderValue;
        return (
            <div className={this.props.className}>
                <Select
                    className="filter-select"
                    value={orderingOptions.filter(({value}) => value === orderValue)}
                    onChange={this.handleChange}
                    options={orderingOptions}
                />

            </div>
        )
    }
}

Ordering.propTypes = {
    orderToDo: PropTypes.func.isRequired,
    todo: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    todo: state.todo
})

export default connect(mapStateToProps, { orderToDo })(Ordering)
