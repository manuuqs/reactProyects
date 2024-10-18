/* eslint-disable react/react-in-jsx-scope */
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { useStore } from './hooks/useStore';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { AUTO_LANGUAGE } from './constants';
import { ArrowsIcon } from './components/icons';
import { LanguageSelector } from './components/LaguagerSelector';
import { SectionType } from './types.d';
import { TextArea } from './components/TextArea';

function App() {

  const {fromLanguage, toLanguage, interchangeLanguages, setFromLanguage, setToLanguage, fromText, setFromText, loading, result, setResult} = useStore()

  return (
    <Container fluid>
      <h1>Google Translate</h1>

      <Row>
        <Col >
          <LanguageSelector onChange={setFromLanguage} type={SectionType.From} value={fromLanguage}/>
          <TextArea
              type={SectionType.From}
              value={fromText}
              onChange={setFromText}
            />
        </Col>

        <Col xs='auto'>
          <Button variant='link' disabled={fromLanguage === AUTO_LANGUAGE} onClick={interchangeLanguages}>
          <ArrowsIcon />
          </Button>
        </Col>

        <Col>
        <LanguageSelector onChange={setToLanguage}  type={SectionType.To} value={toLanguage}/>
        <TextArea
              loading={loading}
              type={SectionType.To}
              value={result}
              onChange={setResult}
            />
        </Col>
      </Row>
    </Container>
  )
}

export default App
