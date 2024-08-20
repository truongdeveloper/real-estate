import { atom } from "recoil";

const accountBalance: number = 0;

export const accountBalanceValue = atom({
  key: "accountBalance",
  default: accountBalance,
});
