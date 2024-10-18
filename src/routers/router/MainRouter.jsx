import React from "react";
import { useTheme } from "../../context/ThemeContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppRoutes from "../routes/AppRoutes";
import AppRouter from "./AppRouter";
import AuthRoutes from "../routes/AuthRoute";
import AuthRouter from "./AuthRouter";

const MainRouter = () => {
  const { theme } = useTheme();
  console.log(theme);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/*"
            element={
              <AppRoutes>
                <AppRouter />
              </AppRoutes>
            }
          />
          <Route
            path="/auth/*"
            element={
              <AuthRoutes>
                <AuthRouter />
              </AuthRoutes>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default MainRouter;
