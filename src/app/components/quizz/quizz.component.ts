import { Component, OnInit } from '@angular/core';
import quizz_questions from '../../../assets/data/quizz_questions.json'

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.css']
})
export class QuizzComponent implements OnInit {
  title:string = ""

  questions:any
  questionsSelected:any

  answers:string[] = []
  answerSelected:string = ""

  questionIndex:number = 0
  questionMaxIndex:number = 0

  finished:boolean = false

  constructor() { }

  ngOnInit(): void {
    if(quizz_questions){
      this.finished = false

      this.title = quizz_questions.title

      this.questions = quizz_questions.questions
      this.questionsSelected = this.questions[this.questionIndex]

      this.questionMaxIndex = this.questions.length
      this.questionIndex = 0

    }
  }

  playerChoose(value:string){
    this.answers.push(value)
    this.questionIndex
    this.nextStep()
  }
  nextStep(){
      this.questionIndex += 1
      if (this.questionIndex < this.questionMaxIndex){
        this.questionsSelected = this.questions[this.questionIndex]
      }else {
        this.finished = true

      }

  }

}
