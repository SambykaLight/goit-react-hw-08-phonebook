export const getIsLoggedIn = state => state.auth.isLoggedIn;
export const getUsername = state => state.auth.user.name;
export const selectIsRefreshing = state => state.auth.isRefreshing;


 const authSelectors = {
    getIsLoggedIn,
    getUsername,
    selectIsRefreshing
};

export default authSelectors;