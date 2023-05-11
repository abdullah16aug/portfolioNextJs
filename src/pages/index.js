import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import {useState,useEffect} from 'react'
export default function Home() {
  const[data,setData]=useState([])
  
  useEffect(()=>{
    
    const gitProject=async()=>{
      const response = await fetch('https://api.github.com/users/abdullah16aug/repos')
      const data = await response.json()
      setData(data)
      // return data
    }
    gitProject()
  },[])
  const colors = ["bg-teal-500", "bg-amber-500", "bg-yellow-500", "bg-lime-600", "bg-green-600", "bg-emerald-500", "bg-teal-500", "bg-purple-500", "bg-pink-500"];
  return (
    <div>
    <Navbar />
    <Hero />
    <div class={`text-center ${colors[Math.floor(Math.random() * colors.length)]} mb-1`}>
    Github Projects
    </div>
    <div className="container lg:h-screen sm:h-9 sm:mt-7 m-auto grid grid-cols-3 gap-2 text-center md:text-center">
      {data.slice(0, 9).map((project,i) => (
        <Projects name={project.name}colors={colors[Math.floor(Math.random() * colors.length)]}></Projects>
        ))}
        </div>
     <Contact />

   
    </div>
  )
}
