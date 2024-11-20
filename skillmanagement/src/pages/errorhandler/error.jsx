import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  console.error(error);

  return (
    <>
    {/* <div className="flex flex-col justify-center items-center"> */}

    <div id="error-page" className=" mt-[20%]  h-[100%] flex flex-col justify-center w-[100%] text-2xl items-center *:p-3">
      <h1 className="font-bold text-6xl text-red-600">Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i className="text-3xl text-red-500">{error.statusText || error.message}</i>
      </p>
    {/* </div> */}
    </div>
    </>
  );
}