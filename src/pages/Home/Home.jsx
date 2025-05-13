
import "./Home.css"
import Slider from "../../Slider/slider"
import Petcategory from "../../components/Petcategory/Petcategory"
import Petsfood from "../../components/Petsfood/Petsfood"
import Howitworks from "../../components/Howitworks/Howitworks"
import PetAdoptionSection from "../../components/PetAdoptionSection/PetAdoptionSection"
const Home = () => {
  return (
    <div>
      <Slider/>
  <Petcategory/>
 <Petsfood/>
 <Howitworks/>
 <PetAdoptionSection/>
         </div>
  )
}

export default Home
