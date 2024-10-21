import { useAppDispatch } from "./store"
import { UserId, deleteUserById , addNewUser} from "../store/users/slice";


export const useUserActions = () => {
    const dispatch = useAppDispatch();

    const addUser = ({name, email, github}) => {
        dispatch(addNewUser({name, email, github}))
    }
   const  removeUser = (id: UserId) => {
        dispatch(deleteUserById(id));
    }

    return {addUser, removeUser}
};