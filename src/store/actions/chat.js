export function selectUser(user) {
    return {
        type: 'SELECT_USER', //indica a ação que está sendo realizada (TEM QUE SER UNICA)
        user
    };
}