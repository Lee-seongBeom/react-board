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
        selectedBoard === null? 
        (
          // 선택 페이지
          <BoardMain boardPages={boardPages} setSelectedBoard={setSelectedBoard} />
        ) 
        : 
        (
          // 목록 페이지
          <BoardList board={ selectedBoard } goMain={ ()=> setSelectedBoard(null) } /> 
        )
      }
    </div>
  )
}

type BoardListProps = {
  board: Board;
  goMain: ()=> void;
}

function BoardList(props: BoardListProps) {
  const { board, goMain } = props;

  return (
    <>
      <div className="modal">
        <h4>{board.title} 게시판 목록</h4>
        <button onClick={goMain}>뒤로가기</button>
        <p>내용</p>
      </div>
    </>
  )
}

type BoardMainProps = {
  boardPages: Board[];
  setSelectedBoard: (board: Board) => void;
};

function BoardMain(props: BoardMainProps) {
  const { boardPages, setSelectedBoard } = props;
  return (
    <>
      {
        boardPages.map(function(item, i) {
          return (
            <div className="list" key={ item.key }>
              <h4>{item.title}</h4>
              <p className="cursor-pointer" onClick={ ()=> { setSelectedBoard(item); } }>
                목록 페이지 이동
              </p>
            </div>
          )
        })
      }
    </>
  )
}

export default App;
