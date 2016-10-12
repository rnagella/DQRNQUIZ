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
import ProfileScene from '../screens/ProfileScene';
import AboutScene from '../screens/AboutScene';

const AppRouter = createRouter(() => ({
	menu: () => MenuScene,
	list: () => ListScene,
	add: () => AddScene,
	chat: () => ChatScene,
	profile: () => ProfileScene,
	about: () => AboutScene,
}));

export default AppRouter;
