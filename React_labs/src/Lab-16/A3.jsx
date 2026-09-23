import React from 'react'

function A3() {
    const isrun = true;
    // if (isrun) {
    //     return ("Is Run")
    // }
    // else {
    //     return ("Is Not Run")
    // }

    // return(
    //     <>
    //         {isrun && <h1>Run</h1>}
    //         {!isrun && <h1>Not Run</h1>}
    //     </>
    // )

    return(
        <>
            {isrun ? <h1>Run</h1> : <h1>Not Run</h1>}
        </>
    )
}

export default A3