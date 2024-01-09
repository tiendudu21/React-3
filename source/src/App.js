import React from "react"
import useState from "react"
import Slide from "./components/Slide"
import Link from "./components/Link"

function App() {

  const [urlImage, setUrlImage] = React.useState("images/banner-1.jpg")

  const changeUrlImage1 = ()=>setUrlImage("images/banner-1.jpg")
  const changeUrlImage2 = ()=>setUrlImage("images/banner-2.jpg")
  const changeUrlImage3 = ()=>setUrlImage("images/banner-3.jpg")

  return (
    <div id="slide">
      <Slide urlImage={urlImage}/>  
      <Link 
        changeUrlImage1={changeUrlImage1}
        changeUrlImage2={changeUrlImage2}
        changeUrlImage3={changeUrlImage3}/>
    </div>

  )
}

export default App