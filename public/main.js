
import { App, HtmlScreen, Route } from 'senna';

document.addEventListener('DOMContentLoaded', event => {

  const app = new App();

  app.setBasePath('/');
  app.addSurfaces('content');
  app.addRoutes(new Route(/.*/, HtmlScreen));

  window.SPA = app;

  if (window.SPA_LISTENERS) {
    window.SPA_LISTENERS.forEach(callback => callback(app));
  }

});

window.onSPA = function (callback) {
  if (window.SPA) {
    callback(window.SPA);
  }
  else {
    window.SPA_LISTENERS || (window.SPA_LISTENERS = []);
    window.SPA_LISTENERS.push(callback);
  }
}
