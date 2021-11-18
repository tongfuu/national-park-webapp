import React from 'react';

import MenuBar from '../components/MenuBar';

class SearchPage extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {

    return (
      <div>
        <MenuBar />
        <div style={{ width: '70vw', margin: '0 auto', marginTop: '5vh' }}>
          <h3>Search</h3>
        </div>
      </div>
    )
  }

}

export default SearchPage