import { Link } from "react-router-dom";
type LinkProps = {
    to:string;
    text:string;
}
export default function AppLink ({to,text}: LinkProps){
    return <Link to={to} className="rounded-[10px] tracking-[1px] bg-green-600 py-[8px] px-[16px] font-sans text-[16px] font-[500] text-white hover:bg-green-700 transition">{text}</Link>
}