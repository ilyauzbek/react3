import React , { useState} from 'react'
import './App.css'
import sound from '/srukan.mp3'

const App = () => {

  const [num, setNum] = useState(0)
  const [text, setText] = useState('')
  const [img, setImg] = useState()

  console.log(num);

  const minus = () => {
    if(num > 0) {
      setNum(num - 1)
    }

  }
  const plus = () => {
    if(num < 20) {
      setNum(num + 1)
    }
    
  }

  const openImgPlaySound = () => {
    setImg(!img)
    const audio = new Audio(sound)
    audio.play()
  }


  return (
    <>

    <div className="box">
      <h2>{num}</h2>
      <button onClick={plus}>Добавить число</button>
      <button onClick={minus}>Убавить число</button>
      <button onClick={() => setNum(0)}>Обнулить число</button>
      {/* <button onClick={() => setNum(num * 2)}>Умножить на 2 число</button> */}
    </div>




    <div className="shbox">
     <h4>{text}</h4>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
    </div>



    <div className="box">
      <button onClick={openImgPlaySound}>Click on me!!!!</button>
      {img && <img onClick={() => setImg(false)} src='https://anticollector.ua/attachments/71807/'/>}
    </div>
    </>
  )
}

export default App