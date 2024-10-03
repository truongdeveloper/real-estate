import { useSession } from "next-auth/react";
import { useSetRecoilState } from "recoil";
import { loginModalState } from "../../Recoil/atoms/modal";
import { useEffect } from "react";

const SecureRouter = ({ children }: any) => {
  const { status } = useSession();
  const setShowLoginModal = useSetRecoilState(loginModalState);

  useEffect(() => {
    if (status === "loading" || status === "unauthenticated") {
      setShowLoginModal(true);
    }
  }, [status, setShowLoginModal]);

  if (status === "authenticated") {
    setShowLoginModal(false);
  }

  if (status === "loading" || status === "unauthenticated") {
    return <div>{children}</div>;
  }
  return <div>{children}</div>;
};

export default SecureRouter;
