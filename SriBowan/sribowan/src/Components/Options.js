import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';

export default class Options extends Component {
    constructor(props) {
        super(props);

    }

    OnPost = () => {

    }

    render() {
        return (
            <div className='row' style={ {marginTop: '20px'} }>
                <div className='col-8'></div>
                <div className='col-4'>
                    <select name="months" id="months">
                        {
                            this.props.months.map((elem, i) =>
                                <option value={elem} key={i}>{elem}</option>
                            )
                        }
                    </select>
                    <button type='button' className='btn btn-success' name='postQuestion' style={ {marginLeft: '20px'} } onClick={this.OnPost}>Post Question</button>
                </div>
            </div>
        );
    }

}