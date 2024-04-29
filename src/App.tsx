import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap';
import { Routes, Route, Navigate } from 'react-router-dom'
import { v4 as uuidV4 } from 'uuid';
import NoteBuilder from './components/NoteBuilder';
import ToolsLayout from './components/ToolsLayout';
import { Navbar } from './components/Navbar';


function App() {
  return (

    <Container className='my-4'>
      <Navbar />
      <Routes>
        <Route path="/" element={<NoteBuilder />} />
        <Route path="/tools" element={<ToolsLayout />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Container>
  )
}

export default App
