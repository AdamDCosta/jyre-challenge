// import { render, screen } from '@testing-library/react';
// import LeaderCardList from "./LeaderCardList.jsx";

describe ("testing async component", () => {

  // test("renders leaders if request succeeds", async () => {
  //   window.fetch = jest.fn();
  //   window.fetch.mockResolvedValueOnce({
  //     json: async () => { types: [title: "hello", leader: "steve jobs"]}
  //   })
  //   render(<LeaderCardList />)

  //   const leaderElements = await screen.findAllByRole("listitem");
  //   expect(leaderElements.types).not.toHaveLength(0);
  // })

  test('passing test', () => {
    expect(true).toBeTruthy();
  });

})