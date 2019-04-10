import React, {Component, Fragment} from "react";

class ShowSuggestions extends Component {
    createTasks(item) {
        return <Fragment><li className=" card alert-primary" key={item.key}>{item.text}</li><br></br></Fragment>
    }

    render() {
        var suggestionEntries = this.props.entries;
        var listItems = suggestionEntries.map(this.createTasks);

        return (<div>
                <div className="alert-warning"><h2>Previous suggestions</h2></div>
                <ul  className="card alert-primary">Month January : Highly recommend Nuwara Eliya for January. Make sure to visit Gregory's lake.</ul>
                <ul  className="card alert-primary">Month April : Visit Hikkaduwa (beach side). April Sri Lankan's are having local New Year.
                This is the time if you want to taste Sri Lankan traditional food. Visi Matara which is prety close to Hikkaduwa.</ul>
                <ul  className="card alert-primary">Month January : Highly recommend Nuwara Eliya for January. Make sure to visit Gregory's lake.</ul>
                {listItems}
            </div>
        );
    }
};

export default ShowSuggestions;