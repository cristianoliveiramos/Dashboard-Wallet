import "./styles"
import { useMemo } from "react"
import emojis from'../../utils/emojis'
import { Container, Welcome, UserName, Profile } from "./styles"
import Toogle from "../Toogle"

export const MainHeader = () => {
    const emoji = useMemo(() => {
        const index = Math.floor(Math.random() * emojis.length)
        return emojis[index]
    }, [])
    
    return (
        <Container>
            <Toogle/>
            
            <Profile>
                <Welcome>Olá, {emoji}</Welcome>
                <UserName>Cristiano Oliveira</UserName>
            </Profile>
        </Container>
    )
}