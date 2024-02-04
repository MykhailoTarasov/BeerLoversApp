import { Formik } from 'formik';
import * as Yup from 'yup';

import { beerStyles } from '../../constants';

import {
  Button,
  StyledErrorMessage,
  StyledField,
  StyledForm,
  StyledLabel,
  StyledSelectField,
} from './BeerForm.Styled';

// It would be better to move this from component definition.
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

  style: Yup.string().required('This is a required field!').notOneOf([beerStyles[0]], "Beer style should be specified!"),
});

const BeerForm = ({ onAdd }) => {
  return (
    <Formik
      initialValues={{
        beer: '',
        place: '',
        date: '',
        brewery: '',
        style: beerStyles[0],
      }}
      validationSchema={validation}
      onSubmit={(values, actions) => {
        onAdd(values);
        actions.resetForm();
      }}
    >
      {({ values, setFieldValue }) => (
        <StyledForm>
          <StyledLabel>
            <StyledField id="beer" name="beer" placeholder="Beer" />
            <StyledErrorMessage name="beer" component="div" />
          </StyledLabel>

          <StyledLabel>
            <StyledField id="place" name="place" placeholder="Place" />
            <StyledErrorMessage name="place" component="span" />
          </StyledLabel>

          <StyledLabel>
            <StyledField id="date" name="date" placeholder="Date" type="date" />
            <StyledErrorMessage name="date" component="span" />
          </StyledLabel>

          <StyledLabel>
            <StyledField id="brewery" name="brewery" placeholder="Brewery" />
            <StyledErrorMessage name="brewery" component="span" />
          </StyledLabel>

          <StyledLabel>
            <StyledSelectField as="select" id="style" name="style"
             onChange={(event) => {
              const { id, value } = event.target;
              setFieldValue(id, value);
             }}
             >
              {beerStyles.map((style) => <option key={style} value={style}>{style}</option>)}
            </StyledSelectField>
            <StyledErrorMessage name="style" component="span" />
          </StyledLabel>

          <Button type="submit">Add beer</Button>
        </StyledForm>
      )}
    </Formik>
  );
};

export default BeerForm;
