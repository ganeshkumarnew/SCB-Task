import { render, fireEvent, screen } from "@testing-library/react";
import TrendingComponent from "./TrendingComponent"

//test block
test("Clicks the Trending Event", () => {
// render the component on virtual dom
render(<TrendingComponent />);
const backToSearch = screen.getByTestId("backToSearch");
fireEvent.click(backToSearch);

});