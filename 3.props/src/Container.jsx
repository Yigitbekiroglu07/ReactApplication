import React from 'react'

function Container({ children }) {
    // console.log(children) // Children
    return (
        <div>
            <div>Container componenti çalıştı</div>
            {children}

        </div>

    )
}

export default Container