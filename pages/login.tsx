import React, {FC, useState} from 'react';
import {Grid} from '@mui/material';
import Image from 'next/image';
import * as Yup from 'yup';
import Link from 'next/link';
import {Form, Formik, FormikHelpers} from 'formik';
import {useRouter} from 'next/router';
import {
  ButtonComponent,
  CustomInput,
  H2,
  H4,
  ValidationMessage,
} from '@lib/index';
import Logo from 'public/images/logo.png';
import Google from 'public/images/google.png';
import FB from 'public/images/fb.png';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import styles from './login.module.scss';
import InputLabel from '@mui/material/InputLabel';
import Divider from '@mui/material/Divider';
import VisibilityIcon from '@mui/icons-material/Visibility';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import {API} from '@utils/util-functions';
import {USER_MANAGEMENT_SERVICE_URL} from '@utils/constants';
import {useAppDispatch} from '@states/hooks';
import {enqueueSnackBar} from '@states/slices/loader.slice';

const LOGIN_URL = 'user/login';

const LoginSchema = Yup.object().shape({
  emailAddress: Yup.string()
    .required('This field is required')
    .email('Should be a valid email'),
  password: Yup.string().required('Password is required'),
});

const Login: FC = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [passwordShown, setPasswordShown] = useState(false);
  const [isLoading, setLoading] = useState<boolean>(false);

  const initialValues = {
    emailAddress: '',
    password: '',
  };

  const handleSubmit = async (
    values: {emailAddress: any; password: any},
    formikHelpers: FormikHelpers<any>,
  ) => {
    setLoading(true);
    const userLoginData = await API.postData(LOGIN_URL, {
      body: {
        emailAddress: values.emailAddress,
        password: values.password,
      },
      serviceUrl: USER_MANAGEMENT_SERVICE_URL,
    });
    setLoading(false);
    console.log(userLoginData);
    userLoginData === true && router.push('/');
  };

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  return (
    <div className={`${styles.before_login}`}>
      <div className={`${styles.before_login_inner}`}>
        <Grid
          container
          spacing={3}
          direction="row"
          alignItems="center"
          justifyContent="center"
          style={{minHeight: '100vh'}}>
          <Grid justifyContent="center" item sm={5} md={6} xs={12}>
            <div className={`${styles.before_login_left}`}>
              <Link href="/" passHref>
                <a className={`${styles.logo}`}>
                  <Image src={Logo} alt="logo" />
                </a>
              </Link>
              <H2 color="white" text="Join Today ! it's Free" />
              <ul>
                <li>
                  <CheckCircleIcon /> Real quick and easy
                </li>
                <li>
                  <CheckCircleIcon /> life time free membership
                </li>
                <li>
                  <CheckCircleIcon /> Premium Support
                </li>
              </ul>
            </div>
          </Grid>
          <Grid item xs={12} sm={7} md={6} justifyContent="center">
            <div className={`${styles.before_login_box}`}>
              <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={LoginSchema}>
                {({values, handleChange, handleBlur}) => (
                  <Form>
                    <H4 color="black" text="Login" />
                    <div className="form_row">
                      <InputLabel>Email</InputLabel>
                      <CustomInput
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.emailAddress}
                        name="emailAddress"
                        className={`${styles.email}`}
                        placeholder="Email or phone number"
                      />
                      <ValidationMessage name="emailAddress" />
                    </div>
                    <div className={`${styles.password_field}`}>
                      <InputLabel>Password</InputLabel>
                      <CustomInput
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                        name="password"
                        type={passwordShown ? 'text' : 'password'}
                        placeholder="Enter password"
                        className={`${styles.email}`}
                      />
                      <VisibilityIcon
                        onClick={togglePasswordVisiblity}
                        className={`${styles.visibility}`}
                      />
                      <ValidationMessage name="password" />
                    </div>
                    <div className={`${styles.forgot_row}`}>
                      <Grid
                        container
                        spacing={3}
                        direction="row"
                        alignItems="center">
                        <Grid justifyContent="center" item xs={6}>
                          <FormControlLabel
                            control={<Switch defaultChecked />}
                            label="Remember Me"
                          />
                        </Grid>
                        <Grid textAlign="right" item xs={6}>
                          <Link passHref href={'/forgot-password'}>
                            Forgot Password?
                          </Link>
                        </Grid>
                      </Grid>
                    </div>
                    <ButtonComponent
                      onClickHandler={() => {}}
                      buttonText="Login"
                      variant="contained"
                      formType="submit"
                      isLoading={isLoading}
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
                background="#333333"
              />
              <ButtonComponent
                onClickHandler={() => {}}
                buttonText="Or sign in with Facebook"
                iconOnStart={<Image src={FB} alt="logo" />}
                variant="contained"
                formType="submit"
                background="#F6F3F3"
                color="secondary"
              />
              <p>
                Don’t have an account?
                <Link passHref href={'/signup'}>
                  Sign Up
                </Link>
              </p>
            </div>
          </Grid>
        </Grid>
      </div>
      <div className={`${styles.before_login_footer}`}>
        <ul>
          <li>
            <Link passHref href="#">
              <a>@Realestateportal</a>
            </Link>
          </li>
          <li>
            <Link passHref href="#">
              <a>Privacy policy</a>
            </Link>
          </li>
          <li>
            <Link passHref href="#">
              <a>Contact Us</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Login;
