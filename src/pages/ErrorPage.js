import { Alert } from 'react-bootstrap';

function ErrorPage() {
    return (
      <>
        <main>
          <h1>An error occurred!</h1>
          <Alert variant='danger'>Could not find this page!</Alert>
        </main>
      </>
    );
  }
  
  export default ErrorPage;