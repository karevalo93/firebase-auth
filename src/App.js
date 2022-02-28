import { Container } from "reactstrap";
import AuthProvider from "./auth/AuthProvider";
import AppRouter from "./routes/AppRouter";


function App() {
  return (
    <Container fluid className="p-0">
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </Container>
  );
}

export default App;
