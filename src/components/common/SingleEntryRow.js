import React, { PropTypes } from "react";
import { Link } from "react-router";
import { Button, Glyphicon } from "react-bootstrap";

// User List Element component
export default class SingleEntryRow extends React.Component {
  constructor(props){
    super(props);
    this.formatDate = this.formatDate.bind(this);
  }
  
  // render
  formatDate (date){
    date = new Date(date);
    var month = date.getMonth() + 1;
    var weekdayIndex = date.getDay();
    var weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return weekDays[weekdayIndex] + ' ' + month + '/' + date.getDate() +'/' + date.getFullYear();
  }
  
  render() {
    const {entry, showDelete} = this.props;
    const date = this.formatDate(entry.date);
    
    return (
      <tr>
        <td>{date}</td>
        <td className="entryTitle">
        <div>
        {entry.entryname}
        </div>
        <div>
          <Link to={'entry-edit/' + entry.id}>
            <Button bsSize="xsmall">
              <Glyphicon glyph="edit"/>
            </Button>
          </Link>
          <Button bsSize="xsmall" className="entry-delete" onClick={() => showDelete(entry)}>
            <Glyphicon glyph="remove-circle"/>
          </Button>
          </div>
        </td>
      </tr>
    );
  }
}

// prop checks
SingleEntryRow.propTypes = {
  entry: PropTypes.object.isRequired,
  showDelete: PropTypes.func.isRequired,
}
