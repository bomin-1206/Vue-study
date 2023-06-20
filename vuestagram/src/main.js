import { createApp } from 'vue'
import App from './App.vue'
import mitt from 'mitt';
let emitter = mitt();
let app = createApp(App);
app.config.globalProperties.emitter = emitter; // 모든 컴포넌트들이 사용할 수 있도록

import store from './store.js'
import './registerServiceWorker'

app.use(store).mount('#app')
