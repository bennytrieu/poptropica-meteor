import React from 'react';
import { Image, Menu, Grid, Container, Header } from 'semantic-ui-react';

export default class Bottommenu extends React.Component {
  render() {
    const mystyle = {
      marginTop: 0,
    };
    return (
      <Menu className='borderless bottommenu' style={mystyle}>
        <Grid centered>
          <Grid.Row>
            <Container>
              <Header as='h1' className='yellowtext'>EXPLORE POPTROPICA!</Header>
              <Header as='h5' className='whitetext'>Join millions of worldwide players today!</Header>
            </Container>
          </Grid.Row>
          <Grid.Row centered columns={4}>
            <Grid.Column>
              <Header as='h1' className='yellowtext'>Connect with friends!</Header>
              <Image src="https://static.poptropica.com/images/picker_page/friends.png" alt="poptropica logo"/>
            </Grid.Column>
            <Grid.Column>
              <Header as='h1' className='yellowtext'>Play epic adventures!</Header>
              <Image src="https://static.poptropica.com/images/picker_page/adventures.png" alt="poptropica logo"/>
            </Grid.Column>
            <Grid.Column>
              <Header as='h1' className='yellowtext'>Adopt your own pets!</Header>
              <Image src="https://static.poptropica.com/images/picker_page/pets.png" alt="poptropica logo"/>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row centered columns={10}>
            <Grid.Column>
              <Header as ='h5' className='whitetext'>Parents</Header>
            </Grid.Column>
            <Grid.Column>
              <Header as ='h5' className='whitetext'>Membership</Header>
            </Grid.Column>
            <Grid.Column>
              <Header as ='h5' className='whitetext'>Help</Header>
            </Grid.Column>
            <Grid.Column>
              <Header as ='h5' className='whitetext'>Contact Us</Header>
            </Grid.Column>
            <Grid.Column>
              <Header as ='h5' className='whitetext'>About Us</Header>
            </Grid.Column>
            <Grid.Column>
              <Header as ='h5' className='whitetext'>Privacy</Header>
            </Grid.Column>
            <Grid.Column>
              <Header as ='h5' className='whitetext'>Terms</Header>
            </Grid.Column>
            <Grid.Column>
              <Header as ='h5' className='whitetext'>DO NOT SELL MY INFO (FOR CA RESIDENTS)</Header>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row><Header as ='h5' className='whitetext'>©2007 - 2021 Sandbox Networks, inc. All rights reserved.</Header></Grid.Row>
          <Grid.Row><Image src="https://www.kidsafeseal.com/sealimage/9223372036854775807/poptropica_small_darktm.png"
            alt="poptropica logo"/></Grid.Row>
          <Grid.Row><Header as='h5' className='circle' color='#9fbcdf'>a</Header></Grid.Row>

        </Grid>
      </Menu>
    );
  }
}
