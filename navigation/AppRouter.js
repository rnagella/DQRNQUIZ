//@flow
/**
 * @providesModule AppRouter
 */
import {
	createRouter,
} from '@exponent/ex-navigation';

import MenuScene from '../screens/MenuScene';
import ListScene from '../screens/ListScene';
import Screen3Screen from '../screens/Screen3Screen';
import Screen4Screen from '../screens/Screen4Screen';
import Screen5Screen from '../screens/Screen5Screen';
import AboutScreen from '../screens/AboutScreen';

const AppRouter = createRouter(() => ({
	menu: () => MenuScene,
	list: () => ListScene,
	screen3: () => Screen3Screen,
	screen4: () => Screen4Screen,
	screen5: () => Screen5Screen,
	about: () => AboutScreen,
}));

export default AppRouter;
