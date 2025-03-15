import { Component } from '@angular/core';
import { QuizComponent } from './quiz/quiz.component'; 

@Component({
  selector: 'app-root',
  template: '<app-quiz></app-quiz>',  
  standalone: true,  
  imports: [QuizComponent],  
})
export class AppComponent {
  
}

