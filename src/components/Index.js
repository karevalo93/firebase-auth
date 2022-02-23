import useAuth from "../auth/useAuth"
import Loading from "./Loading"

export default function Index() {
    const auth = useAuth()
    return (
        <div className="row justify-content-start justify-content-sm-center justify-content-lg-end mt-5">
            <div className="col-auto">
                <h5>Welcome,
                    {
                        auth.user ? <text className="text-muted"> {auth.user.email}</text> 
                        :
                         <text className="text-muted"> stranger</text>
                    }
                </h5>
            </div>
        </div>
    )
}
