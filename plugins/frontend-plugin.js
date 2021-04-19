import Vue from 'vue'

// Notifications plugin. Used on Notifications page
import Notifications from '@/components/NotificationPlugin';

// A plugin file where you could register global components used across the app
import './globalComponents';

// element ui language configuration
import lang from 'element-ui/lib/locale/lang/en';
import locale from 'element-ui/lib/locale';
locale.use(lang);

Vue.use(Notifications);
