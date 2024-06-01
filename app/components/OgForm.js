'use client'
import { useState } from 'react';

function OgForm({ onSubmit }) {
    const [title, setTitle] = useState('');
    const [type, setType] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');
    const [url, setUrl] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData ={
            title: event.target.title.value,
            description: event.target.description.value,
            imageUrl: event.target.imageUrl.value,
        };

        const response = await fetch('/api/generate-og', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
        
          const data = await response.json();
          console.log(data.message); 
        // You can also clear the form here if needed
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
                value={image}
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
            <label htmlFor="url">URL: </label>
            <input
                type="text"
                id="url"
                name="url"
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
