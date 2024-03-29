import Accordion from "../components/Accordion";
function AccordionPage() {

    const items = [
        {
            id: 1,
            title: 'What is React?',
            content: 'React is a front end JavaScript framework'
        },
        {
            id: 2,
            title: 'Why use React?',
            content: 'React is a favorite JS library among engineers'
        },
        {
            id: 3,
            title: 'How do you use React?',
            content: 'You use React by creating components'
        }
    ];

    return (
        <div>
            <Accordion items={items} />
        </div>
    );
}

export default AccordionPage;