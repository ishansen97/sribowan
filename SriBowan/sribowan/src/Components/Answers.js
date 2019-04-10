import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';

export default class Answers extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className='card'>
                <div className='card-body'>
                    <h1>Top Answers</h1>
                    {
                        this.props.answers.map((elem, i) =>
                            <div className='card card-body'>
                                <span><b>{i + 1} : {elem}</b></span>
                                <br/>
                            </div>
                        )
                    }


                </div>
            </div>
        );
    }

}