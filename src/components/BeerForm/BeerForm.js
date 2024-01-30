import { Formik, Field, Form } from 'formik';


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
     
      onSubmit={(values, actions) => {
        onAdd(values);
        actions.resetForm();
      }}
    >
      <Form>
        <label>
          <Field id="beer" name="beer" placeholder="Beer" />
        </label>

        <label>
          <Field id="place" name="place" placeholder="Place" />
        </label>

        <label>
          <Field id="date" name="date" placeholder="Date" />
        </label>

        <label>
          <Field id="brewery" name="brewery" placeholder="Brewery" />
        </label>

        <label>
          <Field id="style" name="style" placeholder="IPA" />
        </label>

        <button type="submit">Add beer</button>
      </Form>
    </Formik>
  );
};

export default BeerForm;
