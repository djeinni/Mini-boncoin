export default function annonceReducer(state = [], action) {
    switch (action.type) {
        case "CREATE_ANNONCE":
            return [...state, { ...action.annonce }];
        default:
            return state;
    }
}