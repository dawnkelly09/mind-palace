import { useState } from 'react';

function OgForm({ onSubmit }) {
    const [title, setTitle] = useState('');
    const [type, setType] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');
    const [url, setUrl] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log({ title, type, image, description, url });
        // You can also clear the form here if needed
        setTitle('');
        setType('');
        setImage('');
        setDescription('');
        setUrl('');
    };
    

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
                required
            />
            <input
                type="text"
                value={type}
                onChange={(e) => setType(e.target.value)}
                placeholder="Type"
                required
            />
            <input
                type="text"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                placeholder="Image URL"
                required
            />
            <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description"
                required
            />
            <input
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="URL"
                required
            />
            <button type="submit">Create OG Content</button>
        </form>
    );
}

export default OgForm;
