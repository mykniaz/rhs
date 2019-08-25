import React from 'react';

import ItemStatusFilter from '../ItemStatusFilter';

const Index = () => (
  <div className="container mb-4">
    <div className="row">
      <div className="col-sm-6">
        <input type="text" className="form-control" />
      </div>
      <div className="col-sm-6">
        <ItemStatusFilter />
      </div>
    </div>
  </div>
);

export default Index;
