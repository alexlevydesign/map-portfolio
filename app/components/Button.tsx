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
  children: React.ReactNode;
  link?: string | { pathname: string; [key: string]: string };
  variant?: 'primary' | 'ghost' | 'outline' | string;
  icon?: React.ReactNode;
};

export default function Button({ children, link = "", variant = "primary", icon }: ButtonProps) {
  const className = styles[`button_${variant}`];
  return (
    <Link href={link} className={className}>
      {icon && <span className={styles.icon}>{icon}</span>}
      {children}
    </Link>
  );
}
