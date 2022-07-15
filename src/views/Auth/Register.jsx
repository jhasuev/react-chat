import Button from '@mui/material/Button'
import { Link } from "react-router-dom"

function Register() {
  return (
    <div>
      Register page
      <Link to="/auth/login">
        <Button>
          Go to Login page
        </Button>
      </Link>
    </div>
  );
}

export default Register;
