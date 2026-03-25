'use client';
import { Send } from "lucide-react";
import { useState } from "react";
import styles from "./Form.module.css";
import { siteContent } from "@/src/content/global";

export const Form = () => {
    const content = siteContent.contactsPage?.form;
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: ""
    });

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        alert(content.success);
        setFormData({
            name: "",
            email: "",
            phone: "",
            company: "",
            service: "",
            message: ""
        });
    };
    return (
        <div className={styles.formWrapper}>
            <h2 className={styles.formTitle}>{content.title}</h2>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div>
                    <label className={styles.label}>{content.nameLabel}</label>
                    <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={styles.input}
                    />
                </div>
                <div>
                    <label className={styles.label}>{content.emailLabel}</label>
                    <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={styles.input}
                    />
                </div>
                <div>
                    <label className={styles.label}>{content.phoneLabel}</label>
                    <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={styles.input}
                    />
                </div>
                <div>
                    <label className={styles.label}>{content.messageLabel}</label>
                    <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className={styles.textarea}
                        placeholder={content.messagePlaceholder}
                    />
                </div>
                <button type="submit" className={styles.button}>
                    <Send size={20} />
                    {content.button}
                </button>
            </form>
        </div>
    );
};