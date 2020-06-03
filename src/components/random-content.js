import React from 'react';
import './random-content.css';
import { Header, Image, Table} from 'semantic-ui-react'

const RandomContent = () => (
  <Table basic='very' celled collapsing>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell className='title'>Countries</Table.HeaderCell>

      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>

        <Table.Cell>
          <Header as='h4' image>
            <Image src='https://i.imgur.com/rCnxPjr.png' rounded size='massive' />
            <Header.Content className='card-container'>
              Country
              <Header.Subheader>Native Name:</Header.Subheader>
              <Header.Subheader>Continent:</Header.Subheader>
            </Header.Content>
          </Header>
        </Table.Cell>



      </Table.Row>
      <Table.Row>

        <Table.Cell>
          <Header as='h4' image>
           <Image src='https://i.imgur.com/rCnxPjr.png' rounded size='massive' />
            <Header.Content className='card-container'>
              Country
              <Header.Subheader>Native name:</Header.Subheader>
              <Header.Subheader>Continent:</Header.Subheader>
            </Header.Content>
          </Header>
        </Table.Cell>



      </Table.Row>
      <Table.Row>

        <Table.Cell>
          <Header as='h4' image>
            <Image src='https://i.imgur.com/rCnxPjr.png' rounded size='massive' />
            <Header.Content className='card-container'>
              Country
              <Header.Subheader>Native name:</Header.Subheader>
              <Header.Subheader>Continent:</Header.Subheader>
            </Header.Content>
          </Header>
        </Table.Cell>



      </Table.Row>
      <Table.Row>


     </Table.Row>
   </Table.Body>
 </Table>
)
export default RandomContent;
