import React from 'react'

const SpaceList = ({spaceListRecieved}) => {
    return(
        <div>
            {spaceListRecieved.map((space) => <p>{space.name}</p>)}
        </div>
    )
}

export default SpaceList
