import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, addUser } from "../store";
import useThunk from "../hooks/use-thunk";
import Button from "./Button";
import Skeleton from "./Skeleton";
import UsersListItem from "./UsersListItem";

function UsersList() {
    const dispatch = useDispatch();

    const [doFetchUsers, isLoadingUsers, loadingUsersError] = useThunk(fetchUsers);
    const [doAddUser, isCreatingUser, creatingUserError] = useThunk(addUser);


    const { data } = useSelector((state) => state.users);

    useEffect(() => {
        doFetchUsers();
    }, [doFetchUsers]);

    let content;
    if (isLoadingUsers) {
        content = <Skeleton times={6} className="h-10 w-full" s />;
    }
    else if (loadingUsersError) {
        content = <div>Error fetching data...</div>;
    }
    else {
        content = data.map((user) => {
            return <UsersListItem key={user.id} user={user} />;
        });
    }


    return (
        <div>
            <div className="flex flex-row justify-between items-center m-3">
                <h1 className="text-xl m-2">Users</h1>
                <Button loading={isCreatingUser} primary onClick={doAddUser}>
                    + Add User
                </Button>
                {creatingUserError && <div>Error creating user...</div>}
            </div>
            {content}
        </div>
    );
}

export default UsersList;