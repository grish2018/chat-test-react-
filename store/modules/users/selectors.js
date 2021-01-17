export const usersSelector = (state) => state.users.users;
export const isUsersFetchedSelector = (state) => state.users.isUsersFetching;
export const currentUserSelector = (state) => state.users.currentUser;
export const isCurrentUserFetchedSelector = (state) => state.users.isCurrentUser;