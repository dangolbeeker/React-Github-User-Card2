import React from 'react';


const usercard = (props) => {
    return (
        <div>
            <p>Followers: {props.user.followers}</p>
        </div>
    )
}

export default usercard;