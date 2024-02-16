import { removeUser } from "../store";
import Button from "./Button";
import useThunk from "../hooks/use-thunk";
import { GoTrashcan } from "react-icons/go";
import ExpandablePanel from "./ExpandablePanel";
import AlbumsList from "./AlbumsList";

function UsersListItem({ user }) {
    const [doRemoveUser, isRemovingUser, removingUserError] = useThunk(removeUser);

    const header = (
        <>
            <Button className="mr-3" loading={isRemovingUser} onClick={() => doRemoveUser(user)}>
                <GoTrashcan />
            </Button>
            {removingUserError && <div>Error removing user...</div>}
            {user.name}
        </>
    );


    return <ExpandablePanel header={header}>
        <AlbumsList user={user} />
    </ExpandablePanel>;
}

export default UsersListItem;