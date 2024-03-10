import { COLORS } from "../../Constants";

const styles = {
  textCustom: {
    fontFamily: "inherit",
    lineHeight: "1.2rem",
    textAlign: "center",
  },
  h1: {
    fontWeight: 600,
    fontSize: "2rem",
    lineHeight: "2.8rem",
    marginRight: "1rem",
  },

  h2: {
    fontWeight: 600,
    fontSize: "1.5rem",
    lineHeight: "2.8rem",
    margin: "0.5rem",
    marginRight: "1rem",
  },

  h3: {
    fontWeight: 400,
    fontSize: "0.9rem",
  },

  textBold: {
    fontWeight: 600,
    fontSize: "1rem",
  },

  textSM: {
    fontWeight: 400,
    fontSize: "0.8rem",
    color: COLORS.textMuted,
  },

  colorLinear: {
    background: COLORS.textLinear,
    backgroundClip: "text",
    textFillColor: "transparent",
  },
};
export default styles;
