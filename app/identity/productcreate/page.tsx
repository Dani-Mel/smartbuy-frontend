"use client";

import { useRef} from "react";
import Credentials from "../models/credentials";
import { useRouter } from "next/navigation";
import styles from "./productcreate.module.css";
import React, { useState } from 'react';
        
        const errorField = useRef<HTMLSpanElement>(null);
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