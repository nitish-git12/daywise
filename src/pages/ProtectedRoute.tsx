import { Navigate } from "react-router-dom";

type ProtectedRouteProp={
    isAuthenticated:boolean;
    children:React.ReactNode;
}
export default function ProtectedRoute({isAuthenticated, children}: ProtectedRouteProp){
    
        if(!isAuthenticated){
            return <Navigate to="/login" replace />
        }
        return <>{children}</>;
    
}