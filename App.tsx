import { StatusBar } from 'react-native';
import {
  useFonts,
  NunitoSans_400Regular,
  NunitoSans_700Bold
} from '@expo-google-fonts/nunito-sans'
import theme from '@theme';
import { ThemeProvider } from 'styled-components/native'
import { Loading } from '@components/Loading';
import { StatisticsScreen } from '@screens/statistics';


export default function App() {
  const [fontLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold,
  })

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      {fontLoaded ? (
        <StatisticsScreen />
      ) : (
        <Loading />
      )}

    </ThemeProvider>
  );
}

