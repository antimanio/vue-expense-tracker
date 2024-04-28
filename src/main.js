
import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
           
//Theme
import 'primevue/resources/themes/aura-light-green/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';


//Components
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';  
import Row from 'primevue/row';   
import Card from 'primevue/card';
import Menubar from 'primevue/menubar';
import Panel from 'primevue/panel';



//Common
import HeaderContent from './common/HeaderContent.vue';
import MainContent from './common/MainContent.vue';
import BottomContent from './common/MainContent.vue';




const app = createApp(App)
app.use(PrimeVue);
app.component('DataTable', DataTable)
app.component('Column', Column)
app.component('ColumnGroup', ColumnGroup)
app.component('DataTable', DataTable)
app.component('Row', Row)
app.component('Card', Card)
app.component('Menubar', Menubar)
app.component('Panel', Panel)
app.component('HeaderContent', HeaderContent)
app.component('MainContent', MainContent)
app.component('BottomContent', BottomContent)
app.mount('#app')
