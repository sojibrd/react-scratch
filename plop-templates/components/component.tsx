import React from 'react';
import styles from './{{pascalCase name}}.module.css';

interface {{pascalCase name}}Props {
  // define your props here
}

const {{pascalCase name}}: React.FC<{{pascalCase name}}Props> = (props) => {
  return (
    <div className={styles.container}>
      {/* Your component code here */}
      <h2>{{pascalCase name}} Component</h2>
    </div>
  );
};

export default {{pascalCase name}};
