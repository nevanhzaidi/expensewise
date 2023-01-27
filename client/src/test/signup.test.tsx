import React from "react";

import "@testing-library/jest-dom";

import { fireEvent, render, screen } from "@testing-library/react";
import SignupPage from "pages/signup/signup.page";

describe("SignupPage", () => {
  it("renders the first name input field", () => {
    render(<SignupPage />);
    const emailInput = screen.getByLabelText("First Name *");
    expect(emailInput).toBeInTheDocument();
  });

  it("renders the last name input field", () => {
    render(<SignupPage />);
    const emailInput = screen.getByLabelText("Last Name *");
    expect(emailInput).toBeInTheDocument();
  });

  it("renders the email input field", () => {
    render(<SignupPage />);
    const emailInput = screen.getByLabelText("Email Address *");
    expect(emailInput).toBeInTheDocument();
  });

  it("renders the password input field", () => {
    render(<SignupPage />);
    const emailInput = screen.getByLabelText("Password *");
    expect(emailInput).toBeInTheDocument();
  });

  it("renders the confirm password input field", () => {
    render(<SignupPage />);
    const emailInput = screen.getByLabelText("Confirm Password *");
    expect(emailInput).toBeInTheDocument();
  });

  it("should render a checkbox", () => {
    render(<SignupPage />);
    expect(
      screen.getByLabelText(
        "I want to receive inspiration, marketing promotions and updates via email.",
      ),
    ).toBeInTheDocument();
  });

  it("submits the form when the 'Sign in' button is clicked", () => {
    render(<SignupPage />);
    const button = screen.getByText("Sign Up");
    fireEvent.submit(button);
    // Assert that the handleSubmit function is called
  });
});
