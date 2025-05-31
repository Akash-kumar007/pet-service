
import "./Home.css"
import Slider from "../../Slider/slider"
import Petcategory from "../../components/Petcategory/Petcategory"
import Howitworks from "../../components/Howitworks/Howitworks"
import PetGroomingCategories from "../../components/PetGroomingCategories/PetGroomingCategories"
import PetServiceHighlights from "../../components/PetServiceHighlights/PetServiceHighlights"
const Home = () => {
  return (
    <div>
      <Slider/>
  <Petcategory/>
 <Howitworks/>
 <PetGroomingCategories/>
 <PetServiceHighlights/>
         </div>
  )
}

export default Home
