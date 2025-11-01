import { ComponentChildren, MouseEventHandler } from 'preact';
import {
  Link as WouterLink,
  LinkProps as WouterLinkProps
} from 'wouter-preact';

type LinkProps = WouterLinkProps & {
  children: ComponentChildren;
  className?: string;
  activeClassName?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
};

export function Link({
  to,
  children,
  className = '',
  activeClassName = '',
  onClick
}: LinkProps) {
  return (
    <WouterLink
      to={to}
      className={(isActive) =>
        [className, isActive ? activeClassName : ''].filter(Boolean).join(' ')
      }
      onClick={onClick}
    >
      {children}
    </WouterLink>
  );
}
