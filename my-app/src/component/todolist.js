import React from "react";

import './todolist.css';

class Todolist extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            Name: "",
            Address: "Đan Phượng"
        }
    }

    render() {
        return (
            <div> 
                <input className="input-name" onChange={(even) => this.setState({ Name: even.target.value })}></input>
                Chị Teim ơi chị yêu {this.state.Name} nhất
            </div>
        )
    }

}

export default Todolist