import React from 'react'

function A1() {
    let arr=[1,2,3,4];
  return (
    <div>
        <ul>
        {
            arr.map((s,index) => {
            return <li key={index}>{s*2}</li>
            })
        }
        </ul>
    </div>
  )
}

export default A1