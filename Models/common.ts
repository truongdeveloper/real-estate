import { NextPage } from "next";
import { AppProps } from "next/app";
import { ReactElement } from "react";

export type PropsLayout = {
  children?: ReactElement;
};

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  Layout?: (props: PropsLayout) => ReactElement;
};

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};
