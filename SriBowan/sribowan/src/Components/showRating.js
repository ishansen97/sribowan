import React, {Component, Fragment} from "react";

class ShowRating extends Component {
    createTasks(item) {
        return <Fragment><li className=" card alert-light" key={item.key}>{item.text}</li><br></br></Fragment>
    }

    render() {
        var rateEntries = this.props.entries;
        var listItems = rateEntries.map(this.createTasks);

        return (<div>
                <div className="alert-info" align="center"><h2>Ratings</h2></div>
                <hr/>
                <ul  className="card alert-light">Location: Kandy, Month: February, Rating:4, Comment: Great Experience.</ul>
                <ul  className="card alert-light">Location: Galle, Month: May, Rating:4, Comment: Good Experience.</ul>
                <ul  className="card alert-light">Location: Nuwara-Eliya, Month: December, Rating:4, Comment: Enjoyed alot. </ul>
                {listItems}
            </div>
        );
    }
};

export default ShowRating;