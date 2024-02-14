import React from 'react';
import { Input, Textarea } from '@chakra-ui/react';

const FormInput = ({
  placeholder,
  type,
  ...otherProps
}: {
  placeholder: string;
  type: 'LONG' | 'SHORT';
  [x: string]: any; // This line allows any additional props
}) => {
  // Increased touch target size for mobile devices
  const mobileTouchTargetSize = '48px'; // This is generally a good size for touch targets

  if (type === 'LONG') {
    return (
      <Textarea
        fontSize={{ base: '16px', md: '14px' }} // Adjust font size for mobile
        borderRadius='3px'
        border='1px solid #e3e3e3'
        color='#333'
        bg='#fafafa'
        h='160px'
        placeholder={placeholder}
        p={{ base: '12px', md: '8px' }} // Adjust padding for mobile
        minHeight={mobileTouchTargetSize} // Ensure the touch target is large enough
        {...otherProps}
      />
    );
  }
  return (
    <Input
      size='lg'
      borderRadius='3px'
      border='1px solid #e3e3e3'
      color='#333'
      bg='#fafafa'
      fontSize={{ base: '16px', md: '14px' }} // Adjust font size for mobile
      placeholder={placeholder}
      p={{ base: '12px', md: '8px' }} // Adjust padding for mobile
      height={mobileTouchTargetSize} // Ensure the touch target is large enough
      {...otherProps}
    />
  );
};

export default FormInput;
