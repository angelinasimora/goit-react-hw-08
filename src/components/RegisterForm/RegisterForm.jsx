import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../../redux/auth/operations';
import css from './RegisterForm.module.css';

export const RegistrationForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialValues = { name: '', email: '', password: '' };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, 'Name must be at least 3 characters')
      .max(50, 'Name must be 50 characters or less')
      .required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Required'),
  });

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    dispatch(registerUser(values))
      .unwrap()
      .then(() => {
        resetForm();
        navigate('/contacts', { replace: true });

      })
      .catch(() => {})
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className={css.form}>
          <label className={css.label} htmlFor="name">
            Username
            <Field 
              type="text" 
              name="name" 
              autoComplete="username" 
            />
            <ErrorMessage name="name" component="div" className={css.error} />
          </label>

          <label className={css.label} htmlFor="email">
            Email
            <Field 
              type="email" 
              name="email" 
            />
            <ErrorMessage name="email" component="div" className={css.error} />
          </label>

          <label className={css.label} htmlFor="password">
            Password
            <Field 
              type="password" 
              name="password" 
              autoComplete="new-password" 
            />
            <ErrorMessage name="password" component="div" className={css.error} />
          </label>

          <button type="submit" disabled={isSubmitting}>
            Register
          </button>
        </Form>
      )}
    </Formik>
  );
};
