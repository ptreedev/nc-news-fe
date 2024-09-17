import { useState } from 'react'
import { Routes, Route } from "react-router-dom"
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import Articles from './components/Articles'
import ArticleViewer from './components/ArticleViewer'


function App() {


  return (
  <>
      <section>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/articles' element={<Articles />} />
          <Route path='/articles/:article_id' element={<ArticleViewer />} />
        </Routes>
      </section>
  </>
    
  )
}

export default App
