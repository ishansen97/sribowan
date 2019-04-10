import React, {Component} from 'react';
import ShowSuggestions from './showSuggestions';

class Suggestions extends Component{

    constructor(props) {
        super(props);


        this.addItem = this.addItem.bind(this);

        this.state = {

            items: [],
            location: [],

            // suggestions: [
            //     "Good for kids",
            //     "Garbage problems"
            // ],
            month: [
                {key:101,value:"January"},
                {key:102,value:"February"},
                {key:101,value:"March"},
                {key:102,value:"April"},
                {key:101,value:"May"},
                {key:102,value:"June"},
                {key:101,value:"July"},
                {key:102,value:"August"},
                {key:101,value:"September"},
                {key:102,value:"October"},
                {key:101,value:"November"},
                {key:102,value:"December"}
            ]
        }
    }


    render() {
        return (
            <div className="container">

                <h1>Enter Suggestions</h1>
                <h4 className="badge-warning">Suggest places to others relevant for the month.</h4>
                <div>
                    <form onSubmit={this.addItem}>

                            <div className="input-group">
                                <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                                <input id="suggest" type="text" className="form-control" name="email" placeholder="Enter Suggestions"
                                       ref={(a) => this._inputElement = a}>

                                </input>
                                <select ref={(a) => this._inputmonth = a} onChange={this.handleChange}>
                                    {this.state.month.map(function(data, key){  return (
                                        <option key={key} value={data.value}>{data.value}</option> )
                                    })}
                                </select>
                        <button className="btn btn-success" type="submit">Suggest</button>
                            </div>

                    </form>
                </div><br></br>

                <h5 className="card "><ShowSuggestions entries={this.state.items}/></h5><br></br>


            </div>
        );
    }
    addItem(e) {
        if (this._inputElement.value !== "") {
            var month = this._inputmonth.value;
            var newItem = {
                text: " Month "+ month + " : " + this._inputElement.value,
                key: Date.now(),
                date: Date()
            };

            this.setState((prevState) => {
                return {
                    items: prevState.items.concat(newItem)
                };
            });

            this._inputElement.value = "";
            this._inputmonth.value = "";
        }

        console.log(this.state.items);

        e.preventDefault();
    }
}

export default Suggestions;