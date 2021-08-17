import React, {Component} from 'react'

import Create from './components/Create'
import List from './components/List'


class App extends Component{
    constructor(props) {
        super(props);
    }
    
    render(){
        return (
            <React.Fragment>
                <Create />
                <List /> 
            </React.Fragment>
        )
    }
}

export default App