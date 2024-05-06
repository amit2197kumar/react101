import {useRouteError, Link} from 'react-router-dom';

const Error = () => {
  const error = useRouteError();
  return (
    <div className="m-10 p-10 text-xl bg-yellow-200 text-center rounded-2xl">
      <h1 className='font-bold'>
        {error.status} - {error.statusText}
      </h1>
      <h2 >{error.data}</h2>
      <Link to="/">Go back to HOME</Link>
    </div>
  );
}

export default Error;