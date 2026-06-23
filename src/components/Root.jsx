
import Navbar from './Navbar'
import { Outlet } from 'react-router'
import Footer from './Footer'

const Root = () => {
  return (
    <main>
        <Navbar />
        <Outlet />
        <Footer />
    </main>
  )
}

export default Root