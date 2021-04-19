import Vue from 'vue'
import Card from '@/components/Cards/Card.vue';
import BaseButton from '@/components/BaseButton.vue';
import BaseAlert from '@/components/BaseAlert.vue';
import Loading from '@/components/Loading.vue';
import Modal from '@/components/Modal.vue'

/** You can register global components here and use them as a plugin in your main Vue instance */
Vue.component(Card.name, Card);
Vue.component(BaseAlert.name, BaseAlert);
Vue.component(BaseButton.name, BaseButton);
Vue.component(Loading.name, Loading);
Vue.component(Modal.name, Modal)
