import { Container, Button, Header, Image } from "./components";
import picture from "./images/Picture.jpg";
import styles from "./index.css";

export function App() {
  return (
    <div>
      <Container>
        <Container isInner={true}>
          <Header></Header>
          <Image isGradient={true} src={picture} />
        </Container>
      </Container>
    </div>
  );
}
