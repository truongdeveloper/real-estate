import { CSSProperties, MouseEvent, ReactElement } from "react";

export interface ITextCustom {
  style?: CSSProperties;
  className?: string;
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  textBold?: boolean;
  textSM?: boolean;
  colorLinear?: boolean;
  color?: any;
  sx?: object;
  children: React.ReactNode;
}
