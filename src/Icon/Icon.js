import {FaRegCircle,FaPen,FaTimes} from "react-icons/fa";

const Icon = ({choice})=>
{
    // switch(choice){
    //     case "circle": return <FaRegCircle/>
    //     case "cross": return <FaTimes/>
    //     default: return <FaPen/>
    // }
    if(choice == "circle")
    {
        return <FaRegCircle/>
    }
    else if(choice == "cross")
    {
        return <FaTimes/>
    }
    else
    {
        return <FaPen/>
    }
}

export default Icon;