import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';

export default class Question extends Component{
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <h1><b>Question</b></h1>
                <div className='card' style={ {marginBottom: '20px'} }>
                    <div className='card-body' style={{border: '1px solid blue'}}>
                        <span>{this.props.question}</span>
                    </div>
                </div>
            </div>

        );
    }


}