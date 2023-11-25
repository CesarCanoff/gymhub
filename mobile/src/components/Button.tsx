import { Button as NativeBaseButton, IButtonProps, Text } from 'native-base';

type Props = IButtonProps & {
  title: string;
  variant: 'outline' | 'solid';
}

export function Button({ title, variant, ...rest }: Props) {
  return (
    <NativeBaseButton
      h={14}
      w="full"
      rounded="sm"
      borderWidth={variant === "outline" ? 1 : 0}
      bg={variant === "outline" ? "transparent" : "yellow.400"}
      borderColor={variant === "outline" ? "yellow.400" : "transparent"}
      _pressed={{ bg: variant === "outline" ? 'gray.500' : 'yellow.600' }}
      {...rest}
    >
      <Text
        color={variant === "outline" ? "yellow.400" : "gray.700"}
        fontFamily="heading"
        fontSize="sm"
      >
        {title}
      </Text>
    </NativeBaseButton>
  );
}