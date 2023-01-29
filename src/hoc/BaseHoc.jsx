import React from "react";

const BaseHoc =
    (Component) =>
        ({ ...props }) => {
            return (
                <div>
                    <h1>This is Navbar</h1>
                    <Component {...props} />
                    <h1>This is a Footer</h1>
                </div>
            );
        };

export default BaseHoc;