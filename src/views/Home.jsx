import Button from '@mui/material/Button'
import { Link } from "react-router-dom"

function Home() {
  return (
    <div>
      Home page
        <Link to="/auth/register">
          <Button>
            Go to Register page
          </Button>
        </Link>
    </div>
  );
}

export default Home;
