import MyForm from './MyForm';


const Popup = ({ handleClose }) => {

    return (
        <div className="popup-box">
            <div className="box">
                <div className="close-icon" onClick={handleClose}>x</div>
                <MyForm handleClose={handleClose } />
            </div>
        </div>
    );
};

export default Popup;