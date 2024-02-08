import Button from "../components/Button";
import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";

function ButtonPage() {
    const handleClick = () => {
        console.log('Button clicked');
    };



    return (
        <div>
            <div>
                <Button success rounded outline onClick={handleClick}>
                    <GoBell />
                    Click me
                </Button>
            </div>
            <div>
                <Button danger outline className="mb-5">
                    <GoCloudDownload />
                    Buy now!
                </Button>
            </div>
            <div>
                <Button warning>
                    <GoDatabase />
                    See Deal!
                </Button>
            </div>
            <div>
                <Button secondary outline>Hide Ads!</Button>
            </div>
            <div>
                <Button primary rounded>Something</Button>
            </div>
        </div >
    );
}

export default ButtonPage;