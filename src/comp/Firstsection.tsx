
import React from 'react'
import Globe from 'react-globe.gl';
import { Button } from "@material-tailwind/react";




const Firstsection = () => {

  const N = 20;
  const arcsData = [...Array(N)].map(() => ({
    startLat: (Math.random() - 0.5) * 180,
    startLng: (Math.random() - 0.5) * 360,
    endLat: (Math.random() - 0.5) * 180,
    endLng: (Math.random() - 0.5) * 360,
    color: [['red', 'white', 'blue', 'green'][Math.round(Math.random() * 3)], ['red', 'white', 'blue', 'green'][Math.round(Math.random() * 3)]]
  }));

  return (
    <section className='grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-2 gap-4 text-white'>

      <div className="sign-hero-txt pt-40" style={{height:"500px"}}>
        <h1 style={{fontSize:'60px'}}>Let's build from here, together.</h1>
        <h3 className='mt-6 text-zinc-400'>The complete developer platform to build, scale, and deliver secure software.</h3>
        <div className="sign-github-inptu flex justify-start items-center mt-10">
          <input type="email" className="form-control mr-5 block" id="exampleInputPassword1" style={{width:'60%'}}/>
          <Button className='rounded-md px-3 py-2' variant="filled" color="blue" style={{backgroundColor:'green'}}  >Sign Up for github</Button>
        </div>
      </div>




      <div className="relative h-96" style={{zIndex:'1'}}>
          <div className="gloeb-contaienr absolute">
            <Globe arcsData={arcsData}
            arcColor={'color'}
            arcDashLength={() => Math.random()}
            arcDashGap={() => Math.random()}
            arcDashAnimateTime={() => Math.random() * 4000 + 500} width={800} height={800} atmosphereColor="dodgerblue" backgroundColor='rgb(255,255,255,0.0)'  globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg" />
          </div>
        </div> 


        {/* <div className="flex flex-col justify-center items-center p-4 h-96">
          <div className="hero-text-section mt-10" style={{maxWidth:'fit-content'}}>
            <h1 className='font-bold' style={{fontSize:'80px'}}>
            Let's build from here, together.
            </h1>
            <h5 className='mt-4'>The complete developer platform to build, scale, and deliver secure software.</h5>
            <div className="sign-github-inptu flex justify-start items-center">

            <input type="email" className="form-control mr-5 block" id="exampleInputPassword1" style={{width:'60%'}}/>
            <Button className='rounded-md px-3 py-2' variant="filled" color="blue" style={{backgroundColor:'green'}}  >Sign Up for github</Button>
            </div>
          </div>
        </div>
        <div className="text-center self-center relative h-96">
          <div className="gloeb-contaienr absolute">
            <Globe arcsData={arcsData}
            arcColor={'color'}
            arcDashLength={() => Math.random()}
            arcDashGap={() => Math.random()}
            arcDashAnimateTime={() => Math.random() * 4000 + 500} width={600} height={600} atmosphereColor="dodgerblue" backgroundColor='rgb(255,255,255,0.0)'  globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg" />
          </div>
        </div> */}
    </section>
  )
}

export default Firstsection