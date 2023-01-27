import React from "react";

import "@testing-library/jest-dom";

import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import LoginPage from "pages/login/login.page";

describe("LoginPage", () => {
  afterEach(cleanup);

  it("renders the email input field", () => {
    render(<LoginPage />);
    const emailInput = screen.getByLabelText("Email Address *");
    expect(emailInput).toBeInTheDocument();
  });

  it("renders the password input field", () => {
    render(<LoginPage />);
    const passwordInput = screen.getByLabelText("Password *");
    expect(passwordInput).toBeInTheDocument();
  });

  it("renders the 'Remember me' checkbox", () => {
    render(<LoginPage />);
    const checkbox = screen.getByLabelText("Remember me");
    expect(checkbox).toBeInTheDocument();
  });

  it("renders the 'Sign in' button", () => {
    render(<LoginPage />);
    const button = screen.getByText("Sign in");
    expect(button).toBeInTheDocument();
  });

  it("opens the Forgot Password modal when the 'Forgot password?' link is clicked", () => {
    render(<LoginPage />);
    const link = screen.getByText("Forgot password?");
    fireEvent.click(link);
    // Assert that the modal is open by checking if the ForgotPasswordPage component is rendered
    // or check if the modalIsOpen state is true
  });

  it("submits the form when the 'Sign in' button is clicked", () => {
    render(<LoginPage />);
    const button = screen.getByText("Sign in");
    fireEvent.submit(button);
    // Assert that the handleSubmit function is called
  });
});
