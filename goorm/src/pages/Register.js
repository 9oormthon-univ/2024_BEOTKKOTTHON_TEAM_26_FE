import NavbarInCategoriesAndDetailPages from "../components/NavbarInCategoriesAndDetailPages";
import exampleImage111 from '../images/등록완료.png';
import styled from "styled-components";
import Slider from "react-slick";
import exampleImage from "../images/img.png";
import exampleImage3 from "../images/img_2.png";
import exampleImage2 from "../images/img_1.png";
import {Image} from "react-bootstrap";
import React from "react";

    const settings = {
        className: "center",
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 5,
        swipeToSlide: true,
        afterChange: function (index) {
            console.log(
                `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
            );
        }
    };

    const ImgDiv = styled.div`
      display: flex;
      justify-content: center; // 수평 가운데 정렬
      height: 50vh; // 뷰포트 높이만큼의 높이 설정
      align-items: center; // 수직 가운데 정렬
      img {
        width: 280px;
        height: 260px;
      }

    `;
// 슬라이더 컨테이너 스타일
const SliderContainer = styled.div`
  margin-left: 15%; // 왼쪽에 30% 공간 비우기
`;

const StyledImageWrapper = styled.div`
  padding-left: 10px; // 좌우 패딩 추가
  padding-right: 10px; // 좌우 패딩 추가
  padding-top: 50px; // 여유 공간을 주기 위한 패딩
  box-sizing: border-box; // 패딩이 너비에 포함되도록 설정
  transition: transform 0.5s ease-in-out;
  &:hover {
    transform: scale(1.1); // 확대 효과
    border-radius: 20px;
  }

  // 이미지 간의 간격을 줄입니다.
  //& + & {
  //  margin-left: -30px; // 인접한 이미지 간의 왼쪽 마진을 설정하여 간격을 조절
  //}

  img {
    width: 100%; // 이미지 너비를 div에 맞춤
    height: auto; // 비율 유지
    display: block; // 이미지의 기본 마진 제거
  }
`;

const RegiContent = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
  /* or 150% */
  letter-spacing: -0.1px;
  margin-left: 16%;
  transform: translateY(25px);
`;

    function Register() {
        return (
            <div>
                <NavbarInCategoriesAndDetailPages></NavbarInCategoriesAndDetailPages>



                    <ImgDiv> <img src={exampleImage111} alt='d'/></ImgDiv>


                    <div>

                        <div className="slider-container">

<RegiContent>내가 등록한 펀딩 현황</RegiContent>
                            <SliderContainer>
                            <Slider {...settings}>
                                <div>
                                    <StyledImageWrapper>
                                        <Image src={exampleImage} alt="First slide" fluid />
                                    </StyledImageWrapper>
                                </div>
                                <div>
                                    <StyledImageWrapper>
                                        <Image src={exampleImage2} alt="First slide" fluid />
                                    </StyledImageWrapper>
                                </div>
                                <div>
                                    <StyledImageWrapper>
                                        <Image src={exampleImage3} alt="First slide" fluid />
                                    </StyledImageWrapper>
                                </div>
                                <div>
                                    <StyledImageWrapper>
                                        <Image src={exampleImage} alt="First slide" fluid />
                                    </StyledImageWrapper>
                                </div>
                                <div>
                                    <StyledImageWrapper>
                                        <Image src={exampleImage2} alt="First slide" fluid />
                                    </StyledImageWrapper>
                                </div>
                                <div>
                                    <StyledImageWrapper>
                                        <Image src={exampleImage3} alt="First slide" fluid />
                                    </StyledImageWrapper>
                                </div>

                            </Slider>
                            </SliderContainer>
                        </div>
                    </div>




            </div>
        )

}
export default Register