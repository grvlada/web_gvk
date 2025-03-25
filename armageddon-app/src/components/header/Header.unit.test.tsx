import {fireEvent, render, screen, waitFor} from "@testing-library/react";
import {Header} from "./Header";
import {BrowserRouter} from "react-router-dom";

describe(" [components] Header", ()=>{
    beforeEach(()=> {
        // eslint-disable-next-line testing-library/no-render-in-setup
        render(<BrowserRouter><Header/></BrowserRouter>)
    })
    it("should contains common header html element", ()=>{
        const header = screen.getByRole("heading")
        expect(header).toBeInTheDocument();
        expect(header).toHaveTextContent("ARMAGEDDON V")
    });
    it("should contains links to asteroids and destroyment pages", ()=>{
        const links = screen.getByRole("link")
        expect(links[0]).toHaveAttribute("href", "/asteroids");
        expect(links[1]).toHaveAttribute("href", "/destroyment");
    });
    it("should contains button, after click on it should hide button and display input", ()=>{
        const button = screen.getByText("Unauthorized");
        expect(button).toBeInTheDocument();
        fireEvent.click(button);
        waitFor(()=> expect(button).not.toBeInTheDocument());
    });
})