const INITIAL_STATE = [
  {
    id: 1,
    source: "/images/TsarsPalace.jpg",
    name: "Tsar's Palace",
    breakpoint: 22,
    payout: [5,3,2]
  }
]

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    default:
      return state;
  }
};
