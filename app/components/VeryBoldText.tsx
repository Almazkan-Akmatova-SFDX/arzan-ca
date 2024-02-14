import React, { ReactNode } from "react";
import { Text, TextProps } from "@chakra-ui/react";
import { Oswald } from "next/font/google";
type VeryBoldTextProps = TextProps & { children: ReactNode };
const oswald = Oswald({
  weight: "700",
  subsets: ["latin"],
});
const VeryBoldText: React.FC<VeryBoldTextProps> = ({
  children,
  ...otherProps
}) => {
  return (
    <Text fontWeight="700" className={oswald.className} {...otherProps}>
      {children}
    </Text>
  );
};

export default VeryBoldText;
