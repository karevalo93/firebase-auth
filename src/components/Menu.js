import { Link, useHistory } from 'react-router-dom'
import { Button, Nav, Navbar, NavItem } from 'reactstrap'
import useAuth from '../auth/useAuth'
import { logout } from '../firebase-config'

export default function Menu() {

    const history = useHistory()
    const auth = useAuth()

    const handleLogout = () =>{
        logout()
        history.push("/")
    }

    return (
        <Navbar
        color="dark"
        >
            <Nav >

                <NavItem>
                    <Link className="nav-link" to="/">Home</Link>
                </NavItem>

                {auth.user ?
                    <>
                        <NavItem>
                            <Link className="nav-link" to="/admin">Admin</Link>
                        </NavItem>
                        <NavItem>
                            <Link className="nav-link" to="/secret">Secret</Link>
                        </NavItem>
                    </>
                    :
                    <NavItem>
                        <Link className="nav-link" to="/login">Login</Link>
                    </NavItem>
                }
            </Nav>

            {auth.user ?
                <Button color="danger" onClick={handleLogout}>Logout</Button>
                :
                <span></span>
            }

        </Navbar>
    )
}
