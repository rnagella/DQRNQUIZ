//@flow
/**
 * @providesModule AppRouter
 */
import {
	createRouter,
} from '@exponent/ex-navigation';

import Screen1Screen from '../screens/Screen1Screen';
import Screen2Screen from '../screens/Screen2Screen';
import Screen3Screen from '../screens/Screen3Screen';
import Screen4Screen from '../screens/Screen4Screen';
import Screen5Screen from '../screens/Screen5Screen';
import AboutScreen from '../screens/AboutScreen';

const AppRouter = createRouter(() => ({
	screen1: () => Screen1Screen,
	screen2: () => Screen2Screen,
	screen3: () => Screen3Screen,
	screen4: () => Screen4Screen,
	screen5: () => Screen5Screen,
	about: () => AboutScreen,
}));

export default AppRouter;
