import React from 'react';
import './countries.css';
import { Header, Image, Table} from 'semantic-ui-react'

const Countries = () => (
  <Table basic='very' celled collapsing>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell className='title'>Results</Table.HeaderCell>
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
              <Header.Subheader>Language:</Header.Subheader>
              <Header.Subheader>Capital:</Header.Subheader>
              <Header.Subheader>Code:</Header.Subheader>
              <Header.Subheader>Currency:</Header.Subheader>
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
              <Header.Subheader>Native Name:</Header.Subheader>
              <Header.Subheader>Language:</Header.Subheader>
              <Header.Subheader>Capital:</Header.Subheader>
              <Header.Subheader>Code:</Header.Subheader>
              <Header.Subheader>Currency:</Header.Subheader>
            </Header.Content>
          </Header>
        </Table.Cell>
      </Table.Row>


      <Table.Row>
     </Table.Row>
   </Table.Body>
 </Table>
)
export default Countries;
