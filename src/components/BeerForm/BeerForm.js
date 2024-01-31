import { Formik } from 'formik';
import * as Yup from 'yup';
import { Button, ErrMessageStyled, StyledField, StyledForm } from './BeerForm.Styled';

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
      <StyledForm>
        <label>
          <StyledField id="beer" name="beer" placeholder="Beer" />
          <ErrMessageStyled name="beer"/>
        </label>

        <label>
          <StyledField id="place" name="place" placeholder="Place" />
          <ErrMessageStyled name="place"/>
        </label>

        <label>
          <StyledField id="date" name="date" placeholder="Date" />
          <ErrMessageStyled name="date"/>
        </label>

        <label>
          <StyledField id="brewery" name="brewery" placeholder="Brewery" />
          <ErrMessageStyled name="brewery"/>
        </label>

        <label>
          <StyledField id="style" name="style" placeholder="Style" />
          <ErrMessageStyled name="style"/>
        </label>

        <Button type="submit">Add beer</Button>
      </StyledForm>
    </Formik>
  );
};

export default BeerForm;
