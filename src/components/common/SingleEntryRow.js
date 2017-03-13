import React, { PropTypes } from "react";
import { Link } from "react-router";
import { Button, Glyphicon } from "react-bootstrap";

// User List Element component
export default class SingleEntryRow extends React.Component {
  // render
  render() {
    const {entry, showDelete} = this.props;
    return (
      <tr>
        <td>{entry.entryname}</td>
        <td className="entryTitle">
        <div>
        {entry.job}
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
