import { useState } from 'react'
import './App.css'

type Board = {
  key: number;
  title: string;
};

function App() {
  const BOARDS: Board[] = [
    { key: 0, title: 'LSB' },
    { key: 1, title: 'PSJ' }
  ];

  let [boardPages, setBoardPages] = useState<Board[]>(BOARDS);
  let [selectedBoard, setSelectedBoard] = useState<Board | null>(null);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>게시판 만들기</h4>
      </div>

      {
        boardPages.map(function(item, i) {
          return (
            <div className="list" key={ item.key }>
              <h4>{item.title}</h4>
              <p onClick={ ()=> { setSelectedBoard(item); } }>
                목록 페이지 이동
              </p>
            </div>
          )
        })
      }

      { selectedBoard && <BoardList board={ selectedBoard } /> }
    </div>
  )
}

function BoardList(props: { board: Board }) {
  return (
    <>
      <div className="modal">
        <h4>{props.board.title} 게시판 목록</h4>
        <p>내용</p>
      </div>
    </>
  )
}

export default App;
