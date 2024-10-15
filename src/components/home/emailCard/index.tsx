
import Container from '../../ui/Container'
import { Button } from '../../ui/Button'
import { TitleText } from '../../ui/Typograph'

const EmailCard = () => {
  return (
    <div className='py-[5rem]'>
      <Container>
        <div className='w-full rounded-lg  bg-primary flex flex-col justify-between items-center py-12 space-y-8 relative z-[-1]'>
          <img src="/images/Ellipse.png" className='top-0 right-0 absolute z-[-1]' alt="" />
          <TitleText style='text-white text-[20px] md:text-[28px] w-[70%] text-center md:text-[48px]' text='An enterprise template to ramp up your company website'/>
          
          <div className='flex flex-col md:flex-row justify-center items-center space-y-3 md:space-y-0 gap-6'>
              <input type="text" placeholder='Your email address' className='rounded-[46px] px-6 py-3 md:w-[400px]'/>
              <Button variant='green' text='Start Now'/>
          </div>
        </div>
      </Container>
    </div>

  )
}

export default EmailCard