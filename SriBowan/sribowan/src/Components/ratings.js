import React, {Component} from 'react';
import ShowRating from './showRating';
import ShowSuggestions from "./suggest";

export default class Rating extends Component{
    constructor(props) {
        super(props);


        this.addItem = this.addItem.bind(this);

        this.state = {

            items: [],
            rating: [
                {key:901,value:"1"},
                {key:901,value:"2"},
                {key:901,value:"3"},
                {key:901,value:"4"},
                {key:901,value:"5"},
            ],
            location: [
                {key:601,value:"Kandy"},
                {key:602,value:"Galle"},
                {key:603,value:"Trinco"}
            ],


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

                <h1 align="center">Rate Places</h1>
                <hr/> <hr/>
                <h4 className="badge-info">Rate the places you like!</h4>
                <hr/>
                <div>
                    <form onSubmit={this.addItem}>

                        <div className="input-group">
                            <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                            <input id="suggest" type="text" className="form-control" name="email"
                                   placeholder="Enter comment"
                                   ref={(a) => this._inputElement = a}>

                            </input>
                            <select ref={(a) => this._inputmonth = a} onChange={this.handleChange}>
                                {this.state.month.map(function (data, key) {
                                    return (
                                        <option key={key} value={data.value}>{data.value}</option>)
                                })}
                            </select>

                            <select ref={(a) => this._inputlocation = a} onChange={this.handleChange}>
                                {this.state.location.map(function (data, key) {
                                    return (
                                        <option key={key} value={data.value}>{data.value}</option>)
                                })}
                            </select>

                            <select ref={(a) => this._inputrating = a} onChange={this.handleChange}>
                                {this.state.rating.map(function (data, key) {
                                    return (
                                        <option key={key} value={data.value}>{data.value}</option>)
                                })}
                            </select>
                            <button className="btn btn-info" type="submit">Rate</button>
                        </div>

                    </form>
                </div>
                <br></br>

                <h5 className="card "><ShowRating entries={this.state.items}/></h5><br></br>


            </div>
        );
    }
    addItem(e) {
        if (this._inputElement.value !== "") {
            var location = this._inputlocation.value;
            var month = this._inputmonth.value;
            var rating = this._inputrating.value;
            var newItem = {
                text: "Location :  "+ location + " , " + " Month : "  + month + "  , " +  "Rating: " + rating + "   , " + " Comment: " + this._inputElement.value,
                key: Date.now(),
                date: Date()
            };

            this.setState((prevState) => {
                return {
                    items: prevState.items.concat(newItem)
                };
            });

            this._inputElement.value = "";
            this._inputlocation.value = "";
        }

        console.log(this.state.items);

        e.preventDefault();
    }
}