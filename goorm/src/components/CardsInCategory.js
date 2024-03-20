import {Button, Card} from "react-bootstrap";
import './CardsInCategory.css'
import exampleImage from '../images/img.png'; // 'src/images' 폴더 내에 위치
const handleImageError = (e) => {
    e.target.classList.add('card-img-error'); // 이미지 로딩 실패 시 클래스 추가
};
function CardsInCategory() {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={exampleImage} />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>

                <button className="button-in-cardsincategory" >3월 16일 펀딩 오픈!</button>
            </Card.Body>
        </Card>
    )
}

export default CardsInCategory