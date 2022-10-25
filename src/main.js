import {
	createSSRApp
} from "vue";
import App from "./App.vue";
export function createApp() {
	const app = createSSRApp(App);
	app.mixin({
		onLoad() {
			console.log('mixin onload')
		}
	})
	return {
		app,
	};
}
