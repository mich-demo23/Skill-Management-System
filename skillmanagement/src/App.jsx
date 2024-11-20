
import Navbar from "./pages/navbar";
import Dashboard from "./pages/dashboard"
import Skills from "./pages/skills"
import Employees from "./pages/employees" 
import ErrorPage from "./pages/errorhandler/error";


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App(){


  const route = createBrowserRouter(
    [
      {
        path: "",
        element:(
          <Navbar />
        ),
        errorElement: <ErrorPage />,
        children: [
          {path:'/home', element: (<Dashboard />), errorElement: <ErrorPage />},
          {path:'/skills', element: (<Skills />), errorElement: <ErrorPage />},
          {path:'/user', element: (<Employees />), errorElement: <ErrorPage />}

        ],
        
      },

    ]
  )

  return(
    <>
    <div>
    <RouterProvider router={route} />
    
    {/* <Navbar /> */}
    </div>
      
    </>
  )
}

export default App