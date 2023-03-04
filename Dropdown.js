import { useState } from "react";

const Dropdown = (props) => {
    const [value , setValue] =useState('Select')
    const [showList, setShowList] = useState(false);

    const toggleShowList = () => {
        setShowList(true);
    }
    const changeValue = (item) => {
        setValue(item);
        setShowList(false);
    }

    return (
        <div className="dropdown">
            <div className="dropdown-container">
                <div className="select">
                    <span>{value}</span>
                </div>
                <div className="dropdown-arrow" onMouseOver={toggleShowList}>
                    <img src="https://cdn-user-icons.flaticon.com/91448/91448217/1677923999352.svg?token=exp=1677924900~hmac=0f3d7c7f11e3e9f0d43548a96876f7e6" alt="drop"/>
                </div>
                {showList 
                ? 
                    <div className="dropdown-list">
                        <ul>
                            {props.list.map((item) => <li className="list-item" onClick={()=>changeValue(item)} >{item}</li>)}
                        </ul>
                    </div>
                : null
                }           
            </div>
            
        </div>
    );
}

export default Dropdown;
