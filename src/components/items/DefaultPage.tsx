import { ReactNode } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/storeReducers'
import Spinner from './Spinner';
import  Navbar from '../layout/Navbar'

interface DefaultProps {
  children: ReactNode;
}

const DefaultPage = ({ children }: DefaultProps) => {
  const loading = useSelector((state: RootState) => state.isLoading)

  return (
  <>
    <div className="flex flex-col h-screen">
      <Navbar/>
      {loading && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <Spinner />
        </div>
      )}
      <div className=''>{children}</div>
    </div>
  </>
  )
}

export default DefaultPage