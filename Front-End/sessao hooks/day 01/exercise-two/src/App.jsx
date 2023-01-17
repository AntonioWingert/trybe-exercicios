import { useEffect, useState } from 'react'
import './App.css'

const emailsList = [
  {
id: 1,
title: "Título do email - 1",
status: 0
  },
  {
id: 2,
title: "Título do email - 2",
status: 0
  },
  {
id: 3,
title: "Título do email - 3",
status: 0
  }
]


function App() {
  const [emails, setEmails] = useState([])

  useEffect(() => {
    setEmails(emailsList);
  }, [])

  useEffect(() => {
    const allEmailsRead = emails.every(({status}) => status === 1)

    if (allEmailsRead) {
      alert('Todos os emails foram lidos.')
    }
  }, [emails])

  const setEmailRead = (id) => {
    const readEmail = emails.map((email) => email.id === id ? {...email, status: 1} : email)
    setEmails(readEmail)
  }

   const setEmailUnread = (id) => {
    const unreadEmail = emails.map((email) => email.id === id ? {...email, status: 0} : email)
    setEmails(unreadEmail)
  }

  const setAllEmailsRead = () => {
    const readEmails = emails.map((email) => ({...email, status: 1}))
    setEmails(readEmails)
  }

  const setAllEmailsUnread = () => {
    const unreadEmails = emails.map((email) => ({...email, status: 0}))
    setEmails(unreadEmails)
  }

  return (
    <div className="App">
      <button onClick={() => setAllEmailsRead()}> Marcar todos como lidos </button>
      <button onClick={() => setAllEmailsUnread()}>Marcar todos como não lidos</button>

     {emails.map((email) => (
      <div key={email.id}>
        <p>{email.title}</p>
        <button onClick={() => setEmailRead(email.id)}>Marcar como lido</button>
        <button onClick={() => setEmailUnread(email.id)}>Marcar como não lido</button>
      </div>
     ))}
    </div>
  )
}

export default App
