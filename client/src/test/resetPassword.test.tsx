import React from "react";

import "@testing-library/jest-dom";

import { fireEvent, render, screen } from "@testing-library/react";
import ResetPasswordPage from "pages/resetpassword/resetpassword.page";

describe("ResetPasswordPage", () => {
  it("renders the reset password text field", () => {
    render(<ResetPasswordPage />);
    const textfield = screen.getByRole("heading");
    expect(textfield).toHaveTextContent("Reset Password");
  });

  it("renders the new password input field", () => {
    render(<ResetPasswordPage />);
    const passwordInput = screen.getByLabelText("New Password *");
    expect(passwordInput).toBeInTheDocument();
  });

  it("renders the confirm password input field", () => {
    render(<ResetPasswordPage />);
    const passwordInput = screen.getByLabelText("Confirm Password *");
    expect(passwordInput).toBeInTheDocument();
  });

  it("submits the form when the 'Reset Password' button is clicked", () => {
    render(<ResetPasswordPage />);
    const button = screen.getByRole("button");

    fireEvent.submit(button);
    // Assert that the handleSubmit function is called
  });
});
