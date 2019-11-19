import Vue from 'vue';
import Router from 'vue-router';
import routes from './routes'

Vue.use(Router);


const router = new Router({ routes });

router.beforeEach((to, from, next) => {
  const title = to.meta && to.meta.title;
  if (title) {
    document.title = title;
  }
  next();
});

export {
  router
};