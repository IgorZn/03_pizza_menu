import Pizza from "./components/Pizza";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {Container, Row} from "react-bootstrap";
import Menu from "./components/Menu";

function App() {
    return (
        <div>
            <Container>
                <Row className="justify-content-md-center">
                    <Header/>
                    <Menu/>
                    <Footer/>
                </Row>
            </Container>
        </div>
    );
}

export default App;
