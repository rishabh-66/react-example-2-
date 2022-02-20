import React from 'react'
import Card from '../UI/Card'


const UserList = (props) => {
  return (
      <Card className='users'>
    <ul className='users_ul'>
        {props.users.map((user) => (
            <li className='users_li'>
                {user.uName}
                ( {user.uAge})
            </li>
            
        ))}
    </ul>
    </Card>
  )
}

export default UserList