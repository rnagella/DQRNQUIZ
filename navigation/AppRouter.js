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
import ChatScene from '../screens/ChatScene';
import Screen5Screen from '../screens/Screen5Screen';
import AboutScreen from '../screens/AboutScreen';

const AppRouter = createRouter(() => ({
	menu: () => MenuScene,
	list: () => ListScene,
	add: () => AddScene,
	chat: () => ChatScene,
	screen5: () => Screen5Screen,
	about: () => AboutScreen,
}));

export default AppRouter;
