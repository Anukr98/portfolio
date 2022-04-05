import React from 'react';
import './App.css';
import Header from './components/Header/Header';
// import Loader from './components/Loader/Loader'

const App: React.FC = () => {

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  },[])

  const [scrolled, setScrolled] = React.useState<boolean>(false)

  const handleScroll = (_: any) => {
    if(window.scrollY > 10)
      setScrolled(true)
    else
      setScrolled(false)
  }

  return (
    <div>
      <Header scrolled = {scrolled} />
      {/* <Loader /> */}
      {/* <div style = {{ background: "yellow", height: "200vh" }}>
        body
      </div> */}
    </div>
  );
}

export default App