import { useMediaQuery } from "react-responsive";

export const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 639 });
  return isMobile ? children : null;
};

export const PC = ({ children }) => {
  const isPC = useMediaQuery({ minWidth: 639 });
  return isPC ? children : null;
};
