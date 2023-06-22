import React, { useState } from 'react'
import '../App.css'

function TriviaQuestion() {
  const [options, setOptions] = useState(false);
  const [option, setOption] = useState(false);
  const [optional, setOptional] = useState(false);
  const [close,setClosed]=useState(false)

  const hideOptions = () => {
    setOptions(true);
    setClosed(true)
  }
  const hideOption = () => {
    setOption(true)
   setClosed(true)
  }
  const hideOptional = () => {
    setOptional(true);
    setClosed(true)
  }
  const closingTag = ()=>{
    setClosed(true)
  }
  const trivia = ()=>{
    // TriviaDiv.style.display = "none"
   document.getElementById('TriviaDiv').style.display = "none"
   closingTag()
  }
  return (

    <>
 {/* <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
    </button>
    
    <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
        <div className="modal-content modal-contentnew triviaBg">
            <div className="modal-heade">
            <div className='clou'>
         <h2 className='triviaQuestionTrivia text-center font-face-gm'>Trivia <br /> Question</h2>
        <div className=' d-flex justify-content-center'>
        <img className='cloudimage' src='/images/cloud.png'  />
        </div>
       </div>
            <h5 className="modal-titles" id="exampleModalLabel"> </h5>
           <div className='d-flex justify-content-end px-4 py-3 Close ' data-bs-dismiss="modal" aria-label="Close">
           <img   className='closedbtn' src='/images/closed.png'/>
           </div>
            </div>
            <div  className='questions d-flex justify-content-center container px-5 py-4'>
         <p id="id1" className='triviaMainQues text-white font-face-gm'> What is the name of the mountain in Asia that has the highest elevation above sea level?  </p>
    </div>
            <div className="modal-body">
                <div className="accordion accordion-flush" id="accordionFlushExample">
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                          Correct Option 
                        </button>
                      </h2>
                      <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Perfect, Correct answer</div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                          Wrong Option
                        </button>
                      </h2>
                      <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Oops, Wrong answer</div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                          Wrong Option
                        </button>
                      </h2>
                      <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Oops, Wrong answer</div>
                      </div>
                    </div>
                  </div>
            </div>
            <div className='py-3 d-flex justify-content-center'>
        <p className='checkAnswer text-white font-face-gm text-center'>Check Answer</p>
      </div>
      <div className='treeImage justify-content-start'>
        <img src='/images/tree.png' />
      </div>
        </div>
        </div>
    </div> */}











{/* 
  <div id="TriviaDiv"  className='triviaBg  container-fluid hideForDesktop' >
       <div className='clouds'>
         <h2 className='triviaQuestions text-center font-face-gm'>Trivia <br /> Question</h2>
        <div className=' d-flex justify-content-center'>
        <img className='cloudimage' src='/images/cloud.png'  />
        </div>
       </div>
       <div  className='questions d-flex justify-content-center container px-5 py-4'>
         <p id="id1" className='text-white font-face-gm'> What is the name of the mountain in Asia that has the highest elevation above sea level?  </p>
    </div>

       <div className='onHoverAnswer align-items-center container py-5'>
        <button id="id2" type="button" onClick={hideOptions} className="option font-face-gm " data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">Kilimanjaro
          {options && <div className="collapse" id="collapseExample">
            <div className="card card-body">
              Perfect,Correct Answer!
            </div>

           </div>}

         </button>




         <button id="id3" type="button" onClick={hideOption} className="option font-face-gm " data-toggle="collapse" data-target="#collapseExample1" aria-expanded="false" aria-controls="collapseExample">Everest
          {option && <div className="collapse" id="collapseExample1">

            <div className="card card-body">

              oops,Wrong Answer!

             </div>

           </div>}




        </button>




        <button id="id4" type="button" onClick={hideOptional} className="option font-face-gm " data-toggle="collapse" data-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample">Fuji

          {optional && <div className="collapse" id="collapseExample2">

            <div className="card card-body">

              oops,Wrong Answer!

            </div>

          </div>}

        </button>

         

      </div>




       <div className=' d-flex justify-content-center'>

         <p className='checkAnswer text-white font-face-gm '>Check Answer</p>

      </div>

       <div className='treeImage justify-content-start'>

        <img src='/images/tree.png' />

     </div>

   </div>

 */}

















{/* <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#Trivia">
  Launch demo modal
</button>


<div className="modal fade" id="Trivia" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-contentTrivia">
    <div  type="button" className=" closepopupTrivia d-flex justify-content-end " data-bs-dismiss="modal" aria-label="Close">
                        <img src="./images/closed.png" />
                    </div>
<div   className='' >
    <div className='d-flex justify-content-end'>
    </div>
       <div className='clou'>
         <h2 className='triviaQuestionTrivia text-center font-face-gm'>Trivia <br /> Question</h2>
        <div className=' d-flex justify-content-center'>
        <img className='cloudimage' src='/images/cloud.png'  />
        </div>
       </div>
       <div  className='questi d-flex justify-content-center container px-5 py-4'>
         <p  className='triviaMainQ text-white font-face-gm'> What is the name of the mountain in Asia that has the highest elevation above sea level?  </p>
    </div>
      
       <div
          className='onHoverAnswer align-items-center container py-5'>
        <button id='btn'  type="button" onClick={hideOptions} className="option font-face-gm " data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">Kilimanjaro
          {options  && <div  className="collapse" id="collapseExample">
            <div  className="card card-body">
              Perfect,Correct Answer!
            </div>
           </div>}
         </button>
         <button type="button" onClick={hideOption} className="option font-face-gm " data-bs-toggle="collapse" data-bs-target="#collapseExample1" aria-expanded="false" aria-controls="collapseExample">Everest
          {option && <div className="collapse" id="collapseExample1">
            <div className="card card-body">
              oops,Wrong Answer!
             </div>
           </div>}
        </button>
        <button type="button" onClick={hideOptional} className="option font-face-gm " data-toggle="collapse" data-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample">Fuji
          {optional && <div className="collapse" id="collapseExample2">
            <div className="card card-body">
              oops,Wrong Answer!
            </div>
          </div>}
        </button>      
      </div>
   </div>
   <div className=' d-flex justify-content-center'>
         <p className='checkAnswer text-white font-face-gm '>Check Answer</p>
      </div>
       <div className='treeImage justify-content-start'>
        <img src='/images/tree.png' />
     </div>

    </div>
  </div>
</div> */}
   {/* <div id="TriviaDiv"  className='triviaBg container-fluid hideForDesktop' >
    <div className='d-flex justify-content-end'>
{  close &&    <img  onClick={trivia} className='closedbtn' src='/images/closed.png'/>
}    </div>
       <div className='clouds'>
         <h2 className='triviaQuestions text-center font-face-gm'>Trivia <br /> Question</h2>
        <div className=' d-flex justify-content-center'>
        <img className='cloudimage' src='/images/cloud.png'  />
        </div>
       </div>
       <div  className='questions d-flex justify-content-center container px-5 py-4'>
         <p id="id1" className='triviaMainQues text-white font-face-gm'> What is the name of the mountain in Asia that has the highest elevation above sea level?  </p>
    </div>
       <div className='onHoverAnswer align-items-center container py-3'>
        <button id="id2" type="button" onClick={hideOptions} className="option font-face-gm " data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">Kilimanjaro
          {options && <div className="collapse" id="collapseExample">
            <div className="card card-body">
              Perfect,Correct Answer!
            </div>
           </div>}
         </button>
         <button id="id3" type="button" onClick={hideOption} className="option font-face-gm " data-toggle="collapse" data-target="#collapseExample1" aria-expanded="false" aria-controls="collapseExample">Everest
          {option && <div className="collapse" id="collapseExample1">
            <div className="card card-body">
              oops,Wrong Answer!
             </div>
           </div>}
        </button>
        <button id="id4" type="button" onClick={hideOptional} className="option font-face-gm " data-toggle="collapse" data-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample">Fuji
          {optional && <div className="collapse" id="collapseExample2">
            <div className="card card-body">
              oops,Wrong Answer!
            </div>
          </div>}
        </button>
      </div>
       <div className=' d-flex justify-content-center'>
         <p className='checkAnswer text-white font-face-gm '>Check Answer</p>
      </div>
       <div className='treeImage justify-content-start'>
        <img src='/images/tree.png' />
     </div>
   </div> */}
    </>
  )
}
export default TriviaQuestion



