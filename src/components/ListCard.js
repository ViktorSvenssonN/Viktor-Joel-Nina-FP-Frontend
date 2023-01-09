import React, { useState } from "react";
import { useDispatch, batch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components/macro";
// import { InnerWrapper } from "Globalstyles";

export const ListCard = () => {
  //props för ändring av färg på varannat kort


  return (
    
      <ListCardWrapper>
        <GridWrapper>
          <IconImg> random icon img </IconImg>
          <DaysToBday> X days (component) </DaysToBday>
          <InfoBday> 
            <BdayName>
              Test McTestersson's , birthday
              {/* h4 {firtname} 
              {lastname}'s, birthday */}
            </BdayName>
            <BdayAge>
              h5 Turns 25 years, (in xx d)
            </BdayAge>
            <BdayDate>
              2022-01-26
            </BdayDate>
            <BdayReminders>
              //flex row, map reminders
            </BdayReminders>
          </InfoBday>
        </GridWrapper>
      </ListCardWrapper>
    
  );
}

// ------------- Styled Components -------------------

const ListCardWrapper = styled.div`
  grid-area: 1 / 1 / 1 / 4; 
  
`;
  
const GridWrapper = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns:  2fr 5fr;
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 10px;

  margin-top: 1rem;
  border-radius: 15px;
  /* height: 100px; */
  outline: none;
  // bg-color props
  background-color: var(--clr-background-green-card);
  box-shadow: 3px 8px 1px var(--clr-cascade);
  color: var(--clr-text-dark);
  border: 2px solid hotpink;
  
  
`;

// GÖRS OM TILL IMG SEN
const IconImg = styled.div`
  grid-area: 1 / 1 / 3 / 2; 
  background-color: gray;
`;

const DaysToBday = styled.div`
  grid-area: 3 / 1 / 5 / 2; 
  background-color: yellowgreen;
`;

const InfoBday = styled.div`
  /* display: grid; */
  align-items: center;
  padding: 0.5rem 0.7rem 0.5rem 0;
  width: 100%;
  grid-area: 1 / 2 / 5 / 3;
`;

const BdayName = styled.h4`
  margin-bottom: 5px;
  /* grid-area: 1 / 2 / 2 / 3;  */
`;

const BdayAge = styled.h5`
margin-bottom: 5px;
  /* grid-area: 2 / 2 / 3 / 3;  */
`;

const BdayDate = styled.p`
  /* grid-area: 3 / 2 / 4 / 3;  */
`;

const BdayReminders = styled.div`
display: flex; 
  /* grid-area: 4 / 2 / 5 / 3;  */
`