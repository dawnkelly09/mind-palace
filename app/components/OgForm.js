'use client'
import { useState } from 'react';

function OgForm({ onSubmit }) {
    const [title, setTitle] = useState('');
    const [type, setType] = useState('');
    const [imageUrl, setImage] = useState('');
    const [description, setDescription] = useState('');
    const [linkUrl, setUrl] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = {
            title: event.target.title.value,
            type: event.target.type.value,
            imageUrl: event.target.imageUrl.value,
            description: event.target.description.value,
            linkUrl: event.target.linkUrl.value,
        };

        console.log(formData);
    
        const response = await fetch('/api/generate-og', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
        
        const data = await response.json();
        console.log(data.message);
        // Clear form fields after submission
        setTitle('');
        setType('');
        setImage('');
        setDescription('');
        setUrl('');
    };
    

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title: </label>
            <input
                type="text"
                id="title"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
                required
            />
            <label htmlFor="type">Type: </label>
            <input
                type="text"
                id="type"
                name="type"
                value={type}
                onChange={(e) => setType(e.target.value)}
                placeholder="Type"
                required
            />
            <label htmlFor="imageUrl">Image URL: </label>
            <input
                type="text"
                id="imageUrl"
                name="imageUrl"
                value={imageUrl}
                onChange={(e) => setImage(e.target.value)}
                placeholder="Image URL"
                required
            />
            <label htmlFor="description">Description: </label>
            <textarea
                value={description}
                id="description"
                name="description"
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description"
                required
            />
            <label htmlFor="linkUrl">URL: </label>
            <input
                type="text"
                id="linkUrl"
                name="linkUrl"
                value={linkUrl}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Link URL"
                required
            />
            <button type="submit">Create OG Content</button>
        </form>
    );
}

export default OgForm;
