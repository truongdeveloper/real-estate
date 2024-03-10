import Image from "next/image";
import { useEffect, useState } from "react";
import imageAssets from "../../Constants/imageAssets";

const Loading = (props: ILoading) => {
  const { time = 1000, children } = props;

  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timeoutLoading = setTimeout(() => {
      setLoading(false);
    }, time);
    return () => {
      clearTimeout(timeoutLoading);
    };
  }, [time]);
  return loading ? (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        height: "100vh",
        alignItems: "center",
      }}
    >
      <Image width={100} height={100} src={imageAssets.loading} alt="Loading" />
    </div>
  ) : (
    <div>{children}</div>
  );
};

export default Loading;
