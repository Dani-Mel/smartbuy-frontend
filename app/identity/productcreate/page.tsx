"use client";

import { useRef} from "react";
import Credentials from "../models/credentials";
import { useRouter } from "next/navigation";
import styles from "./productcreate.module.css";
import React, { useState } from 'react';
        
        const errorField = useRef<HTMLSpanElement>(null);
        const productNameInput = document.getElementById('productName') as HTMLInputElement;
        const productPriceInput = document.getElementById('productPrice') as HTMLInputElement;
        const messageDiv = document.getElementById('message');
    
        const productName = productNameInput.value;
        const productPrice = parseFloat(productPriceInput.value);

        const product = {
            name: productName,
            price: productPrice,
        };
        const fileInput = document.createElement('input');
fileInput.type = 'file';
fileInput.accept = 'image/*'; // Allow only image files

// Attach the file upload event handler
fileInput.addEventListener('change', (event) => {
    const selectedFile = (event.target as HTMLInputElement).files?.[0];

    if (selectedFile) {
        console.log(`Selected File: ${selectedFile.name}`);
        // Handle the selected file as needed (e.g., upload to a server)
    }
});
function YourComponent() {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    file: null, // Initialize a state variable for the file input
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0]; // Get the first selected file
    setFormData({ ...formData, file });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can access formData.name, formData.description, and formData.file
    // Perform your submit logic here, e.g., call an API to create a product
  };
// Add the file input to the body of the document
document.body.appendChild(fileInput);
        return (
            <>
    <div className={styles.center}>
      <form onSubmit={handleSubmit} className={styles.ProductFrom}>
        <label htmlFor="name" className={styles.label}>
          Назва
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={styles.input}
          required
          minLength={5}
          maxLength={40}
        />

        <label htmlFor="description" className={styles.label}>
          Опис
        </label>
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
          className={styles.input}
          required
          minLength={6}
          maxLength={20}
        />

        <label htmlFor="file" className={styles.label}>
          Завантажити файл
        </label>
        <input
          type="file"
          name="file"
          onChange={handleFileChange}
          className={styles.input}
          required
        />

        <button type="submit">Створити</button>
      </form>
    </div>
            </>
         );
    }