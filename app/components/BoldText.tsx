import { Text, TextProps } from "@chakra-ui/react";
import { ReactNode } from "react";
import { Alkalami } from "next/font/google";
const alkalami = Alkalami({
  weight: "400",
  subsets: ["latin"],
});

interface BoldTextProps extends TextProps {
  children: ReactNode;
}

const BoldText: React.FC<BoldTextProps> = ({ children, ...otherProps }) => {
  return (
    <Text className={alkalami.className} {...otherProps}>
      {children}
    </Text>
  );
};
export default BoldText;
