import { ITextCustom } from "./types";
import clsx from "clsx";
import styles from "./styles";

const TextCustom = (props: ITextCustom) => {
  const {
    className,
    style,
    children,
    color,
    h1,
    h2,
    h3,
    textBold,
    textSM,
    colorLinear,
    sx,
    ...otherProps
  } = props;

  return <div></div>;
};

export default TextCustom;
