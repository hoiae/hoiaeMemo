import {Outlet} from 'react-router-dom'
import Header from '../compoents/commons/Header';
import {NavLink} from 'react-router-dom';

function Main(){

    // <div className="mainStyle">
    //         <NavLink to="/board"><img alt="" src={'./memo.png'}/></NavLink>
    //  </div>


    return(
        <div className='outerStyle'>
            <div className='mainBoxStyle'>
                <NavLink className="nav" to="/board"><div className='mainfontSize'>hoiae Memo</div></NavLink>
            </div>
        </div>
       
    );
}

export default Main;