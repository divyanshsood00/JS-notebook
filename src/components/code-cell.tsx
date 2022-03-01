/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/iframe-has-title */
import './code-cell.css'
import {useEffect} from 'react'
import CodeEditor from "./code-editor";
import Preview from './preview'
import Resizable from './resizable'
import { Cell } from '../state';
import { useActions } from '../hooks/use-actions';
import { useTypedSelector } from '../hooks/use-typed-selector';
import { useCumulativeCode } from '../hooks/use-cumulative-code';

interface CodeCellProps{
  cell: Cell 
}

const CodeCell : React.FC<CodeCellProps>= ({cell}) => {
  const { updateCell,createBundle } = useActions()
  const bundlesss= useTypedSelector((state) => {
    return state.bundles[cell.id]
  })
  const cumulativeCode = useCumulativeCode(cell.id)
  // console.log(bundlesss);
  useEffect(()=> {
    if (!bundlesss){
      createBundle(cell.id,cumulativeCode)
      return;
    }
    const timer = setTimeout(async()=>{
      createBundle(cell.id,cumulativeCode)
    },1000)
    return ()=>clearTimeout(timer)
  },[cumulativeCode,cell.id,createBundle])

//   const handleClick = async()=>{
// }
  
  return( 
  <Resizable direction='vertical' >  
    <div style = {{height:'calc(100% - 10px)',display:'flex',flexDirection:'row'}}>
      <Resizable direction='horizontal'>
      <CodeEditor initialValue={cell.content} onChange={value=>{
        updateCell(cell.id,value);
      }} />
      </Resizable>
      {/* <textarea 
      value={input} 
      onChange={w=>setInput(w.target.value)}>
      </textarea> */}
      {/* <div><button style={{display:'none'}} onClick={handleClick}>Submit</button></div> */}
      {/* <pre>{code}</pre> */}
      <div className='progress-wrapper'>
      {
        !bundlesss || bundlesss.loading ?
          <div className='progress-cover'> <progress className='progress is-small is-danger' max='100'>Loading</progress></div>  
        : <Preview code={bundlesss.code} err={bundlesss.err} />
      }
        </div>

    </div>
  </Resizable>
  )
}


export default CodeCell


