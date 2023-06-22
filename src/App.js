import React, { useState, useCallback, useEffect, useRef } from 'react'
import './App.css';
import HTMLFlipBook from 'react-pageflip';
import Explore from './components/Explore';
import Page from './components/page'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Flatsurface from './components/Flatsurface';
// import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { Camera } from "react-camera-pro";
import html2pdf from 'html2pdf.js';
import TriviaQuestion from './components/TriviaQuestion';
import html2canvas from 'html2canvas';
//open passport function

function Passport() {
  const pdfRef = useRef();
  const onFlip = useCallback((e) => {
    console.log('Current page: ' + e.data);
  }, []);

  return (
    <HTMLFlipBook
      /* props */
      onFlip={onFlip}

    >
      /* ... pages */
    </HTMLFlipBook>
  )
}

function App(props) {
  const printRef = React.useRef();
  const camera = useRef(null);
  const [image, setImage] = useState(null);
  const [display, setDisplay] = useState(true);
  const [click,setClick] = useState(false)
  const [beginGame, setBeginGame] = useState(true);
  const [showText, setTextHide] = useState(false)
  const [popup, setPopup] = useState(false);
  const [preview,setPreview]=useState(true);
  const [edit,setEdit] = useState(true);

  
  const startToExplore = () => {
    let name = document.getElementById("typeEmailX");
    //username is stored in vaiable, this can be used for passport.
    let username = document.getElementById("typeEmailX").value
    console.log(username, "username");
    let form = document.getElementById("form");
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (name.value === '') {
        // alert("vlaid")
      } else {
        setBeginGame(false);
        const exploring = document.getElementById('screen-2')
        exploring.style.display = "block"
        setTimeout(() => {
          setTextHide(true)
        }, 3000);
      }
    })
  }

  const imageToUrl = () => {
    let imageStorage = document.getElementById('thumbnail')
    console.log(imageStorage);
    localStorage.setItem('arr',imageStorage)
    // const reader = new FileReader();
    // localStorage.setItem("recent-image",reader.result);

  }




  
  const save = () => {
    let username = document.getElementById("playerfirstname").value
    // alert(username)
    let usernameonpassport = document.getElementById("usernameonpassport").innerHTML = username;
   // Assuming you have an image element with the id "myImage"
var imageElement = document.getElementById('profileCameraImage');

// Create a canvas element
var canvas = document.createElement('canvas');
var context = canvas.getContext('2d');

// Set the canvas dimensions to match the image
canvas.width = imageElement.width;
canvas.height = imageElement.height;

// Draw the image onto the canvas
context.drawImage(imageElement, 0, 0);

// Convert the canvas to a data URL
var dataURL = canvas.toDataURL();

// Save the data URL in localStorage
localStorage.setItem('savedImage', dataURL);






// var savedDataURL = localStorage.getItem('savedImage');
// console.log(savedDataURL);
// // Create a new image element
// var savedImageElement = document.createElement('img');

// // Set the source of the image element to the saved data URL
// savedImageElement.src = savedDataURL;

// // Find the div element where you want to display the image
// var imageContainer = document.getElementById('imageContainer');

// // Append the image element to the div
// imageContainer.appendChild(savedImageElement);














  // //  imageToUrl() getting link
  // const imageInput = document.getElementById('img-input');
  //  console.log(imageInput);
  // imageInput.addEventListener('change', event => {
  //   // 👇️ Save the image to localStorage
  //   const image = event.target.files[0];
  //   const reader = new FileReader();
  
  //   reader.addEventListener('load', () => {
  //     localStorage.setItem('image', reader.result);
  //   });
  
  //   if (image) {
  //     reader.readAsDataURL(image);
  //   }
  //   const newImage = document.getElementById(
  //     'img-from-local-storage',
  //   );
  
  //   // newImage.src = localStorage.getItem('image');
  // });
  
  // var imagesObject = [];

  // function handleFileSelect(evt) {
  //     var files = evt.target.files; // FileList object
  
  //     // Loop through the FileList and render image files as thumbnails.
  //     for (var i = 0, f; f = files[i]; i++) {
  
  //       // Only process image files.
  //       if (!f.type.match('image.*')) {
  //         continue;
  //       }
  
  //       var reader = new FileReader();
  
  //       // Closure to capture the file information.
  //       reader.onload = function(e) {
  //           displayImgData(e.target.result)
  //           addImage(e.target.result);
  //       };
  
  //       reader.readAsDataURL(f);
  //     }
  // }
  
  // function loadFromLocalStorage(){
  //   var images = JSON.parse(localStorage.getItem("images"))
  
  //   if(images && images.length > 0){
  //     imagesObject = images;
      
  //     displayNumberOfImgs();
  //     images.forEach(displayImgData);
  //   }
  // }
  
  // function addImage(imgData){
  //   imagesObject.push(imgData);
  //   displayNumberOfImgs();
  //   localStorage.setItem("images", JSON.stringify(imagesObject));
  // }
  
  // function displayImgData(imgData){
  //   var span = document.createElement('span');
  //   span.innerHTML = '<img class="thumb" src="' + imgData + '"/>';
  //   document.getElementById('list').insertBefore(span, null);
  // }
  
  // function displayNumberOfImgs(){
  //   if(imagesObject.length > 0){
  
  //     document.getElementById("state").innerHTML = imagesObject.length + " image" + ((imagesObject.length > 1) ? "s" : "") + " stored in your browser";
      
  //     document.getElementById("deleteImgs").style.display = "inline";
      
  //   } else {
  //     document.getElementById("state").innerHTML = "No images stored in your browser.";
  //     document.getElementById("deleteImgs").style.display = "none";
  //   }
    
    
  // }


  const handleDownloadImage = async () => {
    // const element = printRef.current;
    // const canvas = await html2canvas(element);

    // const data = canvas.toDataURL('image/jpg');
    // const link = document.createElement('a');

    // if (typeof link.download === 'string') {
    //   link.href = data;
    //   link.download = 'image.jpg';

    //   document.body.appendChild(link);
    //   link.click();
    //   document.body.removeChild(link);
    // } else {
    //   window.open(data);
    // }
  };
  // const downloadPdf = () => {
  //   // const pdfRef = useRef();


  //   const capture=document.querySelector('.download');
  //   html2canvas(capture).then((canvas)=>{
  //    const srcpath = canvas.toDataURL('img/png');
  //    const doc = new jsPDF('p','mm','a4');
  //    const componentWidth = doc.internal.pageSize.getWidth();
  //    const componentHeight = doc.internal.pageSize.getHeight();
  //    doc.addImage(srcpath,'PNG',0,0,componentWidth,componentHeight);
  //    doc.save('passport.pdf')
  //   })
  //   console.log("DOWNLOAD");
  // }
    checkCookie(username);
    if (usernameonpassport == username) {
      setPopup(false);
    }
    hideEditOption();
  }
  const editableOption = () => {
    setPopup(!popup);
    // setEdit(false);
  }
  const closeOption = () => {
    setPopup(false);
  }
  const hideCamera = () => {
    setImage(camera.current.takePhoto())
    setPreview(false)
  }
  const enableCamera = () => {
   console.log("clicked");
   setPreview(true)
  }
  const hideEditOption = () => {
    // setEdit(true);
    console.log('saved');
  }
  // const pdfRef = useRef();
  // const downloadPdf = () => {
   

  // const downloadPdf = () => {
  //   // const pdfRef = useRef();
  //     setEdit(false)

  //   const capture=document.querySelector('.download');
  //   html2canvas(capture).then((canvas)=>{
  //    const srcpath = canvas.toDataURL('img/png');
  //    const doc = new jsPDF('p','mm','a4');
  //    const componentWidth = doc.internal.pageSize.getWidth();
  //    const componentHeight = doc.internal.pageSize.getHeight();
  //    doc.addImage(srcpath,'PNG',0,0,componentWidth,componentHeight);
  //    doc.save('passport.pdf')
  //   })
  //   console.log("DOWNLOAD");
  // }
  function setCookie(cname,cvalue,exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  
  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  // useEffect(()=>{

  // },[])


  function checkCookie(usernameonpassport) {
    let user = getCookie("username");
    if (user != "") {
      if(usernameonpassport !="John"){
        setCookie("username", usernameonpassport, 30);
      }else{
        document.getElementById('usernameonpassport').innerHTML=user;
      }
    } else {
   
       if (user != "" && user != null) {
         setCookie("username", user, 30);
       }else if(usernameonpassport!= "John"){
         setCookie("username", usernameonpassport, 30);
       }
    }
  }
  useEffect(()=>{
    checkCookie("John");
  },[])
  

  return (
    <>

      <Router>
        {/* <div id='mobile-view'>Please open in mobile....</div> */}
        {/* <Routes>
    <Route path='/explore' element={<Explore/>}/>
   </Routes> */}
   <Explore/>
  
   {/* <Flatsurface/>  */}



        {/* <div className="d-flex">
          <div className="p-3 flex-grow-2"><img src="/images/milkybarLogo.png" height="78px" width="160px" alt='logo' /></div>
          <div className="p-3 homeiconsd"><img src='/images/hometab.png'/></div>
          <div className="p-3 souv"><img src='/images/souveriantab.png'/></div>
       </div> */}
         <TriviaQuestion/>
        

        {/* passport working */}
        <div id='mobilebiewonly' style={{display: 'none'}} >
          <div className='container milkybar-bg'>
              <div className="d-flex">
          <div className="p-3 flex-grow-2"><img src="/images/milkybarLogo.png" height="78px" width="160px" alt='logo' /></div>
          <div id="homebutton1" className="p-3 homeiconsd"><img src='/images/hometab.png'/></div>
         
       </div>
          </div>
          <div>
            <div className='container download justify-content-center align-items-center downloaderpassport'id="invoice" ref={printRef}>
              <img className='landingfly' src='/images/backgroundpassport.png' />
              <div className='bluepassbook'>
                <img className='mypass' src='/images/mypassport.png' />
                <div>
                  <div className='passportsection'>
                    <div className=""><div className=''>
                      <div className=''>
                        <img className='pages' src='/images/pages.png' />
                        <div className='top d-flex justify-content-end'>
                          <div className='px-1 py-2'>
{                   edit &&        <img className='editing' onClick={editableOption} src='/images/Editing.png'/>
}                         
                          <img className='profilesection' id='savedprofile' src="/images/fallback.png" width="20px" height="40px" />
                            <img id='profileCameraImage' className='profilesection' src={image} width="20px" height="40px" />
                          </div>
                          <div className='px-2 py-2 text-dark font-face-gm'>
                            <font className="passportusername">Name</font> <br />
                            <font id="usernameonpassport" className="passportUser">John</font>
                            <p className='texttitle  font-face-gm'>IAM READY TO DISCOVER<br /> THE WORLD!</p>
                          </div>
                        </div>
                      </div>
                      <div className='bottompages'>
                        <img className='continentpages' src='/images/bottompage.png' />
                        <div className='bottom font-face-gm text-center px-2 py-1 yellow'><p className='yellow'> Containents Explored</p>
                          <div className='continents'>
                            <img  id="northimage" className='northamerica' src='./images/Continents/north america-01.png' />
                            <img id="southimage" className='southamerica' src='./images/Continents/south america-01.png' />
                            <img id="antimage" className='antratica' src='./images/Continents/antratica-01.png' />
                            <img id="ausimage" className='australia' src='./images/Continents/australia-01.png' />
                            <img id="afrimage" className='africa' src='./images/Continents/africa-01.png' />
                            <img id="asiaimage" className='asia' src='./images/Continents/asia-01.png' />
                            <img id="euroimage" className='europe' src='./images/Continents/europe-01.png' />
                          </div>
                        </div>
                      </div>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div></div>
          <div className="editBtn d-flex justify-content-end">
          <div > <img className='downloadpassport' src='/images/downloadedbutton.png'/></div>

          </div>        
          {popup ? <div className='w3-container w3-center w3-animate-top'>
            <div className='popupModal'>
              <div className='d-flex justify-content-end px-3 py-2'>
                <div className='close' onClick={closeOption}><img src='/images/closebtn.png' width="25px" /></div>
              </div>
              <div>
                <div className='camera'>
                {preview ? <div className='photo'>
                    <Camera className="smileplease" ref={camera} />
                    <div className='capturedPic' onClick={() => hideCamera()}><img src='/images/shutterbutton.png' /></div>
                  </div> :   <div className='photo'>
                    <div className=''>
                    <img className='previewProfileSection' id='clickedPic' src={image} width="170px" height="160px" />
                    <div className='capturedPreviewPic' onClick={() => enableCamera()}><img className='retake' src='/images/preview.png' /></div>
                    </div>
                  </div>}
                </div>
                <div className='playerName'>
                  <input id="playerfirstname" className='player font-face-gm  py-2' type='text' placeholder='Enter your first name ' required={true} />
                </div>
                <div className='saveBtn'>
                  <button onClick={save} className='font-face-gm savingBtn px-3 py-1'>Save</button>
                </div>
              </div>
            </div>
          </div> : ""}
        </div>
      </Router>
    </>
  );
}

export default App;
