// import Link from "next/link";
// import styles from "./button.module.scss";





// export default function Button({ children, link={}, variant='primary' }
    
// ) {
//     const className = styles[`button_${variant}`];
//     return (
//         <Link href={link} className={className} >{children}</Link>
//     );
// }


import Link from "next/link";
import styles from "./button.module.scss";



type ButtonProps = {
  children?: React.ReactNode;
  link?: string | { pathname: string; [key: string]: string };
  variant?: 'primary' | 'ghost' | 'outline' | 'secondary' | string;
  icon?: React.ReactNode;
  onClick?: () => void;
  price?: string;
};

export default function Button({ children, link = "", variant = "primary", icon, onClick, price }: ButtonProps) {
  const className = styles[`button_${variant}`];
  
  const renderContent = () => (
    <>
      <span className={styles.buttonText}>
        {icon && <span className={styles.icon}>{icon}</span>}
        {children}
      </span>
      {price && (
        <>
          <span className={styles.divider}></span>
          <span className={styles.price}>{price}</span>
        </>
      )}
    </>
  );
  
  if (onClick) {
    return (
      <button onClick={onClick} className={className}>
        {renderContent()}
      </button>
    );
  }
  
  return (
    <Link href={link} className={className}>
      {renderContent()}
    </Link>
  );
}
