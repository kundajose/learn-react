import {useState} from 'react';
import Backdrop from "./Backdrop";
import Modal from "./Modal";

function Todo(props){
     // props: helps us to reuse components wherever
     let [modalIsOpen,setModalIsOpen]= useState(false);
    function deleteHandler(){
        setModalIsOpen(true)
        console.log('deleted');
        console.log(props.text)
    }
   function closeModalHandler(){
    setModalIsOpen(false)
   }
    return(
        <div className='card'>
      <h2>{props.text}</h2>
      <div className="actions">
      <button className="btn" onClick={deleteHandler}>Delete</button>
      </div>
      {modalIsOpen && ( 
      <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler}/>
      )}
      {modalIsOpen &&  <Backdrop onCancel={closeModalHandler}/>}
    </div>
    )

}
 
export default Todo;