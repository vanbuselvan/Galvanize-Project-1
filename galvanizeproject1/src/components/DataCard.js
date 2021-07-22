import React, { Component } from 'react';

class DataCard extends Component {
    render() { 
        return (
          <div class="col 3">
            <div class="card bg-light mb-3" style={{ maxWidth: '18rem' }}>
              <div class="card-body">
                <h5 class="card-title">{this.props.title}</h5>
                <p class="card-text">{this.props.data}</p>
              </div>
          </div>
          </div>
         );
    }
}
 
export default DataCard;