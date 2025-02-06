import Carousel from "../../Components/Carousel"
import pottery01 from '../../Components/Images/pottery01.jpg'
import pottery02 from '../../Components/Images/pottery02.jpg'
import pottery03 from '../../Components/Images/pottery04.jpg'



function Home() {
  return (
    <div>
        <Carousel image1={pottery01} image2={pottery02} image3={pottery03}/>
        {/* static carrosel (3 pictures)*/}
        {/* carrosel automatic */}
        {/* carrosel with products */}
        {/* why Pottery.Li with products */}
        {/*latest blog */}

    </div>
  )
}

export default Home
