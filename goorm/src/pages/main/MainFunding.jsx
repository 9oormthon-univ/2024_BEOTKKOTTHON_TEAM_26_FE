import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import exampleImage from "../../images/ad1.png";
import exampleImage3 from "../../images/ad2.png";
import exampleImage2 from "../../images/ad3.png";
import { Carousel, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const StyledCarouselItem = styled(Carousel.Item)`
  max-width: 100%;
`;

const Background = styled.div`
  position: relative;
  margin: auto;
  width: 1280px;
  height: 100vh;
  font-size: 40px;
`;
const Header = styled.div`
  width: 1280px;
  height: 90px;
`;
const Logo = styled.div`
  position: absolute;
  width: 75px;
  height: 24.22px;
  left: 83px;
  top: 24px;
`;
const MainTitle = styled.div`
  position: absolute;
  width: 465px;
  height: 27px;
  left: 185px;
  top: 50px;

  font-family: "Arial";
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.1px;
  color: #000000;
`;
const MenuCon = styled.div`
  position: absolute;
  width: 410px;
  height: auto;
  right: 83px;
  top: 35px;
`;
const MenuBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  font-family: "Arial";
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.1px;
  color: #000000;
`;
const EventBtn = styled.div``;
const LoginBtn = styled.div``;
const FundingBtn = styled.div`
  width: 154px;
  height: 42px;
  background: #004716;
  border-radius: 8px;
  color: white;
  line-height: 42px;
  text-align: center;
`;
const Notice = styled.div``;
const AdvArea = styled.div`
  position: relative;
  width: 1280px;
  height: 114px;
`;
const FundingArea = styled.div`
  position: relative;
  width: 1280px;
  height: 100px;
`;
const FundingCon = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 488px;
  height: 88px;
  padding-top: 13px;
  margin-left: 141px;
`;
const FundingBox1 = styled.div`
  width: 54px;
  height: 85.3px;
`;
const FundingBox2 = styled.div`
  width: 54px;
  height: 85.3px;
`;
const FundingBox3 = styled.div`
  width: 54px;
  height: 85.3px;
`;
const FundingBox4 = styled.div`
  width: 54px;
  height: 85.3px;
`;
const FundingBox5 = styled.div`
  width: 54px;
  height: 85.3px;
`;
const FundingBox6 = styled.div`
  width: 54px;
  height: 85.3px;
`;
const FundingCir = styled.div`
  position: absolute;
  // right: 100px;
`;
const FundingTitle1 = styled.div`
  position: absolute;
  width: 91px;
  top: 80px;
  left: -18px;
  font-family: "Arial";
  font-weight: bold;
  font-size: 12px;
  line-height: 18px;
  text-align: center;
  color: #000000;
`;
const FundingTitle2 = styled.div`
  position: absolute;
  width: 91px;
  top: 80px;
  left: 68px;
  font-family: "Arial";
  font-weight: bold;
  font-size: 12px;
  line-height: 18px;
  text-align: center;
  color: #000000;
`;
const FundingTitle3 = styled.div`
  position: absolute;
  width: 91px;
  top: 80px;
  left: 156px;
  font-family: "Arial";
  font-weight: bold;
  font-size: 12px;
  line-height: 18px;
  text-align: center;
  color: #000000;
`;
const FundingTitle4 = styled.div`
  position: absolute;
  width: 91px;
  top: 80px;
  left: 241px;
  font-family: "Arial";
  font-weight: bold;
  font-size: 12px;
  line-height: 18px;
  text-align: center;
  color: #000000;
`;
const FundingTitle5 = styled.div`
  position: absolute;
  width: 91px;
  top: 80px;
  left: 329px;
  font-family: "Arial";
  font-weight: bold;
  font-size: 12px;
  line-height: 18px;
  text-align: center;
  color: #000000;
`;
const FundingTitle6 = styled.div`
  position: absolute;
  width: 91px;
  top: 80px;
  left: 418px;
  font-family: "Arial";
  font-weight: bold;
  font-size: 12px;
  line-height: 18px;
  text-align: center;
  color: #000000;
`;
const SearchArea = styled.div`
  position: absolute;
  width: 473px;
  height: 41px;
  background: red;
  left: 723px;
  top: 235px;
  background: #ffffff;
  border: 1px solid #00591b;
  border-radius: 24px;
`;
const SearchImg = styled.div`
  position: absolute;
  top: -17px;
  left: 430px;
`;
const CategoryArea = styled.div`
  position: relative;
  width: 1280px;
  height: 140px;
`;
const CateCon = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 1120px;
  height: 140px;
  margin: auto;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
`;
const CateTitle = styled.div`
  position: absolute;
  width: 291px;
  height: 30px;
  left: 30px;
  top: 8px;
  font-family: "Arial";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: -0.1px;
  color: #000000;
`;
const CatePic1 = styled.div``;
const CatePic2 = styled.div``;
const CatePic3 = styled.div``;
const CatePic4 = styled.div``;
const CatePic5 = styled.div``;
const CatePic6 = styled.div``;
const CatePic7 = styled.div``;
const CatePic8 = styled.div``;
const FoodType1 = styled.div`
  position: absolute;
  width: 24px;
  height: 15px;
  left: 165px;
  top: 110px;

  font-family: "Arial";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: #000000;
`;
const FoodType2 = styled.div`
  position: absolute;
  width: 100px;
  height: 15px;
  left: 260px;
  top: 110px;
  text-align: center;
  font-family: "Arial";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: #000000;
`;
const FoodType3 = styled.div`
  position: absolute;
  width: 24px;
  height: 15px;
  left: 430px;
  top: 110px;

  font-family: "Arial";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: #000000;
`;
const FoodType4 = styled.div`
  position: absolute;
  width: 24px;
  height: 15px;
  left: 560px;
  top: 110px;

  font-family: "Arial";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: #000000;
`;
const FoodType5 = styled.div`
  position: absolute;
  width: 24px;
  height: 15px;
  left: 692px;
  top: 110px;

  font-family: "Arial";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: #000000;
`;
const FoodType6 = styled.div`
  position: absolute;
  width: 24px;
  height: 15px;
  left: 822px;
  top: 110px;

  font-family: "Arial";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: #000000;
`;
const FoodType7 = styled.div`
  position: absolute;
  width: 24px;
  height: 15px;
  left: 955px;
  top: 110px;

  font-family: "Arial";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: #000000;
`;
const FoodType8 = styled.div`
  position: absolute;
  width: 50px;
  height: 15px;
  left: 1074px;
  top: 110px;
  text-align: center;
  font-family: "Arial";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: #000000;
`;
const NowFundingArea = styled.div`
  position: relative;
  width: 1120px;
  height: auto;
  margin: auto;
`;
const NowTitle = styled.div`
  position: relative;
  width: 206px;
  height: 23px;
  padding-left: 25px;
  margin-top: 25px;
  font-family: "Arial";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: -0.1px;
  color: #000000;
`;
const NowCon = styled.div`
  position: relative;
  width: 1120px;
  height: auto;
  margin: auto;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`;
const NowBox = styled.div`
  position: relative;
  width: 332px;
  height: 340px;
  margin-top: 20px;
`;
const NowImg = styled.div`
  position: relative;
  width: 332px;
  height: 228px;
  margin: auto;
  border-radius: 8px;
`;
const NowTitleDetail = styled.div`
  position: relative;
  width: 332px;
  height: 23px;
  margin: auto;
  margin-top: 10px;
  text-align: center;
  font-family: "Arial";
  font-style: normal;
  font-weight: 900;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: -0.1px;
  color: #00591b;
`;
const NowDesc = styled.div`
  position: relative;
  width: 200px;
  height: 18px;

  margin: auto;
  margin-top: 15px;

  display: flex;
  flex-wrap: noxrap;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;
const Tag1 = styled.div`
  width: auto;
  height: 27px;
  background: #004716;
  border-radius: 20px;
  font-family: "Arial";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 27px;
  text-align: center;
  letter-spacing: -0.1px;
  color: #fff;
  padding: 0 12px;
`;
const Tag2 = styled.div`
  width: auto;
  height: 27px;
  background: #004716;
  border-radius: 20px;
  font-family: "Arial";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 27px;
  text-align: center;
  letter-spacing: -0.1px;
  color: #fff;
  padding: 0 12px;
`;

const MainFunding = () => {
  const [fundingData, setFundingData] = useState([]);
  const navigate = useNavigate();
  const goDetail = () => {
    navigate("/categories/4");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://44.206.161.54:8080/funding/all"
        );
        setFundingData(response.data.result.data.posts.slice(0, 3));
      } catch (error) {
        console.error("에러발생: ", error);
      }
    };

    fetchData();
  }, []);

  function CarouselsInDetail() {
    return (
      <Carousel>
        <StyledCarouselItem>
          <Image
            style={{ width: "1280px" }}
            src={exampleImage}
            alt="First slide"
            fluid
          />
          {/*fluid가 반응형*/}
        </StyledCarouselItem>

        <StyledCarouselItem>
          <Image
            style={{ width: "1280px" }}
            src={exampleImage2}
            alt="First slide"
            fluid
          />
          {/*fluid가 반응형*/}
        </StyledCarouselItem>

        <StyledCarouselItem>
          <Image
            style={{ width: "1280px" }}
            src={exampleImage3}
            alt="First slide"
            fluid
          />
        </StyledCarouselItem>
      </Carousel>
    );
  }

  return (
    <Background>
      <Header>
        <Logo>
          <img
            src={`${process.env.PUBLIC_URL}/images/logo.png`}
            width="75px"
            height="24.22px"
          />
        </Logo>
        <MainTitle>
          모두가 잘먹고 잘살 수 밖에 없는 로컬 식당(F&B) 성장지원 플랫폼
        </MainTitle>
        <MenuCon>
          <MenuBox>
            <EventBtn>이벤트</EventBtn>
            <LoginBtn>로그인/회원가입</LoginBtn>
            <FundingBtn>펀딩 스펙 만들기</FundingBtn>
            <Notice>
              <img
                src={`${process.env.PUBLIC_URL}/images/bell.png`}
                width="18px"
                height="19.6px"
              />
            </Notice>
          </MenuBox>
        </MenuCon>
      </Header>

      <AdvArea>
        <CarouselsInDetail />
      </AdvArea>

      <FundingArea>
        <FundingCon>
          <FundingBox1>
            <FundingCir>
              <img
                src={`${process.env.PUBLIC_URL}/images/do.png`}
                width="54px"
              />
            </FundingCir>
          </FundingBox1>
          <FundingTitle1>펀딩하기</FundingTitle1>
          <FundingBox2>
            <FundingCir>
              <img
                src={`${process.env.PUBLIC_URL}/images/live.png`}
                width="54px"
              />
            </FundingCir>
          </FundingBox2>
          <FundingTitle2>실시간 펀딩 현황</FundingTitle2>
          <FundingBox3>
            <FundingCir>
              <img
                src={`${process.env.PUBLIC_URL}/images/complete.png`}
                width="54px"
              />
            </FundingCir>
          </FundingBox3>
          <FundingTitle3>완료 펀딩</FundingTitle3>
          <FundingBox4>
            <FundingCir>
              <img
                src={`${process.env.PUBLIC_URL}/images/review.png`}
                width="54px"
              />
            </FundingCir>
          </FundingBox4>
          <FundingTitle4>구매 후기</FundingTitle4>
          <FundingBox5>
            <FundingCir>
              <img
                src={`${process.env.PUBLIC_URL}/images/month.png`}
                width="54px"
              />
            </FundingCir>
          </FundingBox5>
          <FundingTitle5>이달의 기업</FundingTitle5>
          <FundingBox6>
            <FundingCir>
              <img
                src={`${process.env.PUBLIC_URL}/images/New.png`}
                width="54px"
              />
            </FundingCir>
          </FundingBox6>
          <FundingTitle6>신메뉴 체험단</FundingTitle6>
        </FundingCon>
      </FundingArea>

      <SearchArea>
        <input
          type="text"
          placeholder="ex. #저칼로리 #샐러드 #비건 #다이어트 #식단관리"
          style={{
            width: "400px",
            height: "35px",
            border: "none",
            fontSize: "14px",
            color: "#969696",
            lineHeight: "14px",
            left: "23px",
            top: "2px",
            position: "absolute",
            outline: "none",
          }}
        />
        <SearchImg>
          <img
            src={`${process.env.PUBLIC_URL}/images/SearchIcon.png`}
            width="24px"
          />
        </SearchImg>
      </SearchArea>

      <CategoryArea>
        <CateCon>
          <CateTitle>음식 카테고리</CateTitle>
          <CatePic1>
            <img
              src={`${process.env.PUBLIC_URL}/images/rice.png`}
              width="61px"
            />
          </CatePic1>
          <CatePic2>
            <img
              src={`${process.env.PUBLIC_URL}/images/dosirack.png`}
              width="61px"
            />
          </CatePic2>
          <CatePic3>
            <img
              src={`${process.env.PUBLIC_URL}/images/noodle.png`}
              width="61px"
            />
          </CatePic3>
          <CatePic4>
            <img
              src={`${process.env.PUBLIC_URL}/images/dduck.png`}
              width="61px"
            />
          </CatePic4>
          <CatePic5>
            <img
              src={`${process.env.PUBLIC_URL}/images/hamburger.png`}
              width="61px"
            />
          </CatePic5>
          <CatePic6>
            <img
              src={`${process.env.PUBLIC_URL}/images/japan.png`}
              width="61px"
            />
          </CatePic6>
          <CatePic7>
            <img
              src={`${process.env.PUBLIC_URL}/images/wellbing.png`}
              width="61px"
            />
          </CatePic7>
          <CatePic8>
            <img
              src={`${process.env.PUBLIC_URL}/images/dessert.png`}
              width="61px"
            />
          </CatePic8>
        </CateCon>
        <FoodType1>한식</FoodType1>
        <FoodType2>다이어트 도시락</FoodType2>
        <FoodType3>중식</FoodType3>
        <FoodType4>분식</FoodType4>
        <FoodType5>양식</FoodType5>
        <FoodType6>일식</FoodType6>
        <FoodType7>웰빙</FoodType7>
        <FoodType8>디저트</FoodType8>
      </CategoryArea>

      <NowFundingArea>
        <NowTitle>지금 뜨고 있는 펀딩</NowTitle>
        <NowCon>
          {fundingData.map((funding) => (
            <NowBox key={funding.id} onClick={goDetail}>
              <NowImg>
                <img
                  src={funding.img_url ?? exampleImage}

                  alt={funding.title}
                  width="332px"
                  height="228px"
                />
              </NowImg>
              <NowTitleDetail>{funding.title}</NowTitleDetail>
              <NowDesc>
                <Tag1>매콤한</Tag1>
                <Tag2>비 오는</Tag2>
              </NowDesc>
            </NowBox>
          ))}
        </NowCon>
      </NowFundingArea>
    </Background>
  );
};

export default MainFunding;
