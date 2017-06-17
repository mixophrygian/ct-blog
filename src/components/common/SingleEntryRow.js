import React, { PropTypes } from 'react';
import { browserHistory } from 'react-router';
import { Button, Glyphicon } from 'react-bootstrap';
import { formatDate } from '../../utils/utils';

// User List Element component
export default class SingleEntryRow extends React.Component {
  constructor(props) {
    super(props);
    this.viewEntry = this.viewEntry.bind(this);
  }

  // render

  viewEntry(e) {
    e.preventDefault();
    const id = e.currentTarget.getAttribute('data-id');
    if (e.target.tagName !== 'SPAN') {
      browserHistory.push(`entry/${id}`);
    }
  }

  render() {
    const { entry, showDelete } = this.props;
    const date = formatDate(entry.date);

    return (
      <tr data-id={entry.id} onClick={this.viewEntry}>
        <td className="entryDate">
          <div>{date}</div>
        </td>
        <td className="entryTitle">
          <div>
            {entry.situation}
          </div>

          <div className="buttonWrapper">
            <Button bsSize="xsmall" className="glyphbutton entry-delete" onClick={() => showDelete(entry)}>
              <Glyphicon glyph="remove-circle" />
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
};
