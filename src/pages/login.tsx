import * as React from 'react';

import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Stack,
  Text,
  useColorModeValue as mode,
} from '@chakra-ui/react';
import { NextSeo } from 'next-seo';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import useAuthStore from '@/store/useAuthStore';

import Input from '@/components/forms/Input';
import PasswordInput from '@/components/forms/PasswordInput';

import { DEFAULT_TOAST_MESSAGE } from '@/constants/toast';
import { useLoginMutation } from '@/graphql/generated';

type LoginForm = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const [loginMutation] = useLoginMutation();
  const login = useAuthStore.useLogin();

  const methods = useForm<LoginForm>();
  const { handleSubmit } = methods;

  const handleLogin: SubmitHandler<LoginForm> = (data) => {
    toast.promise(
      loginMutation({
        variables: {
          data: {
            email: data.email,
            password: data.password,
          },
        },
        onCompleted({ login: res }) {
          login({
            email: res.email,
            id: res.id,
            name: res.name,
          });
        },
      }),
      {
        ...DEFAULT_TOAST_MESSAGE,
        success: 'Success! You are logged in',
      },
    );
  };

  return (
    <>
      <NextSeo title='Login' />

      <Flex minH='100vh' align='center'>
        <Box maxW='md' mx='auto'>
          <Heading textAlign='center' size='xl' fontWeight='extrabold'>
            Sign in to your account
          </Heading>
          <Box
            bg={mode('white', 'gray.700')}
            mt={8}
            py={8}
            px={{
              base: 4,
              md: 10,
            }}
            shadow='base'
            rounded={{
              sm: 'lg',
            }}
          >
            <FormProvider {...methods}>
              <Stack as='form' spacing={4} onSubmit={handleSubmit(handleLogin)}>
                <Input
                  type='text'
                  label='Email'
                  id='email'
                  validation={{
                    required: 'Email / Telepon tidak boleh kosong',
                  }}
                />
                <PasswordInput
                  label='Password'
                  id='password'
                  validation={{
                    required: 'Password tidak boleh kosong',
                    minLength: {
                      value: 8,
                      message: 'Password harus lebih dari 8 karakter',
                    },
                  }}
                />
                <Button
                  type='submit'
                  colorScheme='orange'
                  size='lg'
                  fontSize='md'
                >
                  Sign in
                </Button>
              </Stack>
            </FormProvider>
            <Flex align='center' color='gray.300' mt={4}>
              <Box flex='1'>
                <Divider borderColor='currentcolor' />
              </Box>
              <Text
                as='span'
                px={3}
                fontSize='sm'
                color={mode('gray.600', 'gray.400')}
                // fontWeight='medium'
              >
                Don&apos;t have an account?
              </Text>
              <Box flex={1}>
                <Divider borderColor='currentcolor' />
              </Box>
            </Flex>
            <Button
              mt={4}
              variant='outline'
              type='submit'
              colorScheme='orange'
              size='lg'
              fontSize='md'
              isFullWidth
            >
              Sign up
            </Button>
          </Box>
        </Box>
      </Flex>
    </>
  );
};

export default LoginPage;
