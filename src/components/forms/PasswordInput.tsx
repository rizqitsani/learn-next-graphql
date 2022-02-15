import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  useBoolean,
  useColorModeValue as mode,
} from '@chakra-ui/react';
import { RegisterOptions, useFormContext } from 'react-hook-form';
import { HiEye, HiEyeOff } from 'react-icons/hi';

type PasswordInputProps = {
  helperText?: string;
  id: string;
  label: string;
  placeholder?: string;
  validation?: RegisterOptions;
};

const PasswordInput = ({
  helperText,
  id,
  label,
  placeholder = '',
  validation,
  ...rest
}: PasswordInputProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const [showPassword, setShowPassword] = useBoolean();

  return (
    <FormControl isInvalid={errors[id]} id={id}>
      <FormLabel>{label}</FormLabel>
      <InputGroup size='md'>
        <Input
          {...register(id, validation)}
          {...rest}
          type={showPassword ? 'text' : 'password'}
          name={id}
          id={id}
          placeholder={placeholder}
          pr='4.5rem'
          focusBorderColor={mode('orange.600', 'orange.300')}
        />
        <InputRightElement>
          <IconButton
            size='md'
            variant='ghost'
            aria-label={showPassword ? 'Mask password' : 'Reveal password'}
            icon={showPassword ? <HiEyeOff /> : <HiEye />}
            onClick={setShowPassword.toggle}
            _hover={{ background: 'none' }}
            _active={{ background: 'none' }}
            _focus={{ boxShadow: 'none' }}
          >
            {showPassword ? 'Hide' : 'Show'}
          </IconButton>
        </InputRightElement>
      </InputGroup>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
      {errors[id] && <FormErrorMessage>{errors[id].message}</FormErrorMessage>}
    </FormControl>
  );
};

export default PasswordInput;
