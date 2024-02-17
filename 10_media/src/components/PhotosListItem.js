import { GoTrashcan, GoSync } from "react-icons/go";
import { useRemovePhotoMutation } from "../store";

function PhotosListItem({ photo }) {
    const [removePhoto, results] = useRemovePhotoMutation();

    const handleRemovePhoto = () => {
        removePhoto(photo);
    }

    const icon = results.isLoading ?
        <GoSync className='text-3xl animate-spin' /> :
        <GoTrashcan className="text-3xl" />;

    return (
        <div onClick={handleRemovePhoto} className="relative m-2 cursor-pointer">
            <img className="h-20 w-20" src={photo.url} alt="random pic" />
            <div className="absolute inset-0 flex items-center justify-center hover:bg-gray-200 opacity-0 hover:opacity-80">
                {icon}
            </div>
        </div>
    );
}

export default PhotosListItem;