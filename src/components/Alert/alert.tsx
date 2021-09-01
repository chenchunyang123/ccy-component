import React from "react";
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

  const classes = cls('alert', className, {
    [`alert-${type}`]: type,
  })

  return <div className={classes} >
    <div className='alert-title'>
      {title}
    </div>
    <div className='alert-content'>
      {children}
    </div>
    <div className='alert-close'>关闭</div>
  </div>
}

export default Alert;