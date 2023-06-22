import React, { useState, useEffect } from 'react'

import FadeIn from 'react-fade-in';

import '../App.css'

function Explore() {

    const [display, setDisplay] = useState(true);
    const [beginGame, setBeginGame] = useState(true);
    const [showText, setTextHide] = useState(false);
    const [exploreButton, setExploreButton] = useState(false);
    const [treasure, setTreasure] = useState(false);
    const [globe, setGlobe] = useState(false);
    const [chest, setChest] = useState(true);
    const [uncover, setUncover] = useState(false)
    const [instruction, setInstruction] = useState(false); 

    const Arscene = () => {
        // window.location.reload();
        console.log("hey")
        // setDisplay(false)
        const screenmain = document.getElementById('screen-main')
        screenmain.style.display = "none"
        // const arscene = document.getElementById('arscene')
        // arscene.style.display = "block"
    }

    const info = () => {
        console.log("info");
        setInstruction(true)
    }
    const startToExplore = () => {
        setBeginGame(false);
        const exploring = document.getElementById('screen-2')
        exploring.style.display = "block"
    }

    useEffect(() => {
        setTimeout(() => {
            //unstrasure box
            setGlobe(true)
        }, 500);
        setTimeout(() => {
            setUncover(true);
        }, 400);
        setTimeout(() => {
            //rotating treasure
            setTreasure(true)
        }, 2000);
        setTimeout(() => {
            //test ready to explore
            setTextHide(true)
        }, 4500);
        setTimeout(() => {
            //button
            setExploreButton(true)
        }, 5000);

        return () => clearTimeout();

    }, [])




    return (

        <div id='screen-main' className='hideForDesktop'>
            <div className='container-fluid milkybar-bg '>
                <div className="d-flex">
                    <div className=" p-2"><img className='logoMilky' src="/images/milkybarLogo.png" alt='logo' /></div>
                    <div className="p-2"  data-bs-toggle="modal" data-bs-target="#exampleModalCenter">
                        <img className='infoExplore' id='info' src='/images/infoLogo.png' alt='info' />
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <img className="landingpages" src='/images/earthrotation.gif' />
                </div>
                <FadeIn>
                    <div>   {treasure && <img id='hideMeAfter5Seconds' className="chestanim" src='/images/chestanimation.gif' />}
                    </div>
                    <div className=''>
                        <div id='hideMeAfter5Seconds'>
                            {uncover && <><span className='font-face-gm  uncoverbox cssanimation sequence fadeInBottom'>Ready to <br />discover <br /><span className=' text-white'>the world!</span> </span>
                            </>}
                        </div>
                        {
                            showText && <><span className='font-face-gm headings cssanimation sequence fadeInBottom'>Uncover the <br />treasure <br />  <span className='text-white'>box!</span> </span>
                            </>}
                        <div className='d-flex justify-content-center'>
                            {exploreButton && <button id='start' type="button"  data-bs-toggle="modal" data-bs-target="#agreediv" className="btn-primary btn justify-content-center cssanimations explorebutton sequences fadeInBottoms font-face-gm text-white " onClick={() => Arscene()} >Start Exploring</button>}
                        </div>
                    </div>
                </FadeIn>
            </div>



            {/* <!-- Modal --> */}
            <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                   <div className="modal-contents popupInstruction justify-content-center">
                        <div className="modal-header justify-content-center">
                            <h5 className="modal-title instructionModalTitle font-face-gm" id="exampleModalLongTitle">Instructions</h5>
                        </div>
                        <div >
                                <ol className="modal-bodys">
                                            <li className='pad '>  Ready for an epic adventure? Rotate the globe and tap to choose the continent you want to visit</li>
                                            <li className='pad '>   Find a flat surface and tap to place the continent you selected.</li>
                                            <li className='pad '>   Within the continent, Tap the treasure chests to answer fun trivia questions. </li>
                                            <li className='pad '>  Make sure to tap all three chests, to unlock that continent. </li>
                                            <li className='pad'>     Go to the passport section, upload picture, download your personalised passport and share
    let's Go Exploring!</li>
                                            {/* <li className='pad'>    Upload passport, download, and share. Let's go exploring!</li> */}
                                </ol>
                        </div>
                        <div className="modal-footer justify-content-center">
                            <button type="button" className="btn instructionCloseButton font-face-gm" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )

}




export default Explore




// import React, { useState, useEffect } from 'react'
// import FadeIn from 'react-fade-in';
// import '../App.css'
// function Explore() {
//     const [display, setDisplay] = useState(true);
//     const [beginGame, setBeginGame] = useState(true);
//     const [showText, setTextHide] = useState(false);
//     const [exploreButton, setExploreButton] = useState(false);
//     const [treasure, setTreasure] = useState(false);
//     const [globe, setGlobe] = useState(false);
//     const [chest, setChest] = useState(true);
//     // const arscene = document.getElementById('arscene')
//     // arscene.style.display="block"
//     const Arscene = () => {
//         // window.location.reload();
//         setDisplay(false)
//         const arscene = document.getElementById('arscene')
//         arscene.style.display="block"
//     }

//     const startToExplore = () => {
//         setBeginGame(false);
//         const exploring = document.getElementById('screen-2')
//         exploring.style.display = "block"
//     }
//     useEffect(() => {
//         setTimeout(() => {
//             //unstrasure box
//             setGlobe(true)
//         }, 300);
//         setTimeout(() => {
//             //rotating treasure
//             setTreasure(true)
//         }, 2000);
//         setTimeout(() => {
//             //test ready to explore
//             setTextHide(true)
//         }, 4500);
//         setTimeout(() => {
//             //button
//             setExploreButton(true)
//         }, 5000);
//         return () => clearTimeout();
//     }, [])
//     return (
//         <div id='screen-main'>
//             {display && <div id='screen-2' className="row d-flex justify-content-center align-items-center" style={{zIndex:300000}}>
//                 <div className="col-12 col-md-8 col-lg-6 col-xl-5 hideForDesktop">
//                     <div className="card  text-white">
//                         <div className="card-body milkybar-bg  p-3 text-center">
//                             <div className="mb-md-5 mt-md-4 pb-4">
//                                 <div className="d-flex">
//                                     <div className=" p-2"><img className='logoMilky' src="/images/milkybarLogo.png" alt='logo' /></div>
//                                     <div className="p-2"><img className='infoExplore' id='info' src='/images/infoLogo.png' alt='info' /></div>
//                                 </div>
//                                 <div className='land-page'>
//                                     <img className="landing-page" src='/images/earthrotation.gif' />
//                                     {/* {  globe &&  <h2 id='hideMeAfter5Seconds' className='font-face-gm header-text' >Uncover the  <br/>treasure<br/> box </h2> } */}
//                                     {/* <div>                                  { treasure && <img  id='hideMeAfter5Seconds' className="chestanim" src='/images/chestanimation.gif'/>}
// </div> */}
//                                     <FadeIn>
//                                         <div>                                  {treasure && <img id='hideMeAfter5Seconds' className="chestanim" src='/images/chestanimation.gif' />}
//                                         </div>
//                                         <div>                             <h2 id='hideMeAfter5Seconds' className='font-face-gm header-text cssanimation sequence fadeInBottom'>Uncover the <br /> treasure <br /> </h2><h1 id='hideMeAfter5Seconds' className='cssanimation sequence fadeInBottom world font-face-gm'>box!</h1>
//                                         </div>
//                                     </FadeIn>

//                                     {/* {                                    globe &&  <h2 id='hideHeader'  className='font-face-gm header-text slide-up' >Uncover the <br/> treasure <br/> box</h2>

// } */}
//                                     {
//                                         showText && <><h2 className='font-face-gm header-text cssanimation sequence fadeInBottom'>Ready to <br /> discover <br /> </h2><h1 className='cssanimation sequence fadeInBottom world font-face-gm'>the world!</h1>
//                                             {exploreButton && <button id='enable-btn' className="btn cssanimations sequences fadeInBottoms btn-info md font-face-gm text-white btn-animated" onClick={() => Arscene()} >Start Exploring</button>}
//                                         </>}
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>}
//         </div>
//     )
// }

// export default Explore