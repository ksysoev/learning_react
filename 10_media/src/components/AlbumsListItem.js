import ExpandablePanel from "./ExpandablePanel";
import PhotoList from "./PhotosList";
import Button from "./Button";
import { GoTrashcan } from "react-icons/go";
import { useRemoveAlbumMutation } from "../store";

function AlbumsListItem({ album }) {
    const [removeAlbum, results] = useRemoveAlbumMutation();

    const handleRemoveAlbum = () => {
        removeAlbum(album);
    }

    const header = <>
        <Button className="mr-3" loading={results.isLoading} onClick={handleRemoveAlbum}>
            <GoTrashcan />
        </Button>
        {false && <div>Error removing user...</div>}
        {album.title}
    </>

    return <ExpandablePanel header={header}>
        <PhotoList album={album} />
    </ExpandablePanel>;
}

export default AlbumsListItem;