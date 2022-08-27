import { Button } from '@chakra-ui/react'
import React from 'react'

const Download = () => {
  return (
    <>

<div style={{height:"300px",width:"90%",margin:"auto",marginTop:"150px",textAlign:"center"}} >
    

    <h1 style={{fontSize:"37px"}}>Time tracking apps</h1>
    <h2 style={{marginTop:"20px",fontSize:"25px"}}>Install Clockify and track time from anywhere — everything is synced online.</h2>
   <h3 style={{marginTop:"20px",fontSize:"25px",color:"blue"}}>Chrome  •  Firefox  •  Edge  •  Mac  •  Windows  •  Linux  •  Android  •  iOS</h3>


   <div style={{display:"flex",margin:"auto",marginLeft:"260px",marginTop:"12px",justifyContent:"spaceBetween",height:"50px",width:"700px"}}>
   <Button style={{height:"35px",width:"100px",backgroundColor:"#b9f5fe"}}>Idle detection</Button>
   <Button style={{height:"35px",width:"auto",marginLeft:"20px",backgroundColor:"#b9f5fe"}}>Auto start/stop</Button>
   <Button style={{height:"35px",width:"auto" ,marginLeft:"20px",backgroundColor:"#b9f5fe"}}>Offline mode</Button>
   <Button style={{height:"35px",width:"auto" ,marginLeft:"20px",backgroundColor:"#b9f5fe"}}>Default project</Button>
   <Button style={{height:"35px",width:"auto" ,marginLeft:"20px",backgroundColor:"#b9f5fe"}}>Reminders</Button>
   
   
   
   </div>
   <div style={{display:"flex",margin:"auto",marginLeft:"320px",marginTop:"12px",justifyContent:"spaceBetween",height:"50px",width:"700px"}}>
   <Button style={{height:"35px",width:"auto",backgroundColor:"#b9f5fe"}}>Pomodoro timer</Button>
   <Button style={{height:"35px",width:"100px",marginLeft:"20px",backgroundColor:"#b9f5fe"}}>Auto tracker</Button>
   <Button style={{height:"35px",width:"100px" ,marginLeft:"20px",backgroundColor:"#b9f5fe"}}>Expenses</Button>
   <Button style={{height:"35px",width:"100px" ,marginLeft:"20px",backgroundColor:"#b9f5fe"}}>Time off</Button>
   
   
   
   </div>
   </div>

   <div style={{display:"flex",height:"auto",width:"60%",margin:"auto",marginTop:"150px",textAlign:"center"}} >
    <div>
    <img src="https://clockify.me/assets/images/clockify-apps-extension.png" alt="image" />
    
    </div>

    <div>
    <h1 style={{fontSize:"34px",marginTop:"100px",marginLeft:"-40px"}}>Browser extension</h1>
    <h2 style={{marginTop:"20px",marginLeft:"-130px"}}>Track time via extension.</h2>
    <div style={{display:"flex",marginTop:"30px"}}>
    <img src="https://clockify.me/assets/images/chrome-store.svg" alt="" />
    <img src="https://clockify.me/assets/images/firefox-store.svg" alt="" style={{marginLeft:"30px"}}/>
    </div>
    <img src="https://clockify.me/assets/images/edge-store.svg" alt="" style={{marginTop:"30px"}} />
    
    </div>



   </div>

   <div style={{display:"flex",height:"auto",width:"60%",margin:"auto",marginTop:"150px",textAlign:"center"}} >
    <div>
    <img src="https://clockify.me/assets/images/clockify-apps-desktop.png" alt="image" />
    
    </div>

    <div>
    <h1 style={{fontSize:"34px",marginTop:"100px",marginLeft:"-100px"}}>Desktop app</h1>
    <h2 style={{marginTop:"20px",marginLeft:"-80px"}}>Track time on your computer.</h2>
    <div style={{display:"flex",marginTop:"30px"}}>
    <img src="https://clockify.me/assets/images/download-app-mac.svg" alt="" />
    <img src="https://clockify.me/assets/images/download-app-windows.svg" alt="" style={{marginLeft:"30px"}}/>
    </div>
    <img src="https://clockify.me/assets/images/download-app-linux.svg" alt="" style={{marginTop:"30px"}} />
    
    </div>



   </div>

   <div style={{display:"flex",height:"auto",width:"60%",margin:"auto",marginTop:"150px",textAlign:"center"}} >
    <div>
    <img src="https://clockify.me/assets/images/clockify-apps-mobile.png" alt="image" />
    
    </div>

    <div>
    <h1 style={{fontSize:"34px",marginTop:"100px",marginLeft:"-100px"}}>
    Mobile app</h1>
    <h2 style={{marginTop:"20px"}}>Track time and expenses on your phone.</h2>
    <div style={{display:"flex",marginTop:"30px"}}>
    <img src="https://clockify.me/assets/images/app-store-ios.svg" alt="" />
    <img src="https://clockify.me/assets/images/play-store-android.svg" alt="" style={{marginLeft:"30px"}}/>
    </div>
    
    </div>



   </div>

   <div style={{display:"flex",height:"auto",width:"60%",margin:"auto",marginTop:"150px",textAlign:"center"}} >
    <div>
    <img src="https://clockify.me/assets/images/clockify-apps-kiosk.png" alt="image" />
    
    </div>

    <div>
    <h1 style={{fontSize:"34px",marginTop:"100px",marginLeft:"-230px"}}>Kiosk</h1>
    <h2 style={{marginTop:"20px",marginLeft:"10px"}}>Set up a shared time clock kiosk on any device.</h2>
    <h2 style={{marginTop:"20px",marginLeft:"-100px"}}>
    TABLET  •  PHONE  •  COMPUTER</h2>
    <h2 style={{marginTop:"20px",marginLeft:"-220px",color:"blue"}}>Learn more
    </h2>

    
    
    </div>



   </div>

   <div style={{display:"flex",height:"auto",width:"60%",margin:"auto",marginTop:"150px",textAlign:"center"}} >
    <div>
    <img src="https://clockify.me/assets/images/pumble-apps.png" alt="image" />
    
    </div>

    <div>
    <h1 style={{fontSize:"34px",marginTop:"40px"}}>Chat app</h1>
    <h2 style={{marginTop:"20px"}}>Chat via Pumble app (desktop and mobile).</h2>
    <div style={{display:"flex",marginTop:"30px"}}>
    <img src="https://clockify.me/assets/images/app-store-ios.svg" alt="" />
    <img src="https://clockify.me/assets/images/play-store-android.svg" alt="" style={{marginLeft:"20px"}}/>
    </div>
    <div style={{display:"flex",marginTop:"30px"}}>
    <img src="https://clockify.me/assets/images/download-app-mac.svg" alt="" style={{marginTop:"30px"}} />
    <img src="https://clockify.me/assets/images/download-app-windows.svg" alt="" style={{marginLeft:"20px",marginTop:"30px"}} />
    </div>

    
    </div>



   </div>
  
    </>
  )
}

export default Download
