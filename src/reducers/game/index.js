import types from '../../action_types';

const initialState = {
  cells: [
    [{ cellid: 'col1_1', cellValue: '' }, { cellid: 'col1_2', cellValue: '' }, { cellid: 'col1_3', cellValue: '' }],

    [{ cellid: 'col2_1', cellValue: '' }, { cellid: 'col2_2', cellValue: '' }, { cellid: 'col2_3', cellValue: '' }],

    [{ cellid: 'col3_1', cellValue: '' }, { cellid: 'col3_2', cellValue: '' }, { cellid: 'col3_3', cellValue: '' }],
  ],
};

const playerReducer = (state = {}, action) => {
  switch (action.type) {
    case types.MARK_CELL:
      return { ...state, isActive: !state.isActive };
    case types.ADD_PLAYERS:
      return { ...state, playerId: action.payload.playerNewId, playerName: action.payload.name };
    default:
      return state;
  }
};

const cellMarker = (state = {}, action) => {
  switch (action.type) {
    case types.MARK_CELL: {
      if (state.cellid === action.payload && state.cellValue === '') {
        return { ...state, cellValue: action.activeGameMarker };
      }
      return state;
    }
    default:
      return state;
  }
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.MARK_CELL: {
      const activeGameMarker = (state.palyers.find(pl => pl.isActive) || {}).activeGameMarker || '';
      return {
        ...state,
        cells: state.cells.map(row => row.map(cell => cellMarker(cell, { ...action, activeGameMarker }))),
        players: state.players.map(player => playerReducer(player, { ...action, activeGameMarker })),
      };
    }

    default:
      return state;
  }
}
