import React, { useState,FC } from 'react'
import { Form, Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import {Grid} from '@mui/material';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import {H2,H4,ButtonComponent,CustomInput,ValidationMessage} from '@lib/index';
import Logo from 'public/images/logo.png';
import Google from 'public/images/google.png';
import FB from 'public/images/fb.png';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import styles from './login.module.scss';
import InputLabel from '@mui/material/InputLabel';
import Divider from '@mui/material/Divider';
import VisibilityIcon from '@mui/icons-material/Visibility';
import {API} from '@utils/util-functions';
import {USER_MANAGEMENT_SERVICE_URL} from '@utils/constants';

const SIGN_UP_URL = 'user/create-account';

const SignupSchema = Yup.object().shape({
  firstName: Yup.string().required('This field is required'),
  lastName: Yup.string().required('This field is required'),
  emailAddress: Yup.string()
    .required('This field is required')
    .email('Should be a valid email'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Should be atleast 6 characters'),
  confirm_password: Yup.string()
    .required('You need to confirm your password')
    .oneOf([Yup.ref('password'), null], 'Both password should match'),
});


const SignUp: FC = () => {

  const [passwordShown, setPasswordShown] = useState(false);
  const [confirmPasswordShown, setConfirmPasswordShown] = useState(false);

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const toggleConfirmPasswordVisiblity = () => {
    setConfirmPasswordShown(confirmPasswordShown ? false : true);
  };

  const router = useRouter();

  const initialValues={
    firstName: '',
    lastName: '',
    emailAddress: '',
    password: '',
    confirm_password: '',
  }

  const handleSubmit = async (values: { firstName: any; lastName: any; emailAddress: any; password: any; }, formikHelpers: FormikHelpers<any>) => {
    const userSignUpData = await API.postData(SIGN_UP_URL, {
      body: {
        firstName: values.firstName,
        lastName: values.lastName,
        emailAddress: values.emailAddress,
        password: values.password,
      },
      serviceUrl: USER_MANAGEMENT_SERVICE_URL,
    });
    userSignUpData === true && router.push('/login');
  };
  return (
    <div className={`${styles.before_login} ${styles.signup}`}>
      <div className={`${styles.before_login_inner}`}>
        <Grid container spacing={3} direction="row" alignItems="center" justifyContent="center" style={{ minHeight: '100vh' }}>
          <Grid justifyContent="center"
            item sm={5} md={6}
            xs={12}>
            <div className={`${styles.before_login_left}`}>
              <Link href="/" passHref>
                <a className={`${styles.logo}`}><Image src={Logo} alt="logo" /></a>
              </Link>
              <H2 color='white' text="Join Today ! it’s Free"/>
              <ul>
                <li><CheckCircleIcon/> Real quick and easy</li>
                <li><CheckCircleIcon/> life time free membership</li>
                <li><CheckCircleIcon/> Premium Support</li>
              </ul>
            </div>
          </Grid>
          <Grid item xs={12} sm={7} md={6} justifyContent="center">
            <div className={`${styles.before_login_box}`}>
              <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={SignupSchema}
              >
                {({ values, handleChange, handleBlur }) => (
                  <Form>
                    <H4 color='black' text="Sign up here ! it’s Free"/>
                    <div className='form_row'>
                      <Grid container spacing={2} direction="row" alignItems="center" justifyContent="center">
                        <Grid justifyContent="center" item xs={6}>
                          <InputLabel>First Name</InputLabel>
                          <CustomInput name='firstName' className={`${styles.email}`} placeholder="First Name" onChange={handleChange} onBlur={handleBlur} value={values.firstName} />
                          <ValidationMessage name="firstName" />
                        </Grid>
                        <Grid justifyContent="center" item xs={6}>
                          <InputLabel>Last Name</InputLabel>
                          <CustomInput name='lastName' className={`${styles.email}`} placeholder="Last Name" onChange={handleChange} onBlur={handleBlur} value={values.lastName} />
                          <ValidationMessage name="lastName" />
                        </Grid>
                      </Grid>
                    </div>
                    <div className='form_row'>
                      <InputLabel>Email</InputLabel>
                      <CustomInput type="email" name='emailAddress' className={`${styles.email}`} placeholder="Email or phone number" onChange={handleChange} onBlur={handleBlur} value={values.emailAddress} />
                      <ValidationMessage name="emailAddress" />
                    </div>
                    <div className={`${styles.password_field}`}>
                      <InputLabel>Password</InputLabel>
                      <CustomInput name='password' type={passwordShown ? "text" : "password"} placeholder="Enter password" className={`${styles.email}`} onChange={handleChange} onBlur={handleBlur} value={values.password} />
                      <VisibilityIcon onClick={togglePasswordVisiblity} className={`${styles.visibility}`}/>
                      <ValidationMessage name="password" />
                    </div>
                    <div className={`${styles.password_field}`}>
                      <InputLabel>Confirm Password</InputLabel>
                      <CustomInput name='confirm_password' type={confirmPasswordShown ? "text" : "password"} placeholder="Confirm password" className={`${styles.email}`} onChange={handleChange} onBlur={handleBlur} value={values.confirm_password}  />
                      <VisibilityIcon onClick={toggleConfirmPasswordVisiblity} className={`${styles.visibility}`}/>
                      <ValidationMessage name="confirm_password" />
                    </div>
                    <ButtonComponent
                        onClickHandler={() => {}}
                        buttonText="Sign Up"
                        variant="contained"
                        formType="submit"
                    />
                  </Form>
                )}
              </Formik>
              <Divider />
              <ButtonComponent
                  onClickHandler={() => {}}
                  buttonText="Or sign in with Google"
                  iconOnStart={<Image src={Google} alt="logo" />}
                  variant="contained"
                  formType="submit"
                  background='#333333'
              />
              <ButtonComponent
                  onClickHandler={() => {}}
                  buttonText="Or sign in with Facebook"
                  iconOnStart={<Image src={FB} alt="logo" />}
                  variant="contained"
                  formType="submit"
                  background='#F6F3F3'
                  color='secondary'
              />
              <p>Already have an account? <Link passHref href={'/login'}>Log In</Link></p>
            </div>
          </Grid>
        </Grid>
      </div>
      <div className={`${styles.before_login_footer}`}>
        <ul>
          <li>
            <Link passHref href='#'><a>@Realestateportal</a></Link>
          </li>
          <li>
            <Link passHref href='#'><a>Privacy policy</a></Link>
          </li>
          <li>
            <Link passHref href='#'><a>Contact Us</a></Link>
          </li>
        </ul>
      </div>
    </div>

  );
};
export default SignUp;
