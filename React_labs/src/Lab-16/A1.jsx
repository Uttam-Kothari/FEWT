import React from 'react'

// function A1({ name , age }) {
//     return (
//         <>
//             <h1>name ={name}</h1>
//             <h1>age={age}</h1>
//         </>
//     )
// }
// function A1C(){
//     return(
//     <>
//         <A1 name="Uttam"  age={18}/>
//     </>
//     )
// }


function Parent() {
    return (
        <>
           <Child name ="Uttam" age={19}/>
        </>
    )
}
function Child(props){
    return(
    <>
         <h1>Name={props.name}</h1>  
         <h1>Age={props.age}</h1>
    </>
    )
}

export default Parent
