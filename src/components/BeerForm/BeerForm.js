import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validation = Yup.object().shape({
    beer: Yup.string()
     .min(2, 'Too Short!')
     .max(50, 'Too Long!')
     .required('This is a required field!'),

     place: Yup.string()
     .min(2, 'Too Short!')
     .max(50, 'Too Long!')
     .required('This is a required field!'),

     date: Yup.string()
     .min(4, 'Too Short!')
     .max(10, 'Too Long!')
     .required('This is a required field!'),

     brewery: Yup.string()
     .min(2, 'Too Short!')
     .max(50, 'Too Long!')
     .required('This is a required field!'),

     style: Yup.string()
     .min(2, 'Too Short!')
     .max(50, 'Too Long!')
     .required('This is a required field!'),
  });


const BeerForm = ({onAdd}) => {
  return (
    <Formik
      initialValues={{
        beer: '',
        place: '',
        date: '',
        brewery: '',
        style: '',
      }}
      validationSchema={validation}
      onSubmit={(values, actions) => {
        onAdd(values);
        actions.resetForm();
      }}
    >
      <Form>
        <label>
          <Field id="beer" name="beer" placeholder="Beer" />
          <ErrorMessage name="beer"/>
        </label>

        <label>
          <Field id="place" name="place" placeholder="Place" />
          <ErrorMessage name="place"/>
        </label>

        <label>
          <Field id="date" name="date" placeholder="Date" />
          <ErrorMessage name="date"/>
        </label>

        <label>
          <Field id="brewery" name="brewery" placeholder="Brewery" />
          <ErrorMessage name="brewery"/>
        </label>

        <label>
          <Field id="style" name="style" placeholder="Style" />
          <ErrorMessage name="style"/>
        </label>

        <button type="submit">Add beer</button>
      </Form>
    </Formik>
  );
};

export default BeerForm;
