import * as React from 'react';

import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input as ChakraInput,
  InputGroup,
  InputRightElement,
  useColorModeValue as mode,
} from '@chakra-ui/react';
import { RegisterOptions, useFormContext } from 'react-hook-form';
import { HiExclamationCircle } from 'react-icons/hi';

type InputProps = {
  helperText?: string;
  id: string;
  label: string;
  placeholder?: string;
  type?: React.HTMLInputTypeAttribute;
  validation?: RegisterOptions;
};

const Input = ({
  helperText,
  id,
  label,
  placeholder = '',
  type = 'text',
  validation,
  ...rest
}: InputProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <FormControl isInvalid={errors[id]} id={id}>
      <FormLabel>{label}</FormLabel>
      <InputGroup>
        <ChakraInput
          {...register(id, validation)}
          {...rest}
          type={type}
          name={id}
          id={id}
          placeholder={placeholder}
          focusBorderColor={mode('orange.600', 'orange.300')}
        />
        {errors[id] && (
          <InputRightElement color='red.500'>
            <HiExclamationCircle size='18' className='text-xl text-red-500' />
          </InputRightElement>
        )}
      </InputGroup>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
      {errors[id] && <FormErrorMessage>{errors[id].message}</FormErrorMessage>}
    </FormControl>
  );
};

export default Input;
