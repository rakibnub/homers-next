import React from 'react'
import { Form, Formik, FormikHelpers } from 'formik';
import {Grid} from '@mui/material';
import Image from 'next/image';
import Link from 'next/link'
import {FC} from 'react';
import { useRouter } from 'next/router';
import * as Yup from 'yup';
import {P,H4,ButtonComponent,CustomInput,ValidationMessage} from '@lib/index';
import styles from './login.module.scss';
import InputLabel from '@mui/material/InputLabel';
import Logo from 'public/images/logo1.png';
import ReportIcon from '@mui/icons-material/Report';

const ForgotPaswordSchema = Yup.object().shape({
  emailAddress: Yup.string()
    .required('This field is required')
    .email('Should be a valid email'),
});

const ForgotPassword: FC = () => {

  const router = useRouter();

  const initialValues={
    emailAddress: '',
  }

  const handleSubmit = async (values: { emailAddress: any; }, formikHelpers: FormikHelpers<any>) => {
    console.log(values);
  };

  return (
    <div className={`${styles.before_login}`}>
      <div className={`${styles.before_login_inner}`}>
        <Grid container spacing={3} direction="row" alignItems="center" justifyContent="center" style={{ minHeight: '100vh' }}>
          <Grid item xs={12} sm={7} md={6} justifyContent="center">
            <div className={`${styles.before_login_box}`}>
              <div className={`${styles.forgot_cont}`}>
                <div className={`${styles.logo_cont}`}>
                  <Link href="/" passHref>
                    <a><Image src={Logo} alt="logo" /></a>
                  </Link>
                </div>
                <H4 color='black' text="Forgot Password"/>
                <p>Enter the email address associated with your account and we'll send you a link to reset your password</p>
              </div>
              <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={ForgotPaswordSchema}
              >
              {({ values, handleChange, handleBlur,errors, touched }) => (
              <Form>
                <div className='form_row'>
                  <InputLabel>Email</InputLabel>
                  <CustomInput onChange={handleChange} onBlur={handleBlur} value={values.emailAddress}  name='emailAddress' type="text" className={`${styles.email}`} placeholder="Email or phone number" />
                  <ValidationMessage name="emailAddress" />
                </div>
                <ButtonComponent
                    onClickHandler={() => {}}
                    buttonText="Continue"
                    variant="contained"
                    formType="submit"
                />
              </Form>
              )}
              </Formik>
              <p>Want to return your account !
                <Link passHref href={'/login'}> Log In</Link>
              </p>
              <p className={`${styles.signup_text}`}>Don’t have an account?
                <Link passHref href={'/signup'}> Sign up</Link>
              </p>
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
  )
};


export default ForgotPassword;
