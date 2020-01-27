import React, { Component } from 'react'

class QuizQuestion extends Component {

  render() {
        return (
          <main>
            <section>
            <p>{this.props.quiz_question.instruction_text}</p>
            </section>
            <section className="buttons">
              <ul>
                <QuizQuestion quiz_question={quizData.quiz_questions[this.state.quiz_position - 1]}/>
              </ul>
            </section>
          </main>
        )
    }
}

export default QuizQuestion