import React, {Component} from 'react';
import Question from './Question';
import Answers from './Answers';
import Options from './Options';
import PostAnswer from './PostAnswer';
import PostQuestion from './PostQuestion';
import 'bootstrap/dist/css/bootstrap.css';

export default class QuestionPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            month: [
                'January',
                'February',
                'March',
                'April',
                'May',
                'June',
                'July',
                'August',
                'September',
                'October',
                'November',
                'December'
            ],
            location: 'Colombo',
            question: 'What do you recommend to visit around Hikkaduwa?',
            topAnswers: [
                'You can visit the Coral Reefs...Beautiful Place..',
                'From 20km from there...you can visit Galle.'
            ],
            isPostQuestion: false
        }

        this.addAnswer = this.addAnswer.bind(this);
    }

    setPostQuestion = () => {
        this.setState({isPostQuestion: true});
    }

    addAnswer = (answer) => {
        let answers = this.state.topAnswers;
        answers.push(answer);
        this.setState({topAnswers: answers});
    }

    renderNormal = () => {
        return (
            <div>
                {/*<Options months={this.state.month} postQuestion={this.setPostQuestion} pro='hello'/>*/}

                <Question question={this.state.question}/>
                <Answers answers={this.state.topAnswers} />
                <PostAnswer postAnswer={this.addAnswer} />
            </div>

        );
    }

    renderQuestion = () => {
         return (
             <p>hello</p>
         );
    }

    render() {
        {
            if (!this.state.isPostQuestion) {
            return (
                <div className='container'>
                    {/*<Options months={this.state.month}/>*/}
                    <div className='row' style={ {marginTop: '20px'} }>
                        <div className='col-8'></div>
                        <div className='col-4'>
                            <select name="months" id="months">
                                {
                                    this.state.month.map((elem, i) =>
                                        <option value={elem} key={i}>{elem}</option>
                                    )
                                }
                            </select>
                            <button type='button' className='btn btn-success' name='postQuestion' style={ {marginLeft: '20px'} } onClick={this.setPostQuestion}>Post Question</button>
                        </div>
                    </div>
                    <Question question={this.state.question}/>
                    <Answers answers={this.state.topAnswers}/>
                    <PostAnswer postAnswer={this.addAnswer}/>
                </div>
            );
            } else {
                return (
                    <div className='container'>
                        <PostQuestion/>
                    </div>
                );
            }
        }
    }

}
