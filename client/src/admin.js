import React, { Component } from 'react';

class Admin extends Component {
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input placeholder="" />
                </form>
            </div>
        );
    }
}

export default Admin;