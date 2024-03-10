import { COLORS } from "../../Constants";

const styles = {
  buttonCustom: {
    backgroundColor: COLORS.bgSecond,
    borderRadius: "6px",
    textTransform: "none",
    fontFamily: "inherit",
    minWidth: "fit-content",
    "&:hover": {
      backgroundColor: COLORS.bgHover,
    },
  },
  btn1: {
    "& .MuiSvgIcon-root": {
      fontSize: "16px",
    },
    padding: "5px 8px",
    fontSize: "10px",
  },

  btn2: {
    "& .MuiSvgIcon-root": {
      fontSize: "18px",
    },
    backgroundColor: COLORS.bgPrimary,
    gap: "5px",
    color: COLORS.white,
    fontWeight: 400,
    padding: "6px 12px",
    fontSize: "16px",
  },

  outline: {},
};
export default styles;
