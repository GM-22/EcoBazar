
import Navbar from './Navbar'
import { Outlet } from 'react-router'
import Footer from './Footer'
import Subscribe from './Subscribe'

const Root = () => {
  return (
    <main>
        <Navbar />
        <Outlet />
        <Subscribe />
        <Footer />
    </main>
  )
}

export default Root