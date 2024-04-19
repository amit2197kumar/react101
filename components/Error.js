import {useRouteError, Link} from 'react-router-dom';

const Error = () => {
  const error = useRouteError();
  return (
    <div className="error-page">
      <h1>
        {error.status} - {error.statusText}
      </h1>
      <h2>{error.data}</h2>
      <Link to="/">Go back to HOME</Link>
    </div>
  );
}

export default Error;