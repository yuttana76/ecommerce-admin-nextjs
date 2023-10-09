import { Button,buttonVariants } from '@/components/ui/button'
import { UserButton } from '@clerk/nextjs';

const SetupPage = ()=> {
  return (
    <div className='p-4'>
      This is protected route!
      <UserButton afterSignOutUrl='/'/>
    </div>
  )
}
export default SetupPage;
