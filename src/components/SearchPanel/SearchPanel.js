import React from 'react';

import ItemStatusFilter from '../ItemStatusFilter';

const Index = (props) => (
  <div className="container mb-4">
    <div className="row">
      <div className="col-sm-6">
        <input type="text" className="form-control" />
      </div>
      <div className="col-sm-6">
        <ItemStatusFilter {...props} />
      </div>
    </div>
  </div>
);

export default Index;
