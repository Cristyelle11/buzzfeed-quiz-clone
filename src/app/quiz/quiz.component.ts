import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
  standalone: true,
  imports:[CommonModule] 
})
export class QuizComponent {
  currentQuestionIndex: number = 0;
  questions: Array<any> = [
    { question: 'Qual é a sua cor favorita?', options: ['Azul', 'Verde', 'Vermelho'] },
    { question: 'Qual é o seu animal favorito?', options: ['Cachorro', 'Gato', 'Pássaro'] }
  ];
  userAnswers: string[] = [];

  nextQuestion(answer: string) {
    this.userAnswers.push(answer);
    this.currentQuestionIndex++;
  }
}