// import React, { useState } from 'react'
// import '../App.css'

// function TriviaQuestion() {
//   const [options, setOptions] = useState(false);
//   const [option, setOption] = useState(false);
//   const [optional, setOptional] = useState(false);
//   const hideOptions = () => {
//     setOptions(true);
//   }
//   const hideOption = () => {
//     setOption(true)
//   }
//   const hideOptional = () => {
//     setOptional(true);
//   }
  
//   return (
//     <div id="TriviaDiv" className='triviaBg  container hideForDesktop' style={{display: 'none'}}>
//       <div className='clouds'>
//         <h2 className='triviaQuestions text-center font-face-gm'>Trivia <br /> Question</h2>
//         <img className='cloudimage' src='/images/cloud.png' height="60px" />
//       </div>
//       <div className='questions container px-5 py-2'>
//         <p id="id1" className='text-white font-face-gm'> What is the name of the mountain in Asia that has the highest elevation above sea level?  </p>
//       </div>
//       <div className='onHoverAnswer align-items-center container py-3'>
//         <button id="id2" type="button" onClick={hideOptions} className="option font-face-gm " data-toggle="collapse" data-target="#demo">Kilimanjaro
//           {options && <div id="tridemo" className="collapse in font-face-gm answerable ">
//             Oops Wrong Answer!
//           </div>}
//         </button>

//         <button id="id3" type="button" onClick={hideOption} className="option font-face-gm " data-toggle="collapse" data-target="#demo1">Everest
//           {option && <div id="tridemo1" className="collapse in font-face-gm answerable">
//             Perfect,Correct Answer!
//           </div>}

//         </button>

//         <button id="id4" type="button" onClick={hideOptional} className="option font-face-gm " data-toggle="collapse" data-target="#demo2">Fuji
//           {optional && <div id="tridemo2" className="collapse in font-face-gm answerable">
//             Oops Wrong Answer!
//           </div>}
//         </button>

//       </div>

      // <div className='py-3'>
      //   <p className='checkAnswer text-white font-face-gm text-center'>Check Answer</p>
      // </div>
      // <div className='treeImage justify-content-start'>
      //   <img src='/images/tree.png' />
      // </div>
//     </div>
//   )
// }

// export default TriviaQuestion