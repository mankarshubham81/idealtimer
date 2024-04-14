import { useState, Suspense } from 'react'
import './App.css'
import IdleTimerContainer from './components/IdleTimerContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';


function App() {
  const location = window.location.href;
  console.log("location", location); 

  return (
    <BrowserRouter>
            {/* <Suspense fallback={<div>Loading...</div>}> */}
                {!location.includes('/login') && <IdleTimerContainer />}

                <Routes>
                    <Route
                        path="/login"
                        element={<Login />}
                    />
                            <Route path="/" element={<Home />} />
                </Routes>
                    {/* <Routes>
                        <Route > */}
                            {/* <Route path="/customers" element={<Customers />} />
                            <Route path="/projects" element={<Projects />} />
                            <Route path="/tasks" element={<Tasks />} />
                            <Route
                                path="/servicehistory"
                                element={<ServiceHistory />}
                            />
                            <Route path="/assets" element={<Assets />} />
                            <Route path="/inventory" element={<Inventory />} />
                            <Route path="/mywork" element={<MyWork />} />
                            <Route
                                path="/administration"
                                element={<Administration />}
                            />
                            <Route
                                path="/scheduler"
                                element={<SchedulerPage />}
                            />
                            <Route path="/expenses" element={<Expenses />} /> */}
                        {/* </Route>
                    </Routes> */}
            {/* </Suspense> */}
        </BrowserRouter>
    // <>
    // {!location.includes('/login') && <IdleTimerContainer />}
    //   <h1>Yo chaitnya don</h1>
    // </>
  )
}

export default App
