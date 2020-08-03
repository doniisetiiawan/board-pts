/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import Ticket from '../components/Ticket/Ticket';
import withDataFetching from '../withDataFetching';

const TicketsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin: 5%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Alert = styled.div`
  text-align: center;
`;

function Tickets({ loading, error, data }) {
  return (
    <TicketsWrapper>
      {(loading || error) && (
        <Alert>{loading ? 'Loading...' : error}</Alert>
      )}
      {data.map((ticket) => (
        <Ticket
          key={ticket.id}
          marginRight
          ticket={ticket}
        />
      ))}
    </TicketsWrapper>
  );
}

export default withDataFetching(Tickets);
