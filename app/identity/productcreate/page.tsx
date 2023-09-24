"use client"
import { useState, ChangeEvent, FormEvent, } from "react";
import styles from "./productcreate.module.css";
import { useRouter } from "next/router";

function Create() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    file: null as File | null,
    category: "",
  });

  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    router.push("/success");
  };

  return (
    <>
      <div className={styles.center}>
        <form onSubmit={handleSubmit} className={styles.ProductForm}>
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

          <label htmlFor="category" className={styles.label}>
            Категорія
          </label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className={styles.input}
            required
            minLength={3}
            maxLength={20}
          />

<input type="submit" className={styles.button} value="Створити" />
        </form>
      </div>
    </>
  );
}