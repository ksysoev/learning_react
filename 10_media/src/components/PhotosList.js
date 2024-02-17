import Button from "./Button";
import Skeleton from "./Skeleton";
import PhotosListItem from "./PhotosListItem";
import { useFetchPhotosQuery, useAddPhotoMutation } from "../store";

function PhotoList({ album }) {
    const { data, error, isFetching } = useFetchPhotosQuery(album);
    const [addPhoto, results] = useAddPhotoMutation();

    const handleAddPhoto = () => {
        addPhoto(album);
    }

    let content;
    if (isFetching) {
        content = <Skeleton times={3} className="h-20 w-20 m-2" />;
    }
    else if (error) {
        content = <div>Error loading photos...</div>;
    }
    else {
        content = data.map(photo => {
            return <PhotosListItem key={photo.id} photo={photo} />
        });
    }

    return (
        <div>
            <div className="m-2 flex flex-row items-center justify-between">
                <h3 className="font-bold">Photos for {album.title}</h3>
                <Button loading={results.isLoading} onClick={handleAddPhoto}>
                    + Add Photo
                </Button>
            </div>
            <div className="mx-8 flex flex-row flex-wrap justify-center">{content}</div>
        </div>
    );
}

export default PhotoList;