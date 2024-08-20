export const conversionGender = (gender: number | string) => {
  switch (gender) {
    case 1:
      return "Nam";
    case 0:
      return "Nữ";
    default:
      return "Khác";
  }
};
