import { SignIn } from './src/screens/SignIn';
import { NativeBaseProvider } from 'native-base';
import { THEME } from './styles/theme';

export default function App() {
  return (
    <NativeBaseProvider theme={THEME}>
      <SignIn/>
    </NativeBaseProvider>
  );
}
