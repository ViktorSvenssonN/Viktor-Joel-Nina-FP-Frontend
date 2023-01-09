import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import WithHeader from './WithHeader'
import { API_URL } from 'utils/utils'
import { useNavigate } from 'react-router-dom'

// Components
import ListView from './ListView'
import StartState from './StartState'

const Start = () => {
  const accessToken = useSelector((store) => store.user.accessToken);
  const id = useSelector((store) => store.user.id);
  const [birthdays, setBirthdays] = useState([])
  const navigate = useNavigate()
  // const items = useSelector((store) => store.todo.items)

    useEffect(() => {
    if (!accessToken) {
      navigate("/login");
    }
  }, []);

  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": accessToken
    },
  };

  const fetchBirthday = () => {
 /*    setLoading(true); */
    fetch(API_URL(`all-birthdays/${id}`), options)
      .then((res) => res.json())
      .then((data) => setBirthdays(data))
      .catch((error) => console.error(error))
/*       .finally(() => setLoading(false)); */
  }

  useEffect(() => {
    fetchBirthday();
  }, [])

// byt ut items.lengt till ListCards....
// ListCards item > 0 -> ListViews
// ListCards item < 1 -> StartState
  
  return (
    <>
    {/* <div>
      <p>Hej!</p>
    </div> */}
          
    {birthdays.length > 0 && <ListView birthdays={birthdays} />}
    {birthdays.length < 1 && <StartState />}

    </>
  )
}

export default Start;