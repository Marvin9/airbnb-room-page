import { guestsType } from './types';

export const guestsReducer = (state: guestsType, action): guestsType => {
  // to prevent exceding maximum guests
  const total = (state.adults ?? 0) + (state.children ?? 0);
  const { maxGuests, type } = action;

  const [ac, tp] = type.split('_');
  if (ac && tp && tp !== 'INFANTS') {
    if (ac === 'INCREMENT' && total + 1 > maxGuests) return state;
    if (ac === 'DECREMENT' && total - 1 <= 0) return state;
  }

  let minus;
  switch (type) {
    case 'INCREMENT_ADULT':
      return { ...state, adults: (state.adults ?? 0) + 1 };
    case 'DECREMENT_ADULT':
      minus = (state.adults ?? 0) - 1;
      if (minus < 0) return state;
      return { ...state, adults: minus };
    case 'INCREMENT_CHILDREN':
      return { ...state, children: (state.children ?? 0) + 1 };
    case 'DECREMENT_CHILDREN':
      minus = (state.children ?? 0) - 1;
      if (minus < 0) return state;
      return { ...state, children: minus };
    case 'INCREMENT_INFANTS':
      return { ...state, infants: (state.infants ?? 0) + 1 };
    case 'DECREMENT_INFANTS':
      minus = (state.infants ?? 0) - 1;
      if (minus < 0) return state;
      return { ...state, infants: minus };
    default:
      return state;
  }
};
