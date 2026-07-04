import Components from "../components/Components"
import Delivered from "../components/Delivered"
import PagesBanner from "../components/PagesBanner"
import Team from "../components/Team"
import Testimonials from "../components/Testimonials"
import Trusted from "../components/Trusted"

const AboutPage = () => {
  return (
    <>
      <PagesBanner title="About Us" />
      <Trusted />
      <Components />
      <Delivered />
      <Team />
      <Testimonials />
    </>
  )
}

export default AboutPage