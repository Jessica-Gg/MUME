import { createApp } from 'vue'
import App from './App.vue'
import Presentation from './views/Presentation.vue'

import {createRouter, createWebHistory} from 'vue-router'  

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret)

const routes = [
    {
      path: '/',
      name: 'Presentation',
      component: Presentation,
    },
    {
        path: '/contact',
        name: 'Contact',
        component: () => import('./views/Contact.vue')
      },
      {
        path: '/bienetre',
        name: 'BienEtre',
        component: () => import('./views/BienEtre.vue'),
      },
      {
        path: '/espacedetente',
        name: 'EspaceDetente',
        component: () => import('./views/EspaceDetente.vue'),
      },
      {
        path: '/programmes',
        name: 'Programmes',
        component: () => import('./views/Programmes.vue'),
      },
      {
        path: '/mentionslegales',
        name: 'MentionsLegales',
        component: () => import('./views/MentionsLegales.vue'),
      },
  ]

  const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })
  
  createApp(App)
  .use(router)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')