import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'



// Components
import ListView from './ListView'
import StartState from './StartState'

export const SelectStart = () => {
  const accessToken = useSelector((store) => store.user.accessToken);
  // const items = useSelector((store) => store.todo.items)

    // useEffect(() => {
  //   if (!accessToken) {
  //     navigate("/login");
  //   }
  // }, []);

// byt ut items.lengt till ListCards....
// ListCards item > 0 -> ListViews
// ListCards item < 1 -> StartState
  
  return (
    <>
      {items.length > 0 && <ListView />}
      {items.length < 1 && <StartState />}
    </>
  )
}