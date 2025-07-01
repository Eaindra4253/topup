import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "../components/layouts/AppLayout";
import { HomePage } from "../components/pages/home/HomePage";
import ConfirmationTransaction from "../components/pages/confirmation/ConfirmTransaction";
 import { TransactionResult } from "../components/pages/transaction/TransactionResult";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    // errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "*",
        element: <>Page Not Found</>,
      },
      {
        path: "confirm-transaction",
        element: <ConfirmationTransaction />,
      },
      {
        path: "transaction-result",
        element: <TransactionResult />,
      },
    ],
  },
]);
