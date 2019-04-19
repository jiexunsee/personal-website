// Action creator
export const selectPart = part => {
  // return an action
  return {
    type: 'PART_SELECTED',
    payload: part
  };
};

export const mouseOverInterest = interest => {
  return {
    type: 'INTEREST_SELECTED',
    payload: interest
  };
};
