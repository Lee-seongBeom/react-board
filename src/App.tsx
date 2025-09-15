import { useState } from 'react'
import './App.css'

function App() {
  let [boardList, setBoardList] = useState(false);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>게시판 만들기</h4>
      </div>

      <div className="list">
        <h4>LSB</h4>
        <p onClick={ ()=> { setBoardList(!boardList) } }>목록 페이지</p>
      </div>
      <div className="list">
        <h4>PSJ</h4>
        <p onClick={ ()=> { setBoardList(!boardList) } }>목록 페이지</p>
      </div>

      {
        boardList? <BoardList></BoardList> : null
      }
      
    </div>
  )
}

function BoardList() {
  return (
    <>
      <div className="modal">
        <h4>제목</h4>
        <p>내용</p>
      </div>
    </>
  )
}

export default App
