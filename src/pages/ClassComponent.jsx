import React from "react";
import BaseHoc from "../hoc/BaseHoc";

class ClassComponent extends React.Component {
    render() {
        return (
            <>
                <p>This is a Class Component</p>
            </>
        );
    }
}

export default BaseHoc(ClassComponent);