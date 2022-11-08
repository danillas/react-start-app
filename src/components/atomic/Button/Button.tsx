import { on } from 'events';
import React from 'react';
import { classNames } from '../../../tools/classNames';
import './style.scss';

interface ButtonProps {
	className?: string;
	onClick?: VoidFunction;
}

export function Button(props: ButtonProps) {
	const { className, onClick } = props;

  return (
	<div className={classNames(["Button", "Button--m", className])} onClick={onClick}>Button</div>
  )
}