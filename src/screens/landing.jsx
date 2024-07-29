import Background from '../components/background/Background'
import Nav from '../components/nav/Nav'
import Hero from '../components/hero/Hero'
import { useEffect, useState } from 'react'

 function Landing() {
    let herodata = [
        {text1:"Dive into",text2:"What you love"},
        {text1:"Indulge",text2:"Your Passions"},
        {text1:"Give in to",text2:"Your Passions"},

    ]

    const [heroCount,setHeroCount] = useState(1);
    const [playStatus,setPlayStatus] = useState(false);

    useEffect(()=>{
      setInterval(() => {
        setHeroCount((count)=>{return count===2?0:count+=1})
      }, 3000);
    },[])
  return (
    <div>
        <Background playStatus = {playStatus} heroCount = {heroCount} />
        <Nav />
        <Hero setPlayStatus={setPlayStatus} herodata={herodata[heroCount]} heroCount={heroCount} setHeroCount={setHeroCount} playStatus={playStatus}/>
    </div>
  )
}

export default Landing;