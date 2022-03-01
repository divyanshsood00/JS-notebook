import React from 'react'
import './action-bar.css'
import { useActions } from '../hooks/use-actions';
interface ActionBarProps{
  id: string;
}

const ActionBar:React.FC<ActionBarProps> = ({id}) => {
  const { moveCell, deleteCell} = useActions()
  return (
    <div className='action-bar'>
      <button className='button is-success  is-rounded  is-small' onClick={()=>moveCell(id,'up')}> <i className="fas fa-arrow-up"></i> </button>
      <button className='button is-warning  is-rounded is-small' onClick={()=>moveCell(id,'down')}> <i className="fas fa-arrow-down"></i>  </button>
      <button className='button is-danger  is-rounded is-small' onClick={()=>deleteCell(id)}><i className="fas fa-times" /> </button>
    </div> 
  )
}

export default ActionBar
