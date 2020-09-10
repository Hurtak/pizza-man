import * as React from "react";
import { CSSProperties } from "styled-components";
import styled from "styled-components/macro";
import * as s from "../styles";

type TextType = "title" | "paragraph" | "text";

const sharedStyles = {
  fontFamily: `-apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`,
  margin: 0,
  lineHeight: 1.2,
  color: s.colors.black,
};

const StyledTitle = styled.h1({
  ...sharedStyles,
  fontSize: "32px",
});

const StyledParagraph = styled.p({
  ...sharedStyles,
  fontSize: "16px",
});

const StyledText = styled.span({
  ...sharedStyles,
  fontSize: "16px",
});

type StyledComponentsProps = {
  as?: string;
  style?: CSSProperties;
};

const textTypeToComponent = (type: TextType): React.FC<StyledComponentsProps> => {
  switch (type) {
    case "title":
      return StyledTitle;
    case "paragraph":
      return StyledParagraph;
    case "text":
      return StyledText;
  }
};

export const Text: React.FC<
  {
    type?: TextType;
  } & StyledComponentsProps
> = ({ type = "text", children, ...styleComponentProps }) => {
  const Component = textTypeToComponent(type);

  return <Component {...styleComponentProps}>{children}</Component>;
};
