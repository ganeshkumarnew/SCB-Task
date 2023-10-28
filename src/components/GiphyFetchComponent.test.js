import { render, fireEvent, screen,waitFor} from "@testing-library/react";
import GiphyFetchComponent from "./GiphyFetchComponent"
import Input from "../libs/Input";
//test block
test("Clicks the Trending Event", async () => {
// render the component on virtual dom
render(<GiphyFetchComponent />);
const trending = screen.getByTestId("trending");
fireEvent.click(trending);
});

test("checks the input onchange event", () =>{
    render(<GiphyFetchComponent />);
    const input = screen.getByTestId('searchInput')
    fireEvent.change(input, {
      target: {
        value: 'This is a test! 🤓',
      },
    })
    expect(input).toBeTruthy();
});