import { Container } from "react-bootstrap";

export const ItemListContainer = (props) => {
    return(<Container className="mt-4">
        <h1 className="saludo">{props.greeting}</h1>
    </Container>
    );
    
};