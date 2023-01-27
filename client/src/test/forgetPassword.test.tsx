import React from "react";

import "@testing-library/jest-dom";

import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import ForgotPasswordPage from "pages/forgetpassword/forgetpassword.page";

describe("ForgotPasswordPage", () => {
  afterEach(cleanup);

  test("renders modal when isOpen prop is true", () => {
    render(<ForgotPasswordPage isOpen={true} onClose={() => {}} />);
    const textfield = screen.queryByRole("heading");
    expect(textfield).toBeInTheDocument();
    expect(textfield).toHaveTextContent("Forget Password?");
  });

  test("does not render modal when isOpen prop is false", () => {
    render(<ForgotPasswordPage isOpen={false} onClose={() => {}} />);
    expect(screen.queryByRole("heading")).not.toBeInTheDocument();
  });

  test("calls onClose callback when close icon button is clicked", () => {
    const onClose = jest.fn();
    render(<ForgotPasswordPage isOpen={true} onClose={onClose} />);
    fireEvent.click(screen.getByTestId("CloseOutlinedIcon"));
    expect(onClose).toHaveBeenCalled();
  });

  test("form has required email input field", () => {
    render(<ForgotPasswordPage isOpen={true} onClose={() => {}} />);
    expect(screen.getByLabelText("Email Address *")).toBeRequired();
  });

  test("submits the form when the 'Send My Password' button is clicked", () => {
    render(<ForgotPasswordPage isOpen={true} onClose={() => {}} />);
    const button = screen.getByText("Send My Password");
    fireEvent.submit(button);
  });
});
