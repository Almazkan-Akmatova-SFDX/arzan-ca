import { Text, TextProps } from "@chakra-ui/react";
import { ReactNode } from "react";
import { Great_Vibes } from "next/font/google";

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
});
type CurlyTextProps = TextProps & { children: ReactNode };

const CurlyText: React.FC<CurlyTextProps> = ({ children, ...otherProps }) => {
  return (
    <Text className={greatVibes.className} color="#F45734" {...otherProps}>
      {children}
    </Text>
  );
};
export default CurlyText;
