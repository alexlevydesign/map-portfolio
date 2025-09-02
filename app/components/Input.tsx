import styles from './input.module.scss';


interface Option {
    value: string;
    label: string;
}

interface InputProps {
    placeholder?: string;
    type?: "text" | "email" | "number" | "textarea" | "select" | "radio";
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
    label?: string;
    options?: Option[]; // For select and radio types
    name?: string; // For radio inputs
}

export default function Input({ 
    placeholder = "Enter text", 
    type = "text", 
    value = "", 
    onChange, 
    label, 
    options = [],
    name 
}: InputProps) {
    const renderInput = () => {
        switch (type) {
            case "textarea":
                return (
                    <textarea
                        className={styles.textArea}
                        placeholder={placeholder}
                        value={value}
                        onChange={onChange as (e: React.ChangeEvent<HTMLTextAreaElement>) => void}
                    />
                );
            
            case "select":
                return (
                    <select
                        className={styles.input}
                        value={value}
                        onChange={onChange as (e: React.ChangeEvent<HTMLSelectElement>) => void}
                    >
                        <option value="" disabled>{placeholder}</option>
                        {options.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                );
            
            case "radio":
                return (
                    <div className={styles.radioContainer}>
                        <div className={styles.radioGroup}>
                            {options.map((option) => (
                                <label key={option.value} className={styles.radioLabel}>
                                    <input
                                        type="radio"
                                        name={name}
                                        value={option.value}
                                        checked={value === option.value}
                                        onChange={onChange as (e: React.ChangeEvent<HTMLInputElement>) => void}
                                        className={styles.radioInput}
                                    />
                                    <span>{option.label}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                );
            
            default:
                return (
                    <input 
                        className={styles.input}
                        placeholder={placeholder}
                        type={type}
                        value={value}
                        onChange={onChange as (e: React.ChangeEvent<HTMLInputElement>) => void}
                    />
                );
        }
    };

    return (
        <div className={styles.InputContainer}>
            {label && (
                <label className={styles.label}>
                    {label}
                </label>
            )}
            {renderInput()}
        </div>
    );
}