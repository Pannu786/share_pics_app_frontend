import GoogleLogin from 'react-google-login';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import sharevideo from '../assets/share.mp4';
import logo from '../assets/Share-Pics-logos_white.png';

export const Login = () => {

  const responseGoogle = (res) => {

  }

  return (
    <div className='flex justify-start items-center flex-col h-screen'>
      <div className='relative w-full h-full'>
        <video
          className='w-full h-full object-cover'
          src={sharevideo}
          type='video/mp4'
          loop
          controls={false}
          muted
          autoPlay
        />
        <div className='absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay '>
          <div>
            <img src={logo} width='225px' alt='logo' />
          </div>
          <div className='shadow-2xl'>
            <GoogleLogin
              clientId=''
              render={(renderProps) => (
                <button
                  type='button'
                  className='bg-mainColor flex justify-center items-center p-2 ml-4 rounded-lg cursor-pointer outline-none'
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                >
                  <FcGoogle className='mr-5 ' /> Sing in with Google
                </button>
              )}
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy='single_host_origin'
            />
          </div>
        </div>
      </div>
    </div>
  );
};
