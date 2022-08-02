import { fireEvent, render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Login from "../pages/login";

test("renders the login button", async () => {
  const { getByText } = render(<Login />);
  await waitFor(() => {
    const node = getByText("Login");
    expect(node).toBeInTheDocument();
  });
});

test("shows an error if the login form is submitted without adding the email address", async () => {
  const { getByText } = render(<Login />);
  fireEvent.click(getByText("Login"));
  await waitFor(() => {
    expect(getByText("Please enter your email")).toBeInTheDocument();
  });
});
