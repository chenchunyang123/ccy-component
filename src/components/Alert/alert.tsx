import React, { useState } from 'react';
import cls from 'classnames';

export type AlertType = 'success' | 'default' | 'danger' | 'warning';

interface AlertProps {
  closable?: boolean;
  type?: AlertType;
  title?: string;
  children?: React.ReactNode;
  className?: string;
}

const Alert: React.FC<AlertProps> = (props) => {
  const { closable, type, title, children, className } = props;
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  const classes = cls('alert', className, {
    [`alert-${type}`]: type,
  });

  const handleClose = () => {
    setVisible(false);
  };

  return (
    <div className={classes}>
      {title && <div className="alert-title">{title}</div>}
      <div className="alert-content">{children}</div>
      {closable && (
        <div className="alert-close" onClick={handleClose}>
          x
        </div>
      )}
    </div>
  );
};

export default Alert;
