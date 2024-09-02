import React from 'react'
import "./app.scss"
import Home from './components/home/Home'
import Topbar from './components/topbar/Topbar'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'
import Skills from './components/skills/Skills'

// import background from "./images/img.jpg";

function App() {
  return (
    <div>
      <section id="Homepage"><Topbar /><Home /></section>
      <section id='Skills'><Skills /></section>
      <article id='Projects'><Projects /></article>
      <section id='Contact'><Contact /></section>
      <section id='About'>About Me</section>
    </div>
  )
}

export default App

