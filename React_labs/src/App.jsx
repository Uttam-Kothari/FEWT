import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react'

// import Hellof from './Lab-14/Hellof'
// import Helloc from './Lab-14/Helloc'

// import  Navbar from './Lab-15extra/components/Navbar'
// import Home from './Lab-15extra/components/Home'
// import Contact from './Lab-15extra/components/Contact'
// import Footer from './Lab-15extra/components/Footer'

// import A1C from './Lab-16/A1'
// import A2 from './Lab-16/A2'
// import A3 from './Lab-16/A3'

// import A1 from './Lab-17/A1'
// import A2 from './Lab-17/A2'
// import A3 from './Lab-17/A3'

// import A from './Lab-18/A'

// import Appcount from './Lab-19/APPCOUNT.jsx'

// import Layout from './Lab-20/Layout'
// import Home from './Lab-20/Home'
// import About from './Lab-20/About'
// import Details1 from './Lab-20/Details1'
// import Details2 from './Lab-20/Details2'
// import Contect from './Lab-20/Contect'
// import NotFound from './Lab-20/NotFound'

// import Usestate from './Lab-21/Usestate'
// import UseEffect from './Lab-21/UseEffect'

import Simple from './Lab-22/Simple'


function App() {
    
    // const [name,setName] = useState(" ");    
    return (
        <>
            {/* Lab-14,15 */}

            {/* <Helloc /> */}
            {/* <Hellof /> */}


            {/* Lab-Extera */}

            {/* <Home/> */}
            {/* <Contact/> */}


            {/* Lab-16 */}

            {/* A1  */}
            {/* <A1C/> */}

            {/* A2 */}
            {/* <A2 /> */}

            {/* A3 */}
            {/* <A3/> */}


            {/* leb 17 */}

            {/* A1 */}
            {/* <A1 /> */}

            {/* A2 */}
            {/* <A2 /> */}

            {/* A3 */}
            {/* <A3 /> */}

            {/* Lab-18 */}
            {/* <A name={name} setName={setName}/> */}

            {/* Lab-19 */}
            {/* <Appcount /> */}
            
            {/* Lab-20 */}

            {/* <BrowserRouter >
                <Routes>
                    <Route path='/' element={<Layout/>}> 
                        <Route index element={<Home/>}/>
                        <Route path='/Home' element={<Home/>}/>
                        <Route path='/About' element={<About/>}/>
                        <Route path='/Details1' element={<Details1/>}/>
                        <Route path='/Details2' element={<Details2/>}/>
                        <Route path='/Contect' element={<Contect/>}/>
                        <Route path='*' element={<NotFound/>}/>
                    </Route>
                </Routes>
            </BrowserRouter> */}

            {/* Lab-21 */}

            {/* <Usestate /> */}

            {/* <UseEffect/>  */}
            
            {/* Lab-22 */}
            <Simple/>
        </>
    )
}

export default App