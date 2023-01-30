import React from "react";
import BaseHoc from "../hoc/BaseHoc";

class ClassComponent extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            name: "Ashutosh",
            age: 19,
        };

        console.log("Constructor: ");
    }

    componentDidMount() {
        console.log("Component Did Mount: ");
    }

    componentDidUpdate() {
        console.log("Component Did Update");
    }

    componentWillUnmount() {
        console.log("Component Did Unmount");
    }

    render() {
        console.log("Render: ");

        return (
            <>
                <p>This is a Class Component</p>
                <button
                    onClick={() =>
                        this.setState({
                            ...this.state,
                            age: 22,
                        })
                    }
                >
                    Add 1 to age
                </button>
                <h1>{this.state.age}</h1>
            </>
        );
    }
}

export default BaseHoc(ClassComponent);