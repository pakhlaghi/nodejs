import React from 'react';

// get 'props' as arg
// destruct arg to const variable, idx, value, onClick
// onClick handler to call parent

const HomeChild = ({name}) => {
    return (
        <div>
            {name}
        </div>);
}

export default HomeChild;