import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';

export default class PostAnswer extends Component{
    constructor(props) {
        super(props);

        this.state = {
            name: 'hello'
        }
    }

    postAnswer = (event) =>{
        event.preventDefault();
        event.stopPropagation();
        this.props.postAnswer(this.refs.answer.value);
    }

    render() {
        return (
            <div className='card' style={ {marginTop: '20px', color: 'white', background: "blue", height: '250px'} }>
                <div className='card-header'>
                    <h1>Post Your Answer</h1>
                </div>
                <div className='card-body'>
                    <form onSubmit={this.postAnswer}>
                        <textArea ref='answer' cols="100" rows="3" value='' className='form-control' onChange={this.getAnswer}></textArea>
                        <button type='submit' name='submit' className='btn btn-success' style={ {marginTop: '20px'} }>Submit</button>
                    </form>
                </div>
            </div>
        );
    }

}