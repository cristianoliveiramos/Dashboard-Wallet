import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react"
import "./styles"
import { Container } from "./styles"

export const Content = (props: { children: any}) => (
    <Container>
        {props.children}
    </Container>
)