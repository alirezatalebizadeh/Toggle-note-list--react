import React, { useState, useMemo, memo, useCallback, useRef, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import NoteListToggle from './NoteListToggle';
import './App.css'



function App() {

  return (
    <div>
      <NoteListToggle />
    </div>
  );
}


export default App;
