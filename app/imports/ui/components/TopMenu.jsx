import React from 'react';
import { Image, Menu, Button, Header } from 'semantic-ui-react';

export default class TopMenu extends React.Component {
  render() {
    const mystyle = {
      marginBottom: 0,
    };
    return (
      <Menu className="borderless topmenu" style={mystyle}>
        <Image className="image" src='https://www.poptropica.com/images/logo-1.png'/>
        <Menu.Item><Header as ='h5' className='yellowtext'>Home</Header></Menu.Item>
        <Menu.Item><Header as ='h5' className='whitetext'>Parents</Header></Menu.Item>
        <Menu.Item><Header as ='h5' className='whitetext'>Memberships</Header></Menu.Item>
        <Menu.Item><Header as ='h5' className='whitetext'>Help</Header></Menu.Item>
        <Menu.Item><Header as ='h5' className='whitetext'>Blog</Header></Menu.Item>
        <Menu.Item><Header as ='h5' className='whitetext'>Island Tours</Header></Menu.Item>
        <Menu.Item className="right fitted">
          <Button size='massive' className='right fitted button'>Log in</Button>
        </Menu.Item>

      </Menu>
    );
  }
}
