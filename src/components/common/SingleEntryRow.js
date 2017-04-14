import React, { PropTypes } from "react";
import { Link, browserHistory } from "react-router";
import { Button, Glyphicon } from "react-bootstrap";
import { formatDate, excerptText } from '../../utils/utils';

// User List Element component
export default class SingleEntryRow extends React.Component {
  constructor(props){
    super(props);
    this.viewEntry = this.viewEntry.bind(this);
  }
  
  // render
    
  viewEntry(e) {
    e.preventDefault();
    const id = e.currentTarget.getAttribute('data-id');
    if(e.target.tagName !== "SPAN"){
      browserHistory.push('entry/' + id);
    }
  }
  
  render() {
    const {entry, showDelete} = this.props;
    const date = formatDate(entry.date);
    const excerpt = excerptText(entry.situation, 10);
    
    return (
      <tr data-id={entry.id} onClick={this.viewEntry}>
        <td>{date}</td>
        <td className="entryTitle">
          <div>
            {excerpt}
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
