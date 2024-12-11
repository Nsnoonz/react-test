import { ReactNode } from 'react';

interface BlankPageProps {
  children: ReactNode;
}

const BlankPage = ({ children }: BlankPageProps) => {
  return <div>{children}</div>;
};

export default BlankPage;