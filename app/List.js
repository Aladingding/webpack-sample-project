
import React,{ Component } from 'react';

class List extends Component{
    render(){
        return (
            <aside className="list">
                <h2 style={{color: 'pink'}}>{this.props.params.id}</h2>
            </aside>
        )
    }
}

export default List;