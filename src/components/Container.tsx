import React from 'react';
type ContainerProps={
    styles:React.CSSProperties
}

const Container = (props:ContainerProps) => {
    return (
        <div style={props.styles}>
            <h3>Text goes here</h3>
        </div>
    );
};

export default Container;