import React, { Component } from 'react';
// style={{ maxWidth: '18rem' }}
class DataCard extends Component {
    render() { 
        return (
          <div class="card bg-light mb-3" >
            <div class="card-body">
              <h5 class="card-title">{this.props.title}</h5>
              <p class="card-text">{this.props.data}</p>
            </div>
          </div>
         );
    }
}
 
export default DataCard;