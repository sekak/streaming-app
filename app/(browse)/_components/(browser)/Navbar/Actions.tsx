import { UserButton } from '@clerk/nextjs'
import { currentUser } from '@clerk/nextjs/server'
import { Clapperboard } from 'lucide-react';

const Actions = () => {

    const user = currentUser();
  return (
    <div className='flex items-center space-x-4 ml-4'>
        {!!user && (
            <div className='flex items-center space-x-2 text-muted-foreground hover:text-muted-foreground/80 cursor-pointer'>
                <Clapperboard />
                <span className='hidden lg:flex'>Dashboard</span>
            </div>
        )}
      <UserButton />

    </div>
  )
}

export default Actions
