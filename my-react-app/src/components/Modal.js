function Modal(props){
    function cancelHandler(){
        props.onCancel()
    }  
    function confirmHandler(){
        props.onConfirm()
    }
return(
    <div>
        <h1 className="modal">Are you sure</h1>
        <button className="btn btn--alt" onClick={cancelHandler}>cancel</button>
        <button className="btn" onClick={confirmHandler}>Confirm</button>
    </div>
)
}
export default Modal