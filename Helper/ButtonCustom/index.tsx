import { IButtonCustom } from "./types";
import clsx from "clsx";
import styles from "./styles";

const ButtonCustom = (props: IButtonCustom) => {
  const {
    className,
    style,
    children,
    iconStart,
    outline,
    btn1,
    btn2,
    disabled = false,
    iconEnd,
    onClick,
    sx,
    ...otherProps
  } = props;

  return <div></div>;
};

export default ButtonCustom;
