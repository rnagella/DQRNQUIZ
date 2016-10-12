//@flow
/**
 * @providesModule AppRouter
 */
import {
	createRouter,
} from '@exponent/ex-navigation';

import MenuScene from '../screens/MenuScene';
import ListScene from '../screens/ListScene';
import AddScene from '../screens/AddScene';
import Screen4Screen from '../screens/Screen4Screen';
import Screen5Screen from '../screens/Screen5Screen';
import AboutScreen from '../screens/AboutScreen';

const AppRouter = createRouter(() => ({
	menu: () => MenuScene,
	list: () => ListScene,
	add: () => AddScene,
	screen4: () => Screen4Screen,
	screen5: () => Screen5Screen,
	about: () => AboutScreen,
}));

export default AppRouter;
