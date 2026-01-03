import { Component, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  constructor(router: Router) {
  router.events.subscribe(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

  protected readonly title = signal('flower-store-frontend');
}
