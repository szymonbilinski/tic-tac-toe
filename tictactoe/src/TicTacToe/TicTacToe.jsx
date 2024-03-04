import React, {useState} from 'react';
import './TicTacToe.css';
import cross_icon from '../Components/Assets/cross.png'
import circle_icon from '../Components/Assets/circle.png'
import { useRef } from 'react';

let data = ["","","","","","","","",""];
export const TicTacToe = () => {

    let [count,setCount] = useState(0);
    let [lock,setLock] = useState(false);
    let titleRef = useRef(null); 
    let box1 = useRef(null);
    let box2 = useRef(null);
    let box3 = useRef(null);
    let box4 = useRef(null);
    let box5 = useRef(null);
    let box6 = useRef(null);
    let box7 = useRef(null);
    let box8 = useRef(null);
    let box9 = useRef(null);
    let the_one_who_won = "circle";

    let box_arr = [box1,box2,box3,box4,box5,box6,box7,box8,box9];
    
    const toggle = (e,num) =>{
        if(lock) 
        {
            return 0;
        }
        if(count%2===0)
        {
            e.target.innerHTML = `<img src = '${cross_icon}'>`;
            data[num]="x";
            setCount(++count);
            the_one_who_won = "x";
        }
        else
        {
            e.target.innerHTML = `<img src = '${circle_icon}'>`;
            data[num]="O";
            setCount(++count);
            the_one_who_won = "O";
        }
        if(count>=9){
            the_one_who_won = "OX";
            won(data);
        }
        check_win();
    }

    const check_win = () =>{
        if(data[0]===data[1]&&data[1]===data[2]&&data[2]!=="")
        {won(data);}

        else if(data[3]===data[4]&&data[4]===data[5]&&data[5]!=="")
        {won(data);}

        else if(data[6]===data[7]&&data[7]===data[8]&&data[8]!=="")
        {won(data);}


        else if(data[0]===data[3]&&data[3]===data[6]&&data[6]!=="")
        {won(data);}

        else if(data[1]===data[4]&&data[4]===data[7]&&data[7]!=="")
        {won(data);}

        else if(data[2]===data[5]&&data[5]===data[8]&&data[8]!=="")
        {won(data);}


        else if(data[0]===data[4]&&data[4]===data[8]&&data[8]!=="")
        {won(data);}

        else if(data[2]===data[4]&&data[4]===data[6]&&data[6]!=="")
        {won(data);}
    }
    
    const won = (winner) => {
        setLock(true);
        if(the_one_who_won==="x")
        {titleRef.current.innerHTML = `Congrats <img src = '${cross_icon}'>`;}
        else if(the_one_who_won==="O")
        {titleRef.current.innerHTML = `Congrats <img src = '${circle_icon}'>`;  }
        else
        {titleRef.current.innerHTML = `Dang it its a draw.`}
    }

    const reset = () =>{
        setLock(false);
        setCount(0);
        data = ["","","","","","","","",""];
        titleRef.current.innerHTML = `Tic Tac Toe the board game.`;
        box_arr.map((e)=>{
            e.current.innerHTML = "";
        })
    }

  return (
    <div className='container'>
        <h1 className='title' ref={titleRef}>Tic Tac Toe the board game.</h1>
        <div className='board'>
            <div className='row1'>
                <div className='boxes' ref={box1} onClick={(e)=>{toggle(e,0)}}></div>
                <div className='boxes' ref={box2} onClick={(e)=>{toggle(e,1)}}></div>
                <div className='boxes' ref={box3} onClick={(e)=>{toggle(e,2)}}></div>
            </div>
            <div className='row2'>
                <div className='boxes' ref={box4} onClick={(e)=>{toggle(e,3)}}></div>
                <div className='boxes' ref={box5} onClick={(e)=>{toggle(e,4)}}></div>
                <div className='boxes' ref={box6} onClick={(e)=>{toggle(e,5)}}></div>
            </div>
            <div className='row3'>
                <div className='boxes' ref={box7} onClick={(e)=>{toggle(e,6)}}></div>
                <div className='boxes' ref={box8} onClick={(e)=>{toggle(e,7)}}></div>
                <div className='boxes' ref={box9} onClick={(e)=>{toggle(e,8)}}></div>
            </div>
        </div>
    
    <button className='resetbutton' onClick={() =>{reset()}}>New Game</button>
    </div>
  )
}
export default TicTacToe