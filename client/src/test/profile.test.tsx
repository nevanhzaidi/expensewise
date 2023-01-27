import React from "react";

import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";
import ProfilePage from "pages/profile/profile.page";

describe("ProfilePage", () => {
  test("renders the user first name", () => {
    render(<ProfilePage />);
    expect(screen.getByLabelText("First Name")).toHaveValue("User");
  });

  test("renders the user last name", () => {
    render(<ProfilePage />);
    expect(screen.getByLabelText("Last Name")).toHaveValue("1");
  });

  test("renders the user email", () => {
    render(<ProfilePage />);
    expect(screen.getByLabelText("Email")).toHaveValue("123@gmail.com");
  });

  test("renders the user phone number", () => {
    render(<ProfilePage />);
    expect(screen.getByLabelText("Phone No")).toHaveValue("123409809-");
  });

  test("renders the user dob", () => {
    render(<ProfilePage />);
    expect(screen.getByLabelText("Dob")).toHaveValue("28-Aug-2022");
  });

  test("renders the user country", () => {
    render(<ProfilePage />);
    expect(screen.getByLabelText("Country")).toHaveValue("Pakistan");
  });

  test("renders the address country", () => {
    render(<ProfilePage />);
    expect(screen.getByLabelText("Address")).toHaveValue(
      "daf csKDjfwrijg oidj voierhg",
    );
  });
});
