import React, { useEffect, useState } from 'react'
import BackspaceIcon from '@mui/icons-material/Backspace';
import AddCommentIcon from '@mui/icons-material/AddComment';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';

const TodoList = () => {
  const [Data, setData] = useState({Name:""})
  const [AllData, setAllData] = useState([])
    const [Error, setError] = useState({})

    useEffect(()=>{
      let todoname = JSON.parse(localStorage.getItem("TodoName"))
      setAllData(todoname)
    },[])
    const changehandle=(e)=>{
        setData({...Data,[e.target.name]:e.target.value})
    }
    const clickHandle=(e)=>{
      e.preventDefault()
      if (verify()) {
        let localData =[]
        localData = AllData.concat(Data)
        localStorage.setItem("TodoName",JSON.stringify(localData))
        setAllData(localData)
        setData({Name:''})
        }
        
        }
        const DeleteHandle=(e,i)=>{
          let localData =  [...AllData]
          localData.splice(i,1)
          localStorage.setItem("TodoName",JSON.stringify(localData))
          setAllData(localData)
          }
          const verify=()=>{
            let localError = {}
            let valid = true
            if (!Data.Name) {
              localError.Name = "!Please enter item"
              valid = false
              }
              setError(localError)
              return valid
              }
              console.log('akibbbbbbbbbbbbbbbb');
              return ( 
                <div className='main d-flex justify-content-center  mt-5' >
    <div className=' border border-secondary-2 pb-3 p-3 pt-0 bg-secondary rounded-2' style={{width:"32rem"}}>   
     <div className='d-flex flex-column justify-content-center mt-5'>
        <h1 className='text-center bg-secondary text-light rounded-2'>Todo List</h1>
        <form className="d-flex w-100 needs-validation"novalidate>
        <input className="form-control  p-2 w-100"  placeholder='type here...'  value={Data.Name} name='Name' onChange={changehandle}id="validationCustom01"   /> 
        <Tooltip title="Add"> <button className="btn btn-dark ms-1  " type="submit" onClick={clickHandle}><AddCommentIcon/></button></Tooltip>
      </form>
        {Error && <span className='text-danger'>{Error.Name}</span>}

    </div>
    { AllData.map((e,i)=>{
        return(
            <center>
            <ol  className="list-group  w-75  ">
              <li key={i} className="mt-2 fw-5 fs-5  d-flex gap-4 list-group-item list-group-item-action bg-dark text-light justify-content-between"> {i+1}) {e.Name} 
              <Tooltip key={i} title="Remove"> <Button variant="contained" color="error" onClick={()=>{DeleteHandle(e,i)}}><BackspaceIcon/></Button></Tooltip></li>
            </ol>
            </center>
        )
    })

        }
        </div>
        </div>
  )
}

export default TodoList