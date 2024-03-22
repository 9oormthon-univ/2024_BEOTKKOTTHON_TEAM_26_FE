import {Carousel , Image} from "react-bootstrap";
import exampleImage from '../images/img.png'; // 'src/images' 폴더 내에 위치
import exampleImage2 from '../images/img_1.png'; // 'src/images' 폴더 내에 위치
import exampleImage3 from '../images/img_2.png';

import styled from "styled-components"; // 'src/images' 폴더 내에 위치

const StyledCarouselItem = styled(Carousel.Item)`
  max-width: 75%; // 여기서 캐러셀 아이템의 최대 너비를 조절합니다.
  // 필요하다면 다른 스타일도 추가할 수 있습니다.
`;

function CarouselsInDetail() {
    return (

        <Carousel>
            <StyledCarouselItem>
                {/*<Image style={{margin: '30px'}} src={exampleImage} fluid/>*/}
                <Image style={{ marginLeft :'15%'}}  src={exampleImage} alt="First slide" fluid />
                {/*fluid가 반응형*/}
            </StyledCarouselItem>

            <StyledCarouselItem>
                {/*<Image style={{margin: '30px'}} src={exampleImage} fluid/>*/}
                <Image style={{ marginLeft :'15%'}}  src={exampleImage2} alt="First slide" fluid />
                {/*fluid가 반응형*/}
            </StyledCarouselItem>

            <StyledCarouselItem>
                {/*<Image style={{margin: '30px'}} src={exampleImage} fluid/>*/}
                <Image style={{ marginLeft :'15%'}}  src={exampleImage3} alt="First slide" fluid />
                {/*fluid가 반응형*/}
            </StyledCarouselItem>


            </Carousel>

    )
}

export default CarouselsInDetail