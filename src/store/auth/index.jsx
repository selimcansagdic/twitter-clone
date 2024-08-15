import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentAccount: {
    id: 1,
    userName: "selimsagdic",
    fullName: "Selim Can Sağdıç",
    avatar: "https://pbs.twimg.com/profile_images/1703799130215088128/rxgmVTiP_400x400.jpg",
  },
  accounts: [
    {
      id: 1,
      userName: "selimsagdic",
      fullName: "Selim Can Sağdıç",
      avatar: "https://pbs.twimg.com/profile_images/1703799130215088128/rxgmVTiP_400x400.jpg",
    },
    {
      id: 2,
      userName: "elonmusk",
      fullName: "Elon Musk",
      avatar: "https://pbs.twimg.com/profile_images/1815749056821346304/jS8I28PL_400x400.jpg",
    },
  ],
};

const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    _addAccounts: (state, action) => {
      state.accounts.push(action.payload);
    },
    _removeAccounts: (state, action) => {
      state.accounts = state.accounts.filter((account) => account.id !== action.payload);
      if (state.currentAccount && action.payload === state.currentAccount.id) {
        this._setCurrentAccount(false);
      }
    },
    _setCurrentAccount: (state, action) => {
      state.currentAccount = action.payload;
    },
  },
});

export const { _addAccounts, _removeAccounts, _setCurrentAccount } = auth.actions;

export default auth.reducer;
