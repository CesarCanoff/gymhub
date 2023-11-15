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
      bg={variant === "outline" ? "transparent" : "info.600"}
      borderColor={variant === "outline" ? "info.600" : "transparent"}
      _pressed={{ bg: variant === "outline" ? 'gray.500' : 'info.700' }}
      {...rest}
    >
      <Text
        color={variant === "outline" ? "info.600" : "white"}
        fontFamily="heading"
        fontSize="sm"
      >
        {title}
      </Text>
    </NativeBaseButton>
  );
}