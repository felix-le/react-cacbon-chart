import React from 'react';
import { useStyles } from './styles';

function Layout({ children }) {
  const styles = useStyles();
  // const thisYear = new Date().getFullYear();

  return (
    <div className={styles.root}>
      {/* <LoginBackground /> */}
      <div className={styles.pageRoot}>
        <div className={styles.container}>
          <div className={styles.heading}>
            <h1 className={styles.title}>
              Welcome to the
              <span className={styles.titleBold}>Intelligent Hub</span>
            </h1>
          </div>
          {children}

          <footer className={styles.footer}>
            <div className={styles.footerWrapper}>
              {/* <img src={logo} alt="Logo" className={styles.logo} />
              <span className={styles.copyright}>
                &copy; {thisYear} MOVE by wmnHealth
                <sup style={{ position: 'relative', top: '-2px' }}>&#174;</sup>
              </span> */}
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default Layout;
