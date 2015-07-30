import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';

export class App {
  configureRouter(config, router){
    config.title = 'notReddit';
    config.map([
      { route: ['','home'],  		name: 'home',     moduleId: './home',    nav: true, title:'Home' },
      { route: 'explore', 			name: 'explore',  moduleId: './explore', nav: true, title:'Explore' },
      { route: 'c/:categoryId', name: 'category', moduleId: './category' },
      { route: 'u/:userId',     name: 'user',     moduleId: './user' }
    ]);

    this.router = router;
  }
}
