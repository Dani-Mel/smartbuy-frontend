"use client";

import Link from "next/link";
import styles from "./sidebar.module.css";
import { helveticaLight, helveticaRoman } from "@/app/styles/fonts";
import { useEffect } from "react";
import Image from "next/image";
import addImage from "@/public/sidebar-add.png"

export default function Sidebar() {
   function handleMouseEnter(event: any) {
      let target: HTMLElement = event.target as HTMLElement;
      if (target.classList.contains(styles.fadeOut)) {
         target.classList.replace(styles.fadeOut, styles.fadeIn);
      } else {
         target.classList.add(styles.fadeIn);
      }
      let className_ = "." + styles.inactiveLink.toString();

      let parent = target.closest("a");
      let inactiveLink = parent?.querySelector(className_);
      inactiveLink?.classList.add(styles.fadeOut);
   }
   function handleMouseLeave(event: any) {
      let target: HTMLElement = event.target as HTMLElement;
      target.classList.replace(styles.fadeIn, styles.fadeOut);
      let className_ = "." + styles.inactiveLink.toString();

      let parent = target.closest("a");
      let inactiveLink = parent?.querySelector(className_);
      inactiveLink?.classList.replace(styles.fadeOut, styles.fadeIn);
   }
   useEffect(() => {
      let spans = document.querySelectorAll("." + styles.hoverLink.toString());
      spans.forEach((x) => x.addEventListener("mouseenter", handleMouseEnter));
      spans.forEach((x) => x.addEventListener("mouseleave", handleMouseLeave));
   }, []);

   return (
      <>
         <div className={styles.categoriesBlock + " " + helveticaRoman.variable}>
            <ul className={styles.asideList + " " + helveticaLight.className}>
               <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                     <path
                        d="M1.99984 2.66667H13.3332C13.6868 2.66667 14.0259 2.80714 14.276 3.05719C14.526 3.30724 14.6665 3.64638 14.6665 4V5.33333H11.9998V4H3.33317V12H9.33317V13.3333H1.99984C1.64622 13.3333 1.30708 13.1929 1.05703 12.9428C0.80698 12.6928 0.666504 12.3536 0.666504 12V4C0.666504 3.64638 0.80698 3.30724 1.05703 3.05719C1.30708 2.80714 1.64622 2.66667 1.99984 2.66667ZM11.3332 6.66667H15.3332C15.51 6.66667 15.6796 6.73691 15.8046 6.86193C15.9296 6.98695 15.9998 7.15652 15.9998 7.33333V14C15.9998 14.1768 15.9296 14.3464 15.8046 14.4714C15.6796 14.5964 15.51 14.6667 15.3332 14.6667H11.3332C11.1564 14.6667 10.9868 14.5964 10.8618 14.4714C10.7367 14.3464 10.6665 14.1768 10.6665 14V7.33333C10.6665 7.15652 10.7367 6.98695 10.8618 6.86193C10.9868 6.73691 11.1564 6.66667 11.3332 6.66667ZM11.9998 8V12.6667H14.6665V8H11.9998Z"
                        fill="#777777"
                     />
                  </svg>
                  <Link href={"#"}>
                     <span className={styles.inactiveLink}>Смартфони та планшети</span>
                     <span className={styles.hoverLink}>Смартфони та планшети</span>
                  </Link>
               </li>
               <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                     <path
                        d="M2.66667 4H13.3333V10.6667H2.66667M13.3333 12C13.687 12 14.0261 11.8595 14.2761 11.6095C14.5262 11.3594 14.6667 11.0203 14.6667 10.6667V4C14.6667 3.26 14.0667 2.66667 13.3333 2.66667H2.66667C1.92667 2.66667 1.33333 3.26 1.33333 4V10.6667C1.33333 11.0203 1.47381 11.3594 1.72386 11.6095C1.97391 11.8595 2.31304 12 2.66667 12H0V13.3333H16V12H13.3333Z"
                        fill="#777777"
                     />
                  </svg>
                  <Link href={"#"}>
                     <span className={styles.inactiveLink}>Комп’ютери та ноутбуки</span>
                     <span className={styles.hoverLink}>Комп’ютери та ноутбуки</span>
                  </Link>
               </li>
               <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                     <path
                        d="M2.66683 2.66667H4.66683L6.00016 1.33333H10.0002L11.3335 2.66667H13.3335C13.6871 2.66667 14.0263 2.80714 14.2763 3.05719C14.5264 3.30724 14.6668 3.64638 14.6668 4V12C14.6668 12.3536 14.5264 12.6928 14.2763 12.9428C14.0263 13.1929 13.6871 13.3333 13.3335 13.3333H2.66683C2.31321 13.3333 1.97407 13.1929 1.72402 12.9428C1.47397 12.6928 1.3335 12.3536 1.3335 12V4C1.3335 3.64638 1.47397 3.30724 1.72402 3.05719C1.97407 2.80714 2.31321 2.66667 2.66683 2.66667ZM8.00016 4.66667C7.11611 4.66667 6.26826 5.01785 5.64314 5.64298C5.01802 6.2681 4.66683 7.11594 4.66683 8C4.66683 8.88405 5.01802 9.7319 5.64314 10.357C6.26826 10.9821 7.11611 11.3333 8.00016 11.3333C8.88422 11.3333 9.73206 10.9821 10.3572 10.357C10.9823 9.7319 11.3335 8.88405 11.3335 8C11.3335 7.11594 10.9823 6.2681 10.3572 5.64298C9.73206 5.01785 8.88422 4.66667 8.00016 4.66667ZM8.00016 6C8.5306 6 9.0393 6.21071 9.41438 6.58578C9.78945 6.96086 10.0002 7.46957 10.0002 8C10.0002 8.53043 9.78945 9.03914 9.41438 9.41421C9.0393 9.78929 8.5306 10 8.00016 10C7.46973 10 6.96102 9.78929 6.58595 9.41421C6.21088 9.03914 6.00016 8.53043 6.00016 8C6.00016 7.46957 6.21088 6.96086 6.58595 6.58578C6.96102 6.21071 7.46973 6 8.00016 6Z"
                        fill="#777777"
                     />
                  </svg>
                  <Link href={"#"}>
                     <span className={styles.inactiveLink}>Фото та відео</span>
                     <span className={styles.hoverLink}>Фото та відео</span>
                  </Link>
               </li>
               <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                     <path
                        d="M3.3335 2C2.00016 2 1.3335 3.33333 1.3335 4V7.33333C1.3335 8 2.00016 9.33333 3.3335 9.33333C3.74016 9.33333 4.2135 9.14667 4.66683 8.84667V13.3333C4.66683 13.7 4.96683 14 5.3335 14H6.00016C6.36683 14 6.66683 13.7 6.66683 13.3333V5.33333C6.66683 4 4.66683 2 3.3335 2ZM5.3335 6.82L3.94016 7.73333C3.60016 7.95333 3.38683 8 3.3335 8C2.86683 8 2.66683 7.38667 2.66683 7.33333V4.02C2.66683 3.94667 2.86683 3.33333 3.3335 3.33333C3.9335 3.33333 5.3335 4.73333 5.3335 5.33333V6.82ZM11.0002 10C11.4668 10 11.9135 9.92667 12.3335 9.78667V13.3333C12.3335 13.7 12.0335 14 11.6668 14H10.3335C9.96683 14 9.66683 13.7 9.66683 13.3333V9.78667C10.0868 9.92667 10.5335 10 11.0002 10ZM11.0002 2C8.9735 2 7.3335 3.64 7.3335 5.66667C7.3335 7.69333 8.9735 9.33333 11.0002 9.33333C13.0268 9.33333 14.6668 7.69333 14.6668 5.66667C14.6668 3.64 13.0268 2 11.0002 2ZM11.0002 8C9.7135 8 8.66683 6.95333 8.66683 5.66667C8.66683 4.38 9.7135 3.33333 11.0002 3.33333C12.2868 3.33333 13.3335 4.38 13.3335 5.66667C13.3335 6.95333 12.2868 8 11.0002 8Z"
                        fill="#777777"
                     />
                  </svg>

                  <Link href={"#"}>
                     <span className={styles.inactiveLink}>Аудіо</span>
                     <span className={styles.hoverLink}>Аудіо</span>
                  </Link>
               </li>
               <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                     <path
                        d="M13.9998 1.33334C14.6998 1.33334 15.2798 1.87334 15.3332 2.56667V2.66667V10.6667C15.3332 11.3667 14.7865 11.9467 14.0998 12H13.9998H9.33317V13.3333H10.6665V14.6667H5.33317V13.3333H6.6665V12H1.99984C1.29984 12 0.719837 11.4533 0.666504 10.7667V10.6667V2.66667C0.666504 1.96 1.2065 1.38667 1.89984 1.33334H1.99984H13.9998ZM13.9998 2.66667H1.99984V10.6667H13.9998V2.66667ZM7.99984 7.33334C9.47317 7.33334 10.6665 7.93334 10.6665 8.66667V9.33334H5.33317V8.66667C5.33317 7.93334 6.5265 7.33334 7.99984 7.33334ZM7.99984 4C8.73984 4 9.33317 4.6 9.33317 5.33334C9.33317 6.06667 8.73984 6.66667 7.99984 6.66667C7.25984 6.66667 6.6665 6.07334 6.6665 5.33334C6.6665 4.59334 7.2665 4 7.99984 4Z"
                        fill="#777777"
                     />
                  </svg>
                  <Link href={"#"}>
                     <span className={styles.inactiveLink}>Мультимедіа</span>
                     <span className={styles.hoverLink}>Мультимедіа</span>
                  </Link>
               </li>
               <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                     <path
                        d="M9.8865 7.44666C10.9265 8.48666 10.9265 10.18 9.8865 11.22C8.8465 12.26 7.15317 12.26 6.11317 11.22L9.8865 7.44666ZM3.99984 1.33333H11.9998C12.3535 1.33333 12.6926 1.4738 12.9426 1.72385C13.1927 1.9739 13.3332 2.31304 13.3332 2.66666V13.3333C13.3332 13.6869 13.1927 14.0261 12.9426 14.2761C12.6926 14.5262 12.3535 14.6667 11.9998 14.6667H3.99984C3.64622 14.6667 3.30708 14.5262 3.05703 14.2761C2.80698 14.0261 2.6665 13.6869 2.6665 13.3333V2.66666C2.6665 2.31304 2.80698 1.9739 3.05703 1.72385C3.30708 1.4738 3.64622 1.33333 3.99984 1.33333ZM4.6665 2.66666C4.48969 2.66666 4.32012 2.7369 4.1951 2.86192C4.07008 2.98695 3.99984 3.15652 3.99984 3.33333C3.99984 3.51014 4.07008 3.67971 4.1951 3.80473C4.32012 3.92976 4.48969 3.99999 4.6665 3.99999C4.84331 3.99999 5.01288 3.92976 5.13791 3.80473C5.26293 3.67971 5.33317 3.51014 5.33317 3.33333C5.33317 3.15652 5.26293 2.98695 5.13791 2.86192C5.01288 2.7369 4.84331 2.66666 4.6665 2.66666ZM6.6665 2.66666C6.48969 2.66666 6.32012 2.7369 6.1951 2.86192C6.07008 2.98695 5.99984 3.15652 5.99984 3.33333C5.99984 3.51014 6.07008 3.67971 6.1951 3.80473C6.32012 3.92976 6.48969 3.99999 6.6665 3.99999C6.84332 3.99999 7.01288 3.92976 7.13791 3.80473C7.26293 3.67971 7.33317 3.51014 7.33317 3.33333C7.33317 3.15652 7.26293 2.98695 7.13791 2.86192C7.01288 2.7369 6.84332 2.66666 6.6665 2.66666ZM7.99984 5.33333C6.93897 5.33333 5.92156 5.75476 5.17141 6.5049C4.42126 7.25505 3.99984 8.27246 3.99984 9.33333C3.99984 10.3942 4.42126 11.4116 5.17141 12.1618C5.92156 12.9119 6.93897 13.3333 7.99984 13.3333C9.0607 13.3333 10.0781 12.9119 10.8283 12.1618C11.5784 11.4116 11.9998 10.3942 11.9998 9.33333C11.9998 8.27246 11.5784 7.25505 10.8283 6.5049C10.0781 5.75476 9.0607 5.33333 7.99984 5.33333Z"
                        fill="#777777"
                     />
                  </svg>
                  <Link href={"#"}>
                     <span className={styles.inactiveLink}>Побутова техніка</span>
                     <span className={styles.hoverLink}>Побутова техніка</span>
                  </Link>
               </li>
               <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                     <path
                        d="M4 5.99999H5.33333V7.33333H6.66667V8.66666H5.33333V9.99999H4V8.66666H2.66667V7.33333H4V5.99999ZM12.3333 5.99999C12.5985 5.99999 12.8529 6.10535 13.0404 6.29289C13.228 6.48042 13.3333 6.73478 13.3333 6.99999C13.3333 7.26521 13.228 7.51957 13.0404 7.7071C12.8529 7.89464 12.5985 7.99999 12.3333 7.99999C12.0681 7.99999 11.8138 7.89464 11.6262 7.7071C11.4387 7.51957 11.3333 7.26521 11.3333 6.99999C11.3333 6.73478 11.4387 6.48042 11.6262 6.29289C11.8138 6.10535 12.0681 5.99999 12.3333 5.99999ZM10.3333 7.99999C10.5985 7.99999 10.8529 8.10535 11.0404 8.29289C11.228 8.48042 11.3333 8.73478 11.3333 8.99999C11.3333 9.26521 11.228 9.51957 11.0404 9.7071C10.8529 9.89464 10.5985 9.99999 10.3333 9.99999C10.0681 9.99999 9.81376 9.89464 9.62623 9.7071C9.43869 9.51957 9.33333 9.26521 9.33333 8.99999C9.33333 8.73478 9.43869 8.48042 9.62623 8.29289C9.81376 8.10535 10.0681 7.99999 10.3333 7.99999ZM11.3333 3.33333C12.571 3.33333 13.758 3.82499 14.6332 4.70016C15.5083 5.57533 16 6.76232 16 7.99999C16 9.23767 15.5083 10.4247 14.6332 11.2998C13.758 12.175 12.571 12.6667 11.3333 12.6667C10.0267 12.6667 8.84667 12.1333 8 11.2667C7.15333 12.1333 5.97333 12.6667 4.66667 12.6667C3.42899 12.6667 2.242 12.175 1.36683 11.2998C0.491665 10.4247 0 9.23767 0 7.99999C0 6.76232 0.491665 5.57533 1.36683 4.70016C2.242 3.82499 3.42899 3.33333 4.66667 3.33333H11.3333ZM4.66667 4.66666C3.78261 4.66666 2.93477 5.01785 2.30964 5.64297C1.68452 6.26809 1.33333 7.11594 1.33333 7.99999C1.33333 8.88405 1.68452 9.7319 2.30964 10.357C2.93477 10.9821 3.78261 11.3333 4.66667 11.3333C5.76 11.3333 6.72667 10.8067 7.33333 9.99999H8.66667C9.27333 10.8067 10.24 11.3333 11.3333 11.3333C12.2174 11.3333 13.0652 10.9821 13.6904 10.357C14.3155 9.7319 14.6667 8.88405 14.6667 7.99999C14.6667 7.11594 14.3155 6.26809 13.6904 5.64297C13.0652 5.01785 12.2174 4.66666 11.3333 4.66666H4.66667Z"
                        fill="#777777"
                     />
                  </svg>
                  <Link href={"#"}>
                     <span className={styles.inactiveLink}>Ігрова техніка</span>
                     <span className={styles.hoverLink}>Ігрова техніка</span>
                  </Link>
               </li>
               <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                     <path
                        d="M10.6667 10H5.33333V3.33334H10.6667M10.6667 0.666672H5.33333C4.59333 0.666672 4 1.26001 4 2.00001V11.3333C4 11.687 4.14048 12.0261 4.39052 12.2761C4.64057 12.5262 4.97971 12.6667 5.33333 12.6667H10.6667C11.0203 12.6667 11.3594 12.5262 11.6095 12.2761C11.8595 12.0261 12 11.687 12 11.3333V2.00001C12 1.26001 11.4 0.666672 10.6667 0.666672ZM5.33333 15.3333H10.6667V14H5.33333V15.3333Z"
                        fill="#777777"
                     />
                  </svg>
                  <Link href={"#"}>
                     <span className={styles.inactiveLink}>Електронні гаджети</span>
                     <span className={styles.hoverLink}>Електронні гаджети</span>
                  </Link>
               </li>
               <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                     <path
                        d="M12.6668 9.99999C13.0335 9.99999 13.3335 10.3 13.3335 10.6667C13.3335 11.0333 13.0335 11.3333 12.6668 11.3333C12.3002 11.3333 12.0002 11.0333 12.0002 10.6667C12.0002 10.3 12.3002 9.99999 12.6668 9.99999ZM12.6668 8.66666C11.5602 8.66666 10.6668 9.55999 10.6668 10.6667C10.6668 11.7733 11.5602 12.6667 12.6668 12.6667C13.7735 12.6667 14.6668 11.7733 14.6668 10.6667C14.6668 9.55999 13.7735 8.66666 12.6668 8.66666ZM6.66683 3.99999H3.3335V5.33333H6.66683V3.99999ZM11.3335 3.33333H9.3335V4.66666H11.3335V6.43333L9.00016 9.33333H6.66683V5.99999H4.00016C2.52683 5.99999 1.3335 7.19333 1.3335 8.66666V10.6667H2.66683C2.66683 11.7733 3.56016 12.6667 4.66683 12.6667C5.7735 12.6667 6.66683 11.7733 6.66683 10.6667H9.66683L12.6668 6.89999V4.66666C12.6668 3.93333 12.0735 3.33333 11.3335 3.33333ZM4.66683 11.3333C4.30016 11.3333 4.00016 11.0333 4.00016 10.6667H5.3335C5.3335 11.0333 5.0335 11.3333 4.66683 11.3333Z"
                        fill="#777777"
                     />
                  </svg>
                  <Link href={"#"}>
                     <span className={styles.inactiveLink}>Електро-транспорт</span>
                     <span className={styles.hoverLink}>Електро-транспорт</span>
                  </Link>
               </li>
               <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                     <path
                        d="M9.18674 10.2L13.1867 14.2L14.5934 12.76L10.5934 8.76L9.18674 10.2ZM11.6667 6.73333C11.4067 6.73333 11.1267 6.7 10.9067 6.60667L3.3134 14.1667L1.90674 12.76L6.84674 7.82667L5.66674 6.64L5.18674 7.10667L4.22007 6.16667V8.07333L3.7534 8.54L1.40674 6.16667L1.8734 5.7H3.74674L2.8134 4.76L5.18674 2.38667C5.96674 1.60667 7.22007 1.60667 8.00007 2.38667L6.59341 3.82667L7.5334 4.76L7.06007 5.23333L8.2534 6.42L9.46674 5.16667C9.3734 4.94667 9.3334 4.66667 9.3334 4.42C9.3334 3.10667 10.3734 2.07333 11.6667 2.07333C12.0601 2.07333 12.4067 2.16667 12.7201 2.35333L10.9401 4.13333L11.9401 5.13333L13.7201 3.35333C13.9067 3.66667 14.0001 4 14.0001 4.42C14.0001 5.7 12.9667 6.73333 11.6667 6.73333Z"
                        fill="#777777"
                     />
                  </svg>
                  <Link href={"#"}>
                     <span className={styles.inactiveLink}>Інструменти</span>
                     <span className={styles.hoverLink}>Інструменти</span>
                  </Link>
               </li>
               <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                     <g clip-path="url(#clip0_18_978)">
                        <path
                           d="M0.673208 9.02479L5.1906 15.0369C5.54876 15.5136 6.36514 15.4982 7.02515 15.0022L14.7134 9.22544C15.1237 8.91716 15.3734 8.49433 15.4165 8.10589L16.0132 2.20181L10.1795 1.13612C9.79447 1.06936 9.3156 1.18729 8.90533 1.49557L1.21708 7.27236C0.557066 7.76828 0.318271 8.55241 0.673208 9.02479Z"
                           fill="#777777"
                        />
                        <circle cx="6.18652" cy="9.63229" r="1" fill="#FCFCFC" />
                     </g>
                     <defs>
                        <clipPath id="clip0_18_978">
                           <rect width="16" height="16" fill="white" />
                        </clipPath>
                     </defs>
                  </svg>
                  <Link href={"#"}>
                     <span className={styles.inactiveLink}>Акційні товари</span>
                     <span className={styles.hoverLink}>Акційні товари</span>
                  </Link>
               </li>
               <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                     <path
                        d="M14.6665 8.00001V13.3333C14.6665 13.687 14.526 14.0261 14.276 14.2762C14.0259 14.5262 13.6868 14.6667 13.3332 14.6667H2.6665C2.31288 14.6667 1.97374 14.5262 1.72369 14.2762C1.47365 14.0261 1.33317 13.687 1.33317 13.3333V8.00001C1.15636 8.00001 0.98679 7.92977 0.861766 7.80475C0.736742 7.67972 0.666504 7.51015 0.666504 7.33334V5.33334C0.666504 4.97972 0.80698 4.64058 1.05703 4.39053C1.30708 4.14049 1.64622 4.00001 1.99984 4.00001H4.11317C4.03984 3.79334 3.99984 3.56668 3.99984 3.33334C3.99984 2.80291 4.21055 2.2942 4.58562 1.91913C4.9607 1.54406 5.4694 1.33334 5.99984 1.33334C6.6665 1.33334 7.25317 1.66668 7.61984 2.16001V2.15334L7.99984 2.66668L8.37984 2.15334V2.16001C8.7465 1.66668 9.33317 1.33334 9.99984 1.33334C10.5303 1.33334 11.039 1.54406 11.4141 1.91913C11.7891 2.2942 11.9998 2.80291 11.9998 3.33334C11.9998 3.56668 11.9598 3.79334 11.8865 4.00001H13.9998C14.3535 4.00001 14.6926 4.14049 14.9426 4.39053C15.1927 4.64058 15.3332 4.97972 15.3332 5.33334V7.33334C15.3332 7.51015 15.2629 7.67972 15.1379 7.80475C15.0129 7.92977 14.8433 8.00001 14.6665 8.00001ZM2.6665 13.3333H7.33317V8.00001H2.6665V13.3333ZM13.3332 13.3333V8.00001H8.6665V13.3333H13.3332ZM5.99984 2.66668C5.82303 2.66668 5.65346 2.73691 5.52843 2.86194C5.40341 2.98696 5.33317 3.15653 5.33317 3.33334C5.33317 3.51015 5.40341 3.67972 5.52843 3.80475C5.65346 3.92977 5.82303 4.00001 5.99984 4.00001C6.17665 4.00001 6.34622 3.92977 6.47124 3.80475C6.59627 3.67972 6.6665 3.51015 6.6665 3.33334C6.6665 3.15653 6.59627 2.98696 6.47124 2.86194C6.34622 2.73691 6.17665 2.66668 5.99984 2.66668ZM9.99984 2.66668C9.82303 2.66668 9.65346 2.73691 9.52843 2.86194C9.40341 2.98696 9.33317 3.15653 9.33317 3.33334C9.33317 3.51015 9.40341 3.67972 9.52843 3.80475C9.65346 3.92977 9.82303 4.00001 9.99984 4.00001C10.1766 4.00001 10.3462 3.92977 10.4712 3.80475C10.5963 3.67972 10.6665 3.51015 10.6665 3.33334C10.6665 3.15653 10.5963 2.98696 10.4712 2.86194C10.3462 2.73691 10.1766 2.66668 9.99984 2.66668ZM1.99984 5.33334V6.66668H7.33317V5.33334H1.99984ZM8.6665 5.33334V6.66668H13.9998V5.33334H8.6665Z"
                        fill="#777777"
                     />
                  </svg>
                  <Link href={"#"}>
                     <span className={styles.inactiveLink}>Сертифікати</span>
                     <span className={styles.hoverLink}>Сертифікати</span>
                  </Link>
               </li>
            </ul>
         </div>
         <div className={styles.contactBlock + " " + helveticaRoman.variable}>
            <ul className={styles.asideList}>
               <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                     <path
                        d="M7.99984 2.66668C9.4665 2.66668 10.6665 3.86668 10.6665 5.33334C10.6665 6.73334 9.2665 9.00001 7.99984 10.6C6.73317 8.93334 5.33317 6.73334 5.33317 5.33334C5.33317 3.86668 6.53317 2.66668 7.99984 2.66668ZM7.99984 1.33334C5.79984 1.33334 3.99984 3.13334 3.99984 5.33334C3.99984 8.33334 7.99984 12.6667 7.99984 12.6667C7.99984 12.6667 11.9998 8.26668 11.9998 5.33334C11.9998 3.13334 10.1998 1.33334 7.99984 1.33334ZM7.99984 4.00001C7.2665 4.00001 6.6665 4.60001 6.6665 5.33334C6.6665 6.06668 7.2665 6.66668 7.99984 6.66668C8.73317 6.66668 9.33317 6.06668 9.33317 5.33334C9.33317 4.60001 8.73317 4.00001 7.99984 4.00001ZM13.3332 12.6667C13.3332 14.1333 10.9332 15.3333 7.99984 15.3333C5.0665 15.3333 2.6665 14.1333 2.6665 12.6667C2.6665 11.8 3.4665 11.0667 4.73317 10.5333L5.13317 11.1333C4.4665 11.4667 3.99984 11.8667 3.99984 12.3333C3.99984 13.2667 5.79984 14 7.99984 14C10.1998 14 11.9998 13.2667 11.9998 12.3333C11.9998 11.8667 11.5332 11.4667 10.7998 11.1333L11.1998 10.5333C12.5332 11.0667 13.3332 11.8 13.3332 12.6667Z"
                        fill="#777777"
                     />
                  </svg>
                  <Link href={"#"}>
                     <span className={styles.inactiveLink}>Сервісні центри</span>
                     <span className={styles.hoverLink}>Сервісні центри</span>
                  </Link>
               </li>
               <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                     <path
                        d="M12.4802 9.83999C12.7135 9.27332 12.8402 8.66666 12.8402 7.99999C12.8402 7.51999 12.7668 7.05999 12.6402 6.63332C12.2068 6.73332 11.7535 6.78666 11.2802 6.78666C9.24016 6.78666 7.4335 5.77999 6.3335 4.22666C5.74016 5.66666 4.60683 6.83999 3.18016 7.47999C3.1535 7.64666 3.1535 7.82666 3.1535 7.99999C3.1535 9.2854 3.66413 10.5182 4.57305 11.4271C5.48198 12.336 6.71475 12.8467 8.00016 12.8467C8.70016 12.8467 9.3735 12.6933 9.98016 12.42C10.3602 13.1467 10.5335 13.5067 10.5202 13.5067C9.42683 13.8733 8.58016 14.0533 8.00016 14.0533C6.38683 14.0533 4.84683 13.42 3.7135 12.28C3.02016 11.5867 2.50683 10.74 2.22016 9.81999H1.3335V6.78666H2.06016C2.62016 4.02666 5.06683 1.94666 8.00016 1.94666C9.60016 1.94666 11.1402 2.57999 12.2802 3.71999C13.1268 4.55999 13.6935 5.63332 13.9268 6.78666H14.6668V9.77999V9.79332V9.81999H14.6268L12.2535 12L8.72016 11.6V10.4867H11.9402L12.4802 9.83999ZM6.18016 7.84666C6.38016 7.84666 6.5735 7.92666 6.7135 8.07332C6.8535 8.21332 6.9335 8.40666 6.9335 8.60666C6.9335 8.80666 6.8535 8.99999 6.7135 9.13999C6.5735 9.27999 6.38016 9.35999 6.18016 9.35999C5.76016 9.35999 5.42016 9.02666 5.42016 8.60666C5.42016 8.18666 5.76016 7.84666 6.18016 7.84666ZM9.8135 7.84666C10.2335 7.84666 10.5668 8.18666 10.5668 8.60666C10.5668 9.02666 10.2335 9.35999 9.8135 9.35999C9.3935 9.35999 9.0535 9.02666 9.0535 8.60666C9.0535 8.40509 9.13357 8.21178 9.27609 8.06925C9.41862 7.92673 9.61193 7.84666 9.8135 7.84666Z"
                        fill="#777777"
                     />
                  </svg>
                  <Link href={"#"}>
                     <span className={styles.inactiveLink}>Служба підтримки</span>
                     <span className={styles.hoverLink}>Служба підтримки</span>
                  </Link>
               </li>
               <li className={styles.cooperation}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                     <path
                        d="M14.4734 5.80666C15.3068 4.97333 14.9268 3.99999 14.4734 3.52666L12.4734 1.52666C11.6334 0.693327 10.6668 1.07333 10.1934 1.52666L9.06011 2.66666H7.33345C6.06678 2.66666 5.33345 3.33333 4.96012 4.09999L2.00012 7.05999V9.72666L1.52678 10.1933C0.693449 11.0333 1.07345 12 1.52678 12.4733L3.52678 14.4733C3.88678 14.8333 4.27345 14.9667 4.64012 14.9667C5.11345 14.9667 5.54678 14.7333 5.80678 14.4733L7.60678 12.6667H10.0001C11.1334 12.6667 11.7068 11.96 11.9134 11.2667C12.6668 11.0667 13.0801 10.4933 13.2468 9.93333C14.2801 9.66666 14.6668 8.68666 14.6668 7.99999V5.99999H14.2734L14.4734 5.80666ZM13.3334 7.99999C13.3334 8.29999 13.2068 8.66666 12.6668 8.66666H12.0001V9.33333C12.0001 9.63333 11.8734 9.99999 11.3334 9.99999H10.6668V10.6667C10.6668 10.9667 10.5401 11.3333 10.0001 11.3333H7.06012L4.87345 13.52C4.66678 13.7133 4.54678 13.6 4.47345 13.5267L2.48012 11.54C2.28678 11.3333 2.40012 11.2133 2.47345 11.14L3.33345 10.2733V7.60666L4.66678 6.27333V7.33333C4.66678 8.13999 5.20012 9.33333 6.66678 9.33333C8.13345 9.33333 8.66678 8.13999 8.66678 7.33333H13.3334V7.99999ZM13.5268 4.85999L12.3934 5.99999H7.33345V7.33333C7.33345 7.63333 7.20678 7.99999 6.66678 7.99999C6.12678 7.99999 6.00011 7.63333 6.00011 7.33333V5.33333C6.00011 5.02666 6.11345 3.99999 7.33345 3.99999H9.60678L11.1268 2.47999C11.3334 2.28666 11.4534 2.39999 11.5268 2.47333L13.5201 4.45999C13.7134 4.66666 13.6001 4.78666 13.5268 4.85999Z"
                        fill="#777777"
                     />
                  </svg>
                  <Link href={"#"}>
                     <span className={styles.inactiveLink}>Співпраця з нами</span>
                     <span className={styles.hoverLink}>Співпраця з нами</span>
                  </Link>
               </li>
            </ul>
         </div>
         <Image src={addImage} alt={"here is advertise img"}/>
      </>
   );
}
