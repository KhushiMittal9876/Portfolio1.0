import React  from 'react'
import "./app.scss"
import Home from './components/home/Home'
import Topbar from './components/topbar/Topbar'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'
import Skills from './components/skills/Skills'
import About from './components/aboutMe/About'

function App() { 
  return (
    <div>
      <section id="Homepage"><Home /><Topbar /></section>
      <section id='About'><About /></section>
      <section id='Skills'><Skills /></section>
      <article id='Projects'><Projects /></article>
      <section id='Contact'><Contact /></section>
    </div>
  )
}

export default App

