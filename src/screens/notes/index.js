import React, {useState} from 'react';
import HeaderLogged from '../../components/headerLogged';
import Notes from '../../components/notes';


const NotesScreen = () => {

  const [isOpen, setIsOpen] = useState (false)

  return(
    <>
    <HeaderLogged setIsOpen={setIsOpen}/>
    <Notes setIsOpen={setIsOpen} isOpen={isOpen} />
  </>
  )

     
}

export default NotesScreen