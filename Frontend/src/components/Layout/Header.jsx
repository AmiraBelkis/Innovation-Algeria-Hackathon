import { Container, Row, Col } from "react-bootstrap";
import logo from '../../assets/logo.svg';
import notificationIcon from '../../assets/notification.svg';
export const Header = () => {
    return (
        <>
            <header className="bg-wight border-bottom py-3">
                <Container >
                    <Row className="align-items-center">
                        {/* Logo Section */}
                        <Col xs={1} className="d-flex justify-content-center">
                            <img
                                src={logo}
                                alt="Logo"
                            />
                        </Col>
                        {/* Spacer */}
                        <Col></Col>
                        {/* Alert Icon Section */}
                        <Col xs={1} className="text-end">
                            <img
                                src={notificationIcon}
                                alt="Alert Icon"
                                className="img-fluid"
                                style={{ maxHeight: "30px", cursor: "pointer" }}
                            />
                        </Col>
                    </Row>
                </Container>
            </header>
        </>
    )
}
