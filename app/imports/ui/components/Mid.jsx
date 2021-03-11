import React from 'react';
import { Image, Menu } from 'semantic-ui-react';

export default class Mid extends React.Component {
  render() {
    const mystyle = {
      marginTop: 0,
      marginBottom: 0,
    };
    return (
      <Menu className='center' style={mystyle}>
        <Image src='/images/Poptropica.png'/>
      </Menu>
    );
  }
}
