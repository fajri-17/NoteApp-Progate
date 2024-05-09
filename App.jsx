import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/screens/Home';
import EditNote from './src/screens/EditNote';
import AddNote from './src/screens/AddNote';

const CurrentPageWidget = ({ currentPage, setCurrentPage, noteList, addNote }) => {
  switch(currentPage) {
    case 'home':
      return <Home noteList={noteList} setCurrentPage={setCurrentPage} />
    case 'edit':
      return <EditNote setCurrentPage={setCurrentPage} />
    case 'add':
      return <AddNote setCurrentPage={setCurrentPage} addNote={addNote} />
    default:
      return <Home noteList={noteList} setCurrentPage={setCurrentPage} />
  }
}

export default function App() {
  const [noteList, setNoteList] = useState([
    {
      id: 1,
      title: 'Note Pertama',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    },
  ]);
  const [currentPage, setCurrentPage] = useState('');

  const addNote = ({ title, desc }) => {
    const id = noteList.length > 0 ? noteList[noteList.length - 1].id + 1 : 1;

    const note = {
      id, title, desc,
    };

    setNoteList([ ...noteList, note ]);
  }

  return (
      <CurrentPageWidget
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        noteList={noteList}
        addNote={addNote}
      />
  );
}
