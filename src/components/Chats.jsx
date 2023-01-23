import React from 'react'

const Chats = () => {
  return (
    <div className='chats'>
        <div className='userChat'>
      <img src='https://media.istockphoto.com/id/178640157/photo/halloween-monster.jpg?s=612x612&w=0&k=20&c=8bXRPczSeB9Vmi4sZHHRUUO7wgfDpwEkniuO-_puhRs=' alt='' />
      <div className="userChatInfo"><span>Jane</span>
      <p>Hello World</p>
      
      </div>
      </div>
        <div className='userChat'>
      <img src='data:image/jpeg;base64,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' alt='' />
      <div className="userChatInfo"><span>Tommy</span>
      <p>Hello World</p>
      
      </div>
      </div>
        <div className='userChat'>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUa5Yc_0RQDyy-gJ4-wTQSf1aXcFSxY-_IlQ&usqp=CAU' alt='' />
      <div className="userChatInfo"><span>Roberto</span>
      <p>What's up?</p>
      
      </div>
      </div>
        <div className='userChat'>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9VrYl8fwsmhbxNvIGi01ehMkOttCU8RKcew&usqp=CAU' alt='' />
      <div className="userChatInfo"><span>Anna</span>
      <p>How's it hanging?</p>
      
      </div>
      </div>
        <div className='userChat'>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy0NULRGZwXnYVNheF_tr_w5lwLlG2tOaSbw&usqp=CAU' alt='' />
      <div className="userChatInfo"><span>Keshon</span>
      <p>Hey</p>
      
      </div>
      </div>
    </div>
  )
}

export default Chats