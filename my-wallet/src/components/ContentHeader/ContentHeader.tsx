import React from "react";
import SelectInput from "../SelectInput";
import "./styles"
import { ContentHeaderWrapp, Controllers, TitleWrapp } from "./styles";
import { IContentHeader } from "../interfaces/IContentHeader";

export const ContentHeader: React.FC<IContentHeader> = ({title, lineColor, children}) => {



  return (
    <ContentHeaderWrapp>
      <TitleWrapp lineColor={lineColor}>
        <h2>{title}</h2>
      </TitleWrapp>
      <Controllers>
        {children}
      </Controllers>

    </ContentHeaderWrapp>
  );
}
