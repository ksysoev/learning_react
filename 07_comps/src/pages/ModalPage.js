import { useState } from 'react';
import Modal from '../components/Modal';
import Button from '../components/Button';

function ModalPage() {
    const [showModal, setShowModal] = useState(false)

    const actionBar = (
        <div>
            <Button primary onClick={() => setShowModal(false)}>I Accept</Button>
        </div>
    );
    const modal = (<Modal onClose={() => setShowModal(false)} actionBar={actionBar}>
        <p>Here for you an important agreement for you to accept.</p>
    </Modal>);

    return (
        <div>
            <Button primary onClick={() => setShowModal(true)}>Open Modal</Button>
            {showModal && modal}
        </div>
    )
}

export default ModalPage;