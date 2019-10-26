import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { filterToDo } from '../../actions/todoActions';
import { filterOptions } from '../../utilities/constants'
import Select from 'react-select'
import './Filters.css'

class Filters extends Component {
    handleChange = (selectedOption) => {
        //this.setState({selectedValue: selectedOption.value});
        this.props.filterToDo(selectedOption.value)
    }
    render() {
        const selectedValue = this.props.todo.selectedFilterValue;
        return (
            <div className={this.props.className}>
                <Select
                    className="filter-select"
                    value={filterOptions.filter(({value}) => value === selectedValue)}
                    onChange={this.handleChange}
                    options={filterOptions}
                />

            </div>
        )
    }
}

Filters.propTypes = {
    filterToDo: PropTypes.func.isRequired,
    todo: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    todo: state.todo
})

export default connect(mapStateToProps, { filterToDo })(Filters)
