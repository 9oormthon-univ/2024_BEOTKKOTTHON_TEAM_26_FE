import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import exampleImage from "../images/img.png";
import exampleImage3 from "../images/img_2.png";
import exampleImage2 from "../images/img_1.png";
import {Image} from "react-bootstrap";
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import axios from "axios";
import { useParams } from 'react-router-dom';

const CustomSlider = styled(Slider)`


  .slick-slide {
 
    opacity: 0.5;
    transition: transform 0.9s ease, opacity 0.3s ease; // 부드러운 전환 효과
    transform: scale(0.8); // 기본적으로 모든 슬라이드를 축소합니다.

  }
  .slick-center {
    transform: scale(1.2);
    opacity: 1 !important;
  }
`;
const StyledImageWrapper = styled.div`

  padding-top: 50px; // 여유 공간을 주기 위한 패딩
  padding-bottom: 50px; // 여유 공간을 주기 위한 패딩
  box-sizing: border-box; // 패딩이 너비에 포함되도록 설정
  transition: transform 0.5s ease-in-out;
  &:hover {
    transform: scale(1.1); // 확대 효과
    border-radius: 20px;
  }

  // 이미지 간의 간격을 줄입니다.
  & + & {
    margin-left: 10px; // 인접한 이미지 간의 왼쪽 마진을 설정하여 간격을 조절
  }

  img {
    width: 100%; // 이미지 너비를 div에 맞춤
    height: auto; // 비율 유지
    display: block; // 이미지의 기본 마진 제거
  }
`;


function AutoPlay({postId}) {
    const [linkedImages, setLinkedImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentSlide, setCurrentSlide] = useState(0);
    useEffect(() => {
        const fetchData = async () => {
            try {
                // URL에서 postId 값을 사용하여 요청
                const response = await axios.get(`http://44.206.161.54:8080/funding/status/details/${postId}`);
                setLinkedImages(response.data.result.data.linkedImages);


                setIsLoading(false);
                //     img_url 원래는 data.linkedImages
            } catch (error) {
                console.error("데이터를 불러오는 데 실패했습니다.", error);


                setIsLoading(false);
            }
        };

        fetchData();
    }, [postId]); // postId가 변경될 때마다 fetchData 함수를 다시 실행

    if (isLoading) {
        return <div>Loading...</div>;
    }

    const settings = {
        dots: true,
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "50px",
        slidesToShow: 4.3,
        slidesToScroll: 1,
        autoplay: true,
        speed:2000,

      

        autoplaySpeed: 1000,

        cssEase: "linear",
        beforeChange: (current, next) => setCurrentSlide(next),
    };




    return (
        <div className="slider-container">
            <CustomSlider {...settings}>
                {linkedImages.map((imgUrl, index) => (
                    <div key={index}>
                        <StyledImageWrapper>
                            <Image src={imgUrl} alt={`Slide ${index + 1}`} fluid />
                        </StyledImageWrapper>
                    </div>
                ))}



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

            </CustomSlider>
        </div>
    );
}

export default AutoPlay;

