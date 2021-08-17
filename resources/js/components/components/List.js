import React, { Component } from 'react'

import {listTasks} from '../api/actions/TasksAction'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

class List extends Component{

    constructor(props) {
        super(props);
        this.state = {
            update: null
        }

        this.props.listTasks()
    }

    render(){
        return(
            <div className="container">
                <div className="table-responsive">
                    <table className="table table-striped table-hover">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Responsável</th>
                            <th scope="col">Descrição</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.list_tasks.size === 0 ? (
                                <tr className="placeholder-glow">
                                    <th scope="row"><span className="placeholder"></span></th>
                                    <td><span className="placeholder"></span></td>
                                    <td><span className="placeholder"></span></td>
                                </tr>
                            ) : (
                            this.props.list_tasks.map((item, key) => {
                                return(
                                    <tr key={key}>
                                        <th scope="row">{item.get('id')}</th>
                                        <td>{item.get('title')}</td>
                                        <td>{item.get('description')}</td>
                                    </tr>
                                )
                            }))}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    list_tasks: state.tasks.get('list_tasks')
})

const mapDispatchToProps = dispatch => 
    bindActionCreators(
        {
            listTasks
        },
        dispatch
    )

export default connect(mapStateToProps, mapDispatchToProps)(List)