import Image from 'next/image';
import MyForm from './components/form';
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    body: 'Montserrat, sans-serif',
    heading: 'Montserrat, sans-serif',
  },
});

export default function Home() {
  return (
    <main>
      <MyForm/>
    </main>
  )
}
