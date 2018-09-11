import React, { Component } from 'react';
import { connect } from 'react-redux';
import Data from './data';
import EditComponent from './EditComponent';


function searchUser(search) {
    return function (user) {
        return user.name.toLowerCase().includes(search.toLowerCase()) || !search;
    }
}

class Table extends Component {
    constructor() {
        super();
        this.state = {
            search: '',
        }
        this.searchHandler = this.searchHandler.bind(this);
    }

    searchHandler(e) {
        this.setState({ search: e.target.value })
    }

    render() {
        const { search } = this.state;
        return (
            <div>
                <h2 className="text-warning"> List of Employees </h2>

                <input type="text" onChange={this.searchHandler} value={search} placeholder='search...'/>

                {this.props.users.filter(searchUser(search)).map((user) => (
                    <div key={user.id}>
                        {user.editing ? <EditComponent user={user} key={user.id} /> : <Data user={user}
                            key={user.id} />}

                    </div>
                ))}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        users: state
    }
}
export default connect(mapStateToProps)(Table);