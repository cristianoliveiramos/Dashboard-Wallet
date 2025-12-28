import "./styles"
import { Button, ContentHeaderWrapp, Controllers, TitleWrapp } from "./styles";

export const ContentHeader = () => {
  return (
    <ContentHeaderWrapp>
      <TitleWrapp>
        <h2>Titulo</h2>
      </TitleWrapp>
      <Controllers>
        <Button>Botao A</Button>
        <Button>Botao B</Button>
      </Controllers>

    </ContentHeaderWrapp>
  );
}
