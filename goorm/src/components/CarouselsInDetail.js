import {Carousel} from "react-bootstrap";
import exampleImage from '../images/img.png'; // 'src/images' 폴더 내에 위치
import exampleImage2 from '../images/img_1.png'; // 'src/images' 폴더 내에 위치
import exampleImage3 from '../images/img_2.png';
import Image from "react-bootstrap/Image"; // 'src/images' 폴더 내에 위치
function CarouselsInDetail() {
    return (
        <Carousel>
            <Carousel.Item>
                {/*<Image style={{margin: '30px'}} src={exampleImage} fluid/>*/}
                <Image style={{margin: '20px'}}  src={exampleImage} alt="First slide" fluid />
            {/*fluid가 반응형*/}
            </Carousel.Item>

            <Carousel.Item>
                <Image style={{margin: '20px'}}  src={exampleImage2} alt="First slide" fluid />

            </Carousel.Item>

            <Carousel.Item>
                <Image style={{margin: '20px'}}  src={exampleImage3} alt="First slide" fluid />

            </Carousel.Item>

        </Carousel>
    )
}

export default CarouselsInDetail