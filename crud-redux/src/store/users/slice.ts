import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const DEFAULT_STATE = [
	{
		id: "1",
		name: "Yazman Rodriguez",
		email: "yazmanito@gmail.com",
		github: "yazmanito",
	},
	{
		id: "2",
		name: "John Doe",
		email: "leo@gmail.com",
		github: "leo",
	},
	{
		id: "3",
		name: "Haakon Dahlberg",
		email: "haakon@gmail.com",
		github: "midudev",
	},
];
const initialState: UserWithId[] = (() => {
	const persistenceState = localStorage.getItem("_redux_state_");

	return persistenceState? JSON.parse(persistenceState).users : DEFAULT_STATE
})();

export type UserId = string;

export interface User {
	name: string;
	email: string;
	github: string;
}

export interface UserWithId extends User {
	id: UserId;
}

export const usersSlice = createSlice({
    name:"users",
    initialState,
    reducers: {
		addNewUser: (state, action: PayloadAction<User>) => {
			const id = crypto.randomUUID()
			return [...state, {id, ...action.payload}]
		},
		deleteUserById: (state, action:PayloadAction<UserId>) => {
			const id = action.payload
			return state.filter((user) => user.id != id)
		},
		rollbackUserById: (state, action: PayloadAction<UserWithId>) => {
			const isUserAlreadyDefined = state.some(user => user.id === action.payload.id)
			if (!isUserAlreadyDefined) {
				state.push(action.payload)
			}
		}	
	},
});

export default usersSlice.reducer;

export const {deleteUserById} = usersSlice.actions
export const {addNewUser} = usersSlice.actions
export const {rollbackUserById} = usersSlice.actions
