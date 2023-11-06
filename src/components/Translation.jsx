import { Letters } from "../logic/Letras"

export function Translation ({ text }) {

  if (text !== '') { //grid-cols-10
    return (
      <div className=" grid grid-flow-row gap-2 grid-cols-12 overflow-y-auto"> 
        
        {[...text].map( (letter, num) => 
          <>
            <img className="" src={`/images/${Letters[letter][0]}`} width={500} height={500} key={`0${letter}${num}${Letters[letter][0]}`}/>
            <img className="" src={`/images/${Letters[letter][1]}`} width={500} height={500} key={`1${letter}${num}${Letters[letter][1]}`}/>
            <img className="" src={`/images/${Letters[letter][2]}`} width={500} height={500} key={`2${letter}${num}${Letters[letter][2]}`}/>
          </>
          
        )}
      </div>
    )
  } else {
    return (
      <div className=" grid grid-flow-row gap-2 grid-cols-10 overflow-y-auto"></div>
    )
  }

}